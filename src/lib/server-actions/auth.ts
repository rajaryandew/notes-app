"use server"
import { redirect } from "next/navigation";
import { getUser } from "../db/user";
import { revalidatePath } from "next/cache";
import { setAuthCookie } from "../set-cookie";
import { cookies } from "next/headers";
import { type User } from "../types";
import { addUser } from "../db/user";


export async function login(formData:FormData){
    const username = formData.get("username") as string
    const password = formData.get("password") as string
    let user;
    try{
        user = await getUser(username,password)
    } catch (err){
        console.log(err)
    }
    if(!user){
        redirect("/not-found")
    }
    else{
        await setAuthCookie(user);
        revalidatePath("/")
        redirect("/")
    }
}


export async function logout(){
    const cookieStore = await cookies()
    await cookieStore.delete("auth")
}



export async function signup(formData: FormData) {
    const user: User = Object.fromEntries(formData) as User;
    try {
        await addUser(user.username, user.password);
    } catch {
        redirect("/already-exists");
    }
    await setAuthCookie(user);
    revalidatePath("/");
    redirect("/");
}