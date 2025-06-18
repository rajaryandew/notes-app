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
import { pinNote, unpinNote } from "./server-actions/note";
import { refreshNotes } from "@/utils/refresh";

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
    setNotes: Dispatch<SetStateAction<Note[]>>,
    tagId?: number
) {
    const note: NewNote = { title, description, tagId };
    if (title) {
        try {
            await createNote(note);
            await refreshNotes(setNotes)
            setTitle("Title");
            setDescription("");
            toast("Note added successfully 📝", {
                description: "Keep those thoughts flowing!",
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
        await updateNote(note, updatedNote);
        await refreshNotes(setNotes);
        toast("Note updated ✅", {
            description: "Changes saved like a boss 💾",
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
            const deletedNotes = res?.deletedNotes;
            await refreshNotes(setNotes);
            setDeletedNotes(deletedNotes?.reverse() ?? []);
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
        await refreshNotes(setNotes);
        setDeletedNotes([]);
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
        await refreshNotes(setNotes);
        setDeletedNotes([]);
    } catch (err) {
        handlePrismaError(err);
    }
}

/**
 * Toggles the pinned state of a note and updates the UI accordingly.
 *
 * - If the note is currently pinned, it will be unpinned; otherwise, it will be pinned.
 * - Updates the notes state with the new order (pinned notes first).
 * - Shows a toast notification indicating the action.
 *
 * @param note - The note object to pin or unpin.
 * @param setNotes - State setter function for updating the notes array.
 */
export async function toggleNotePin(
    note: Note,
    setNotes: Dispatch<SetStateAction<Note[]>>
) {
    try {
        const action = note.isPinned ? unpinNote : pinNote;
        action(note).then((notes) => {
            setNotes(
                notes
                    ?.reverse()
                    .sort((a, b) => Number(b.isPinned) - Number(a.isPinned)) ??
                    []
            );
            toast(note.isPinned ? "Note unpinned 📌" : "Note pinned 📌", {
                description: note.isPinned
                    ? "Note moved to unpinned section."
                    : "Note moved to pinned section.",
            });
        });
    } catch (err) {
        handlePrismaError(err);
    }
}

export async function getActiveNotesClient(
    setNotesList: Dispatch<SetStateAction<Note[]>>,
    setLoading: Dispatch<SetStateAction<boolean>>
) {
    getActiveNotes()
        .then(() => {
            refreshNotes(setNotesList)
        })
        .catch((res) => {
            // Show error toast if fetch fails
            toast.error("Something unexpected happened!!", {
                description: res.message,
            });
        })
        .finally(() => {
            setLoading(false);
        });
}
