"use server"
import { redirect } from "next/navigation";
import { getUser } from "../db/user";
import { revalidatePath } from "next/cache";
import { setAuthCookie } from "../set-cookie";
import { cookies } from "next/headers";
import { type User } from "../types";
import { addUser } from "../db/user";
import { createSession, deleteSession } from "../redis/auth";
import jwt, { JwtPayload } from "jsonwebtoken";
import { JWT_SECRET } from "../config";


/**
 * Handles user login.
 * 
 * - Extracts username and password from the provided FormData.
 * - Authenticates the user credentials against the database.
 * - If authentication succeeds, creates a session, sets an auth cookie, revalidates the home path, and redirects to "/".
 * - If authentication fails, redirects to "/not-found".
 * 
 * @param formData - FormData containing "username" and "password" fields.
 * @sideEffects Sets authentication cookie, may redirect user, may revalidate cache.
 */
export async function login(formData:FormData){
    // Extract credentials from form data
    const username = formData.get("username") as string
    const password = formData.get("password") as string
    let user;
    let sessionId
    try{
        // Authenticate user and create session
        user = await getUser(username,password)
        sessionId = await createSession(username)
    } catch (err){
        console.log(err)
    }
    if(!user){
        // Redirect if authentication fails
        redirect("/not-found")
    }
    else{
        // Set authentication cookie and redirect to home
        await setAuthCookie(sessionId!);
        revalidatePath("/")
        redirect("/")
    }
}


/**
 * Logs out the current user.
 * 
 * - Retrieves the "auth" cookie from the request.
 * - Decodes the JWT to extract the session ID.
 * - Deletes the session from Redis.
 * - Removes the "auth" cookie from the response.
 * 
 * @sideEffects Deletes authentication cookie and session.
 */
export async function logout(){
    const cookieStore = await cookies()
    // Get the auth cookie value
    const cookie = cookieStore.get("auth")!.value
    // Decode JWT to extract session ID
    const token = await jwt.verify(cookie,JWT_SECRET) as JwtPayload
    const sessionId = token.id
    // Delete session from Redis
    await deleteSession(sessionId)
    // Remove auth cookie
    await cookieStore.delete("auth")
}


/**
 * Handles user signup and session creation.
 * 
 * - Extracts user data from the provided FormData.
 * - Attempts to create a new user in the database.
 * - If successful, creates a session and sets an auth cookie.
 * - If the username already exists, redirects to "/already-exists".
 * - On success, revalidates the home path and redirects to "/".
 * 
 * @param formData - FormData containing user registration fields (must include "username" and "password").
 * @sideEffects May create a user, set authentication cookie, revalidate cache, and redirect user.
 */
export async function signup(formData: FormData) {
    // Convert form data to User object
    const user: User = Object.fromEntries(formData) as User;
    try {
        // Add user to database
        await addUser(user.username, user.password);
        // Create session and set auth cookie
        const sessionId = await createSession(user.username)
        await setAuthCookie(sessionId!);
        
    } catch {
        // Redirect if username already exists
        redirect("/already-exists");
    }
    // Revalidate and redirect to home
    revalidatePath("/");
    redirect("/");
}