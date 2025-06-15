import jwt from 'jsonwebtoken'
import { ENVIORMENT, JWT_SECRET } from "./config";
import { cookies } from "next/headers";

/**
 * Sets the authentication cookie for the user session.
 * 
 * - Signs a JWT containing the session ID.
 * - Stores the JWT as an "auth" cookie with httpOnly and secure flags.
 * - Cookie is valid for 30 days.
 * 
 * @param sessionId - The session ID to encode in the JWT and store in the cookie.
 * @sideEffects Modifies the response cookies.
 */
export async function setAuthCookie(
    sessionId:string,
) {
    const cookieStore = await cookies()
    const token = jwt.sign({id:sessionId},JWT_SECRET,{
        expiresIn:"30d",
    })

    cookieStore.set("auth", token, {
        httpOnly:true,
        secure: ENVIORMENT === "prod",
        path:"/",
        maxAge: 60 * 60 * 24 * 30,
    });
}
