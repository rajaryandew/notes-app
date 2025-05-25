import { NextResponse } from "next/server";
import { MiddlewareConfig, NextRequest } from "next/server";
import jwt from "jsonwebtoken";

export function middleware(request: NextRequest) {
    const response = NextResponse.next();
    const token = request.cookies.get("auth")?.value;
    let authenticated = false;

    response.cookies.delete("username")

    if (token && typeof token === "string") {
        try {
            jwt.decode(token);
            authenticated = true;
        } catch(err) {
            const error = err as Error
            console.log(error.message)
        }
    }
    if (!authenticated) {
        const redirectResponse = NextResponse.redirect(
            new URL("/login", request.url)
        );
        redirectResponse.cookies.delete("username")
        return redirectResponse
    }

    return response;
}

export const config: MiddlewareConfig = {
    matcher: ["/"],
};
