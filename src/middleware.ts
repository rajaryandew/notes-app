import { NextResponse } from "next/server";
import { MiddlewareConfig, NextRequest } from "next/server";

const BASE_URL = process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000";
console.log(BASE_URL);
export async function middleware(request: NextRequest) {
    const response = NextResponse.next();
    const authCookie = request.cookies.get("auth");
    const token = authCookie?.value;
    let authenticated = false;

    response.cookies.delete("username");

    if (token && typeof token === "string") {
        try {
            async function getUser() {
                const res = await (
                    await fetch(`${BASE_URL}/verify`, {
                        headers: {
                            auth: `${token}`,
                        },
                    })
                ).json();

                if (res.verified === true) {
                    authenticated = true;
                }
            }
            await getUser();
        } catch (err) {
            const error = err as Error;
            console.log(error.message);
        }
    }
    if (!authenticated) {
        const redirectResponse = NextResponse.redirect(
            new URL("/login", request.url)
        );
        redirectResponse.cookies.delete("username");
        return redirectResponse;
    }

    return response;
}

export const config: MiddlewareConfig = {
    matcher: ["/"],
};
