'use server'
import { redirect } from "next/navigation";
import { getUser } from "../db/user";
import { revalidatePath } from "next/cache";
import { setUsernameCookie } from "../set-cookie";

export async function login(formData:FormData){
    const username = formData.get("username") as string
    const password = formData.get("password") as string
    let user;
    try{
        user = await getUser(username,password)
    } catch (err){
        console.log(err)
        redirect("/not-found")
    }
    if(user){
        setUsernameCookie(user)
        revalidatePath("/")
        redirect("/")
    }
}