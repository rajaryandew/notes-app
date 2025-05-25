import { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";
import { type User } from "./types";
import jwt from 'jsonwebtoken'
import { ENVIORMENT, JWT_SECRET } from "./config";
import { cookies } from "next/headers";

export async function setUsernameCookie(
    user: User,
) {
    const cookieStore = await cookies()
    const token = jwt.sign({id:user.username},JWT_SECRET,{
        expiresIn:"30d",
    })

    cookieStore.set("auth", token, {
        httpOnly:true,
        secure: ENVIORMENT === "prod",
        path:"/",
        maxAge: 60 * 60 * 24 * 30,
    });
}
