'use server'
import { type User } from "../../types"
import { addUser } from "../../db/user"
import { redirect } from "next/navigation"
import { revalidatePath } from "next/cache"
import { setUsernameCookie } from "../../set-cookie"

export async function signup(formData:FormData) {
    const user:User = Object.fromEntries(formData) as User
    try{
        await addUser(user.username,user.password)
        
    } catch{
        redirect("/already-exists")     
    }
    await setUsernameCookie(user)
    revalidatePath("/");
    redirect("/");
}