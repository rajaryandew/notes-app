import { cookies } from "next/headers";
import { type User } from "./types";

export async function setUsernameCookie(user: User) {
  const cookieStore = cookies();
  cookieStore.set("username", user.username, {
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });
}
