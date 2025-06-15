"use client";


import { ButtonVariant } from "@/lib/types";
import { AddNoteDialog } from "./add-note-dialog";
import { AddNoteDrawer } from "./add-note-drawer";

/**
 * AddNote component
 * 
 * Renders the UI for adding a new note.
 * - Shows a dialog on medium and larger screens.
 * - Shows a drawer on small screens.
 * 
 * @param variant - Button variant to use for the add note trigger.
 * @returns JSX.Element
 */
export default function AddNote({ variant }: { variant: ButtonVariant }) {
    return (
        <>
            {/* Dialog for desktop (md and up) */}
            <div className="hidden md:block">
                <AddNoteDialog variant={variant} />
            </div>
            {/* Drawer for mobile (below md) */}
            <div className="block md:hidden">
                <AddNoteDrawer variant={variant} />
            </div>
        </>
    );
}
