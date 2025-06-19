"use client";

import { Note } from "@/lib/types";
import { Dispatch, SetStateAction} from "react";
import UpdateNoteDialog from "./update-note-dialog";
import UpdateNoteDrawer from "./update-note-drawer";

/**
 * EditNote component
 * 
 * Renders the UI for editing a note.
 * - Shows a dialog on medium and larger screens.
 * - Shows a drawer on small screens.
 * 
 * @param note - The note object to edit.
 * @param setNotes - State setter for updating the notes array.
 * @returns JSX.Element
 */
export default function EditNote({
    note,
    setNotes,
}: {
    note: Note;
    setNotes: Dispatch<SetStateAction<Note[]>>;
}) {
    return(
        <>
            {/* Dialog for desktop (md and up) */}
            <div className="hidden md:block">
                <UpdateNoteDialog note={note} setNotes={setNotes}/>
            </div>
            {/* Drawer for mobile (below md) */}
            <div className="block md:hidden">
                <UpdateNoteDrawer note={note} setNotes={setNotes}/>
            </div>
        </>
    )
}
