import { type Note as NoteType } from "@/lib/types";
import Note from "./note";
import type { Dispatch, SetStateAction } from "react";

export default function Notes({
    searchValue,
    notes,
    setNotes
}: {
    searchValue: string;
    notes: NoteType[];
    setNotes:Dispatch<SetStateAction<NoteType[]>>
}) {

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {notes.map((note, index) =>
                note.title
                    .toLowerCase()
                    .startsWith(searchValue.toLowerCase()) ||
                note.description!
                    .toLowerCase()
                    .startsWith(searchValue.toLowerCase()) ? (
                    <Note key={index} note={note} setNotes={setNotes} index={index}></Note>
                ) : null
            )}
        </div>
    );
}
