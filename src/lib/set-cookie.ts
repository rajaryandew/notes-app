import Cookies from "js-cookie";
import { type User } from "./types";

export async function setUsernameCookie(user:User) {
    await Cookies.set("username", user.username, {
        path: "/",
        maxAge: 60 * 60 * 24 * 7,
    });
}
