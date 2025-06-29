"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { LogoutButton } from "./profile-logout";
import RecycleBin from "../recycle-bin/recycle-bin";
import { DeletedNoteProvider } from "@/context/DeletedNoteContext";

/**
 * ProfilePicture component
 *
 * Renders the user's profile picture as an avatar.
 * - Opens a popover on click with settings, recycle bin, and logout button.
 * - Uses DeletedNoteProvider to provide context for the recycle bin.
 *
 * @param src - The image source URL for the profile picture.
 * @returns JSX.Element
 */
export default function ProfilePicture({ src }: { src: string }) {
    return (
        <Popover>
            {/* Avatar as popover trigger */}
            <PopoverTrigger asChild>
                <Avatar>
                    <AvatarImage
                        className="rounded-full size-10 hover:opacity-80"
                        src={src}
                        alt="profile picture"
                        aria-label="profile pictue"
                    />
                    <AvatarFallback asChild>
                        <div className="rounded-full size-10 hover:opacity-80 ">
                            <p>CN</p>
                        </div>
                    </AvatarFallback>
                </Avatar>
            </PopoverTrigger>
            {/* Popover content with settings, recycle bin, and logout */}
            <PopoverContent className="m-3" asChild>
                <div className="flex flex-col gap-4">
                    <h4>Settings</h4>
                    <DeletedNoteProvider>
                        <RecycleBin />
                    </DeletedNoteProvider>
                    <LogoutButton />
                </div>
            </PopoverContent>
        </Popover>
    );
}
