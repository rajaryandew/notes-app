
import jwt, { JwtPayload } from "jsonwebtoken"
import { NextRequest, NextResponse } from "next/server";

import { getUserFromSession } from "@/lib/redis/auth";

export async function GET(request:NextRequest){
    const token = request.headers.get("auth")
    
    if(!token){
        return NextResponse.json({verified:false},{
            status:401
        })
    }
    const payload = (await jwt.decode(token)) as JwtPayload
    const sessionId = payload?.id 
    
    const user = await getUserFromSession(sessionId)
    
    if(user){
        return NextResponse.json({verified:true},{
            status:200
        })
    }
    return NextResponse.json({verified:false}, {
        status:401
    })
}