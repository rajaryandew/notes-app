"use client"
import { Button } from "../ui/button";
import { logout } from "@/lib/server-actions/auth";

export function LogoutButton(){

    async function onLogout(){
        await logout()
        window.location.reload()
    }

    return <Button variant="destructive" onClick={onLogout}>Logout</Button>
}