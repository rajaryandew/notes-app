import jwt, { JwtPayload } from "jsonwebtoken"
import { JWT_SECRET } from "./config";
import { cookies } from "next/headers";
import { getUserFromSession } from "./redis/auth";

/**
 * Retrieves the username from the "auth" cookie if present and valid.
 * 
 * - Reads the "auth" cookie from the request headers.
 * - Verifies and decodes the JWT using the configured secret.
 * - Looks up the username from the session store using the decoded session ID.
 * - Returns the username if found, otherwise returns an empty string.
 * 
 * @returns Promise resolving to the username string, or an empty string if not authenticated.
 */
export async function getCookie(){
    const cookieStore = await cookies()
    const token = cookieStore.get("auth")?.value || ""
    try {
        if(token){
            const decoded = jwt.verify(token, JWT_SECRET) as JwtPayload;
            const username = await getUserFromSession(decoded.id);
            return username ?? ""
        }        
    } catch{
        return ""
    }
}