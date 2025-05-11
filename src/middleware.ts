import { NextResponse } from "next/server";
import type { MiddlewareConfig, NextRequest } from "next/server";


export function middleware(request:NextRequest) {
    const authenticated = request.cookies.get("authenticated")
    console.log(authenticated)
    if(!authenticated){
        return NextResponse.redirect(new URL('/signup',request.url))
    }
}

export const config:MiddlewareConfig = {
    matcher:["/"],
}