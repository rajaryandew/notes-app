import { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";
import { type User } from "./types";

export async function setUsernameCookie(
    cookieStore: ReadonlyRequestCookies,
    user: User,
) {
    cookieStore.set("username", user.username, {
        path: "/",
        maxAge: 60 * 60 * 24 * 7,
    });
}
