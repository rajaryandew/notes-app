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



export async function login(formData:FormData){
    const username = formData.get("username") as string
    const password = formData.get("password") as string
    let user;
    let sessionId
    try{
        user = await getUser(username,password)
        sessionId = await createSession(username)
    } catch (err){
        console.log(err)
    }
    if(!user){
        redirect("/not-found")
    }
    else{
        await setAuthCookie(sessionId!);
        revalidatePath("/")
        redirect("/")
    }
}


export async function logout(){
    const cookieStore = await cookies()
    const cookie = cookieStore.get("auth")!.value
    const token = await jwt.verify(cookie,JWT_SECRET) as JwtPayload
    const sessionId = token.id
    await deleteSession(sessionId)
    await cookieStore.delete("auth")
}



export async function signup(formData: FormData) {
    const user: User = Object.fromEntries(formData) as User;
    try {
        await addUser(user.username, user.password);
        const sessionId = await createSession(user.username)
        await setAuthCookie(sessionId!);
        
    } catch {
        redirect("/already-exists");
    }
    revalidatePath("/");
    redirect("/");
}