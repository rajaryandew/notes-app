"use client"
import { Button } from "@/components/ui/button";
import { logout } from "@/lib/server-actions/auth";

/**
 * LogoutButton component
 * 
 * Renders a button that logs out the user and reloads the page.
 * - Calls the logout server action.
 * - Reloads the window after logout to clear client state.
 * 
 * @returns JSX.Element
 */
export function LogoutButton(){

    // Handles the logout process and reloads the page
    async function onLogout(){
        await logout()
        window.location.reload()
    }

    return <Button variant="destructive" onClick={onLogout}>Logout</Button>
}