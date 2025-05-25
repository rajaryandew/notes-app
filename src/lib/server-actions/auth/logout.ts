import { cookies } from "next/headers";

export async function logout(){
    const cookieStore = await cookies()
    await cookieStore.delete("auth")
}