"use client"
import Cookies from "js-cookie"
import { Button } from "../ui/button";

export function LogoutButton(){

    async function onLogout(){
        await Cookies.remove("username")
        window.location.reload()
    }

    return <Button variant="destructive" onClick={onLogout}>Logout</Button>
}