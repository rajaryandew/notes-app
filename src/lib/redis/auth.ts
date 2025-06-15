import { redis } from "./redis";

/**
 * Creates a new session for the given username.
 * 
 * - Generates a unique session ID.
 * - Stores the session in Redis with a 30-day expiration.
 * - Ensures the session ID is unique by checking Redis.
 * 
 * @param username - The username to associate with the session.
 * @returns Promise resolving to the new session ID.
 */
export async function createSession(username:string){
    let sessionId;
    let sessionIdExists = true
    while(sessionIdExists){
        sessionId = crypto.randomUUID()
        sessionIdExists = await redis.get(`user:${sessionId}`) || false
    }
    try{
        await redis.setex(`user:${sessionId}`, 30 * 24 * 60 * 60,username)
        return sessionId
    } catch(err){
        console.log(err);
    }
}

/**
 * Retrieves the username associated with a session ID from Redis.
 * 
 * @param sessionId - The session ID to look up.
 * @returns Promise resolving to the username string, or null if not found.
 */
export async function getUserFromSession(sessionId:string){
    const user = await redis.get(`user:${sessionId}`)
    if(!user){
        return null
    }
    return user as string
}

/**
 * Deletes a session from Redis by its session ID.
 * 
 * @param sessionId - The session ID to delete.
 * @returns Promise resolving when the session is deleted.
 */
export async function deleteSession(sessionId:string){
    await redis.del(`user:${sessionId}`)
}