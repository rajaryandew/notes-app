import { redis } from "./redis";

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

export async function getUserFromSession(sessionId:string){
    const user = await redis.get(`user:${sessionId}`)
    if(!user){
        return null
    }
    return user as string
}

export async function deleteSession(sessionId:string){
    await redis.del(sessionId)
}