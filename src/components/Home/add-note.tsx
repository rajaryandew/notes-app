"use client";


import { ButtonVariant } from "@/lib/types";
import { AddNoteDialog } from "./add-note-dialog";
import { AddNoteDrawer } from "./add-note-drawer";

export default function AddNote({ variant }: { variant: ButtonVariant }) {
    // TODO: better drawer styling and html bug using useMediaQuery

    return (
        <>
            <div className="hidden md:block">
                <AddNoteDialog variant={variant} />
            </div>
            <div className="block md:hidden">
                <AddNoteDrawer variant={variant} />
            </div>
        </>
    );
}
