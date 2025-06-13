
import jwt from 'jsonwebtoken'
import { ENVIORMENT, JWT_SECRET } from "./config";
import { cookies } from "next/headers";

/**
 * sets cookie used for auth
 * @param user user object to set in the cookie
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
