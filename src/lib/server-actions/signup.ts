'use server'
import { type User } from "../types"
import { addUser } from "../db/user"
import { redirect } from "next/navigation"
import { revalidatePath } from "next/cache"
import { cookies } from "next/headers"

export async function signup(formData:FormData) {
    const cookieStore = await cookies()
    const user:User = Object.fromEntries(formData) as User
    try{
        await addUser(user.username,user.email,user.password)
        
    } catch{
        redirect("/already-exists")     
    }
    await cookieStore.set("username", user.username,{
        httpOnly:true,
        path:"/",
        maxAge: 60 * 60 * 24 * 7
    });
    revalidatePath("/");
    redirect("/");
}