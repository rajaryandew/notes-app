'use client';
import { Note } from "@/lib/types";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { EllipsisVertical, Pin, PinOff } from "lucide-react";
import { toggleNotePin } from "@/lib/note-client";
import { useNote } from "@/context/NoteContext";

/**
 * NoteActionDropdown component
 * 
 * Renders a dropdown menu for note actions (pin/unpin).
 * - Allows the user to pin or unpin a note.
 * - Updates the notes state after the action.
 * 
 * @param note - The note object for which to show actions.
 * @returns JSX.Element
 */
export default function NoteActionDropdown({ note }: { note: Note }) {
    // Get setNotes function from NoteContext to update notes list
    const setNotes = useNote().setNotesList;
    return (
        <DropdownMenu>
            {/* Trigger icon for dropdown */}
            <DropdownMenuTrigger asChild>
                <EllipsisVertical size={24} />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="p-2 w-44 " align="start">
                <DropdownMenuLabel>Note actions</DropdownMenuLabel>
                <DropdownMenuSeparator className="mb-4" />
                {/* Pin/Unpin action */}
                <DropdownMenuItem onClick={() => toggleNotePin(note,setNotes)} asChild>
                    <div className="flex items-center justify-around">
                        {note.isPinned ? (
                            <>
                                <p>Unpin this note</p>
                                <PinOff />
                            </>
                        ) : (
                            <>
                                <p>Pin this note</p>
                                <Pin/>
                            </>
                        )}
                    </div>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
