'use server'
import { redirect } from "next/navigation";
import { getUser } from "../db/user";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export async function login(formData:FormData){
    const username = formData.get("username") as string
    const password = formData.get("password") as string
    console.log(username,password)
    const cookieStore = await cookies()
    let user;
    try{
        user = await getUser(username,password)
    } catch (err){
        console.log(err)
        redirect("/not-found")
    }
    if(user){
        await cookieStore.set("username",user.username)
        revalidatePath("/")
        redirect("/")
    }
}