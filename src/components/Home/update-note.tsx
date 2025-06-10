"use client";

import { Note } from "@/lib/types";
import { Dispatch, SetStateAction} from "react";
import UpdateNoteDialog from "./update-note-dialog";
import UpdateNoteDrawer from "./update-note-drawer";

export default function EditNote({
    note,
    setNotes,
}: {
    note: Note;
    setNotes: Dispatch<SetStateAction<Note[]>>;
}) {
    return(
        <>
            <div className="hidden md:block">
                <UpdateNoteDialog note={note} setNotes={setNotes}/>
            </div>
            <div className="block md:hidden">
                <UpdateNoteDrawer note={note} setNotes={setNotes}/>
            </div>
        </>
    )
}
