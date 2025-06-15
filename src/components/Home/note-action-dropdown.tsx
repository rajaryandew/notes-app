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
import { Button } from "../ui/button";

export default function NoteActionDropdown({ note }: { note: Note }) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <EllipsisVertical size={24} />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="p-2 w-44 " align="start">
                <DropdownMenuLabel>Note actions</DropdownMenuLabel>
                <DropdownMenuSeparator className="mb-4" />
                <DropdownMenuItem className="" asChild>
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
