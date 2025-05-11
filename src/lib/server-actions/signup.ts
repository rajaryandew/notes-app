'use server'
import { type User } from "../types"
import { addUser } from "../db/user"
import { redirect } from "next/navigation"
import { revalidatePath } from "next/cache"
import { cookies } from "next/headers"
import { Prisma } from "@/generated/prisma"

export async function signup(formData:FormData) {
    const cookieStore = await cookies()
    const user:User = Object.fromEntries(formData) as User
    try{
        await addUser(user.username,user.email,user.password)
        
    } catch(err:any){
        redirect("/already-exists")     
    }
    await cookieStore.set("username", user.username);
    revalidatePath("/");
    redirect("/");
}