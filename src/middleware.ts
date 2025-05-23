import { NextResponse } from "next/server";
import type { MiddlewareConfig, NextRequest } from "next/server";


export function middleware(request:NextRequest) {
    const authenticated = request.cookies.get("username")
    if(!authenticated){
        return NextResponse.redirect(new URL('/login',request.url))
    }
}

export const config:MiddlewareConfig = {
    matcher:["/"],
}