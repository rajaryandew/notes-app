"use client"
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { LogoutButton } from "./logout-button";
import RecycleBin from "./recycle-bin";
import {
    DeletedNoteProvider,
    useDeletedNote,
} from "@/context/DeletedNoteContext";
import { useEffect, useState } from "react";
import { getDeletedNotes } from "@/lib/server-actions/note";
import { Note } from "@/lib/types";

export default function ProfilePicture({ src }: { src: string }) {
    const [deletedNotes,setDeletedNotes] = useState<Note[]>([])
    return (
        <Popover>
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
