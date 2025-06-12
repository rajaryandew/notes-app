import { NewNote, Note } from "./types";
import {
    createNote,
    deleteAllNotes,
    getActiveNotes,
    removeNote,
    restoreAllNotes,
    softDeleteNote,
    undeleteNote,
    updateNote,
} from "./server-actions/note";
import { toast } from "sonner";
import { handlePrismaError } from "./handle-error";
import { Dispatch, SetStateAction } from "react";

// setNotes from note context

/**
 * add note to database and then set Notes state to have the new note
 * @param title note title
 * @param description note description(optional)
 * @param setTitle add note dialog title input state
 * @param setDescription add note dialog description input state
 */
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
            await createNote(note).then((notes) => {
                setNotes(notes?.reverse() ?? []);
                setTitle("Title");
                setDescription("");
                toast("Note added successfully 📝", {
                    description: "Keep those thoughts flowing!",
                });
            });
        } catch (err) {
            handlePrismaError(err);
        }
    } else {
        toast.error("Title not found!!", {
            description: "Please enter a title to continue",
        });
    }
}

/**
 * deletes notes from database and then updates the ui
 * @param note note object to delete
 */
export async function deleteNote(
    note: Note,
    setNotes: Dispatch<SetStateAction<Note[]>>
) {
    try {
        removeNote(note).then(() => {
            setNotes((n) => n.filter((no) => no.id !== note.id));
            toast("Note permanently removed ⚠️", {
                description: "This action cannot be undone.",
            });
        });
    } catch (err) {
        handlePrismaError(err);
    }
}

/**
 * deletes notes from database and then updates the ui
 * @param note note object to delete
 */
export async function tempDeleteNote(
    note: Note,
    setNotes: Dispatch<SetStateAction<Note[]>>
) {
    try {
        softDeleteNote(note).then(() => {
            setNotes((n) => n.filter((no) => no.id !== note.id));
            toast("Note removed ⚠️", {
                description:
                    "This note can still be accessed through recycle bin.",
            });
        });
    } catch (err) {
        handlePrismaError(err);
    }
}

/**
 * edits note in the database by accessing the actual note using `note` and updates with the updated note data
 * @param note the initial notes object
 * @param updatedNote updated notes object
 */
export async function editNote(
    note: Note,
    updatedNote: NewNote,
    setNotes: Dispatch<SetStateAction<Note[]>>
) {
    try {
        updateNote(note, updatedNote).then((notes) => {
            setNotes(notes?.reverse() ?? []);
            toast("Note updated ✅", {
                description: "Changes saved like a boss 💾",
            });
        });
    } catch (err) {
        handlePrismaError(err);
    }
}

export async function restoreNote(
    note: Note,
    setNotes: Dispatch<SetStateAction<Note[]>>,
    setDeletedNotes: Dispatch<SetStateAction<Note[]>>
) {
    try {
        undeleteNote(note).then(async (res) => {
            const deletedNotes = res?.deletedNotes
            const activeNotes = await getActiveNotes()
            setNotes(activeNotes?.reverse() ?? []);
            setDeletedNotes(deletedNotes?.reverse() ?? [])
            toast("Note restored ✅", {
                description: "This note is restored from the recycle bin ✅",
            });
        });
    } catch (err) {
        handlePrismaError(err);
    }
}

export async function restoreAll(
    setNotes: Dispatch<SetStateAction<Note[]>>,
    setDeletedNotes: Dispatch<SetStateAction<Note[]>>
) {
    try {
        await restoreAllNotes();
        const notes = await getActiveNotes()
        setNotes(notes?.reverse() ?? [])
        setDeletedNotes([])
    } catch (err) {
        handlePrismaError(err);
    }
}

export async function deleteAll(
    setNotes: Dispatch<SetStateAction<Note[]>>,
    setDeletedNotes: Dispatch<SetStateAction<Note[]>>
) {
    try {
        await deleteAllNotes();
        const notes = await getActiveNotes()
        setNotes(notes?.reverse() ?? [])
        setDeletedNotes([])
    } catch (err) {
        handlePrismaError(err);
    }
}
