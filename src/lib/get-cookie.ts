import jwt, { JwtPayload } from "jsonwebtoken"
import { JWT_SECRET } from "./config";
import { cookies } from "next/headers";

export async function getCookie(){
    const cookieStore = await cookies()
    const token = cookieStore.get("auth")?.value || ""
    try {
        if(token){
            const decoded = jwt.verify(token, JWT_SECRET) as JwtPayload;
            const username = decoded.id
            return username
        }        
    } catch{
        return
    }
}