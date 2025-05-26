import { NewNote, Note } from "./types";
import { createNote, removeNote, updateNote } from "./server-actions/note";
import { toast } from "sonner";
import { handlePrismaError } from "./handle-error";
import { Dispatch, SetStateAction } from "react";

export async function addNote(
    title: string,
    description: string,
    setTitle: Dispatch<SetStateAction<string>>,
    setDescription: Dispatch<SetStateAction<string>>,
    setNotes: Dispatch<SetStateAction<Note[]>>
) {
    const note: NewNote = { title, description };
    if (title) {
        try {
            const notes: Note[] = (await createNote(note)) ?? [];
            setNotes(notes.reverse() ?? []);
            setTitle("Title");
            setDescription("");
        } catch (err) {
            handlePrismaError(err);
        }
    } else {
        toast.error("Title not found!!", {
            description: "Please enter a title to continue",
        });
    }
}

export async function onDelete(
    note: Note,
    setNotes: Dispatch<SetStateAction<Note[]>>
) {
    try {
        await removeNote(note);
        setNotes((n) => n.filter((no) => no.id !== note.id));
    } catch (err) {
        handlePrismaError(err)
    }
}


export async function editNote(
    note: Note,
    updatedNote: NewNote,
    setNotes: Dispatch<SetStateAction<Note[]>>
) {
    try {
        const notes: Note[] = (await updateNote(note, updatedNote)) ?? [];
        setNotes(notes.reverse());
    } catch (err) {
        handlePrismaError(err)
    }
}
