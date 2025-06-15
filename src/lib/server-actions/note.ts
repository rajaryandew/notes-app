"use server";

import {
    createNoteRecord,
    deleteAllRecord,
    deleteNoteRecord,
    getActiveNotesRecord,
    getDeletedNotesRecord,
    pinNoteRecord,
    restoreAllRecord,
    restoreNoteRecord,
    softDeleteNoteRecord,
    unpinNoteRecord,
    updateNoteRecord,
} from "../db/notes";
import { getCookie } from "../get-cookie";
import { NewNote, Note } from "../types";
import { Prisma } from "@/generated/prisma";

/**
 * Fetches all active (non-deleted) notes for the current user.
 * 
 * @returns Promise resolving to an array of active notes.
 * @throws Error if the database connection fails.
 */
export async function getActiveNotes() {
    try {
        const username = await getCookie();
        const notes = await getActiveNotesRecord(username!);
        return notes;
    } catch (err) {
        if (err instanceof Prisma.PrismaClientInitializationError) {
            throw new Error("Can't connect to the server... Try again");
        }
    }
}

/**
 * Fetches all deleted notes for the current user.
 * 
 * @returns Promise resolving to an array of deleted notes.
 * @throws Error if the database connection fails.
 */
export async function getDeletedNotes() {
    try {
        const username = await getCookie();
        const deletedNotes = await getDeletedNotesRecord(username!);
        return deletedNotes;
    } catch (err) {
        if (err instanceof Prisma.PrismaClientInitializationError) {
            throw new Error("Can't connect to the server... Try again");
        }
    }
}

/**
 * Creates a new note for the current user.
 * 
 * @param note - The note data to create (title, description, etc.).
 * @returns Promise resolving to the updated list of active notes.
 * @throws Error if the database connection fails or note creation fails.
 */
export async function createNote(note: NewNote) {
    try {
        const username = await getCookie();
        await createNoteRecord(username!, note);
        return await getActiveNotes();
    } catch (err) {
        if (err instanceof Prisma.PrismaClientInitializationError) {
            throw new Error("Can't connect to the server... Try again");
        } else if (err instanceof Error) {
            throw new Error(`Error: ${err.message}`);
        }
    }
}

/**
 * Soft deletes a note (moves it to deleted state).
 * 
 * @param note - The note to soft delete.
 * @returns Promise resolving to the updated list of deleted notes.
 * @throws Error if the operation fails.
 */
export async function softDeleteNote(note: Note) {
    try {
        softDeleteNoteRecord(note);
        return await getDeletedNotes();
    } catch (err) {
        if (err instanceof Error) {
            throw new Error(err.message);
        }
    }
}

/**
 * Permanently removes a note from the database.
 * 
 * @param note - The note to delete.
 * @returns Promise resolving to the updated list of active notes.
 * @throws Error if the operation fails.
 */
export async function removeNote(note: Note) {
    try {
        deleteNoteRecord(note);
        return await getActiveNotes();
    } catch (err) {
        if (err instanceof Error) {
            throw new Error(err.message);
        }
    }
}

/**
 * Updates an existing note with new data.
 * 
 * @param note - The note to update.
 * @param updatedNote - The new note data.
 * @returns Promise resolving to the updated list of active notes.
 * @throws Error if the update fails.
 */
export async function updateNote(note: Note, updatedNote: NewNote) {
    try {
        await updateNoteRecord(note, updatedNote);
        return await getActiveNotes();
    } catch (error) {
        if (error instanceof Error) {
            throw error.message;
        }
    }
}

/**
 * Restores a deleted note back to active notes.
 * 
 * @param note - The note to restore.
 * @returns Promise resolving to an object containing the updated list of deleted notes.
 * @throws Error if the restore fails.
 */
export async function undeleteNote(note: Note) {
    let deletedNotes
    try {
        await restoreNoteRecord(note);
        deletedNotes = await getDeletedNotes()
        return {
            deletedNotes,
        };
    } catch(error) {
        if(error instanceof Error){
            throw error.message
        }
    }
}

/**
 * Restores all deleted notes for the current user.
 * 
 * @throws Error if the restore operation fails.
 */
export async function restoreAllNotes(){
    const username = await getCookie()
    try{
        await restoreAllRecord(username!)
    }catch(error){
        if (error instanceof Error) {
            throw error.message;
        }
    }
}

/**
 * Permanently deletes all deleted notes for the current user.
 * 
 * @throws Error if the delete operation fails.
 */
export async function deleteAllNotes(){
    const username = await getCookie()
    try{
        await deleteAllRecord(username!)
    } catch(error){
        if (error instanceof Error) {
            throw error.message;
        }
    }
}

/**
 * Pins a note for the current user.
 * 
 * @param note - The note to pin.
 * @returns Promise resolving to the updated list of active notes.
 * @throws Error if the operation fails.
 */
export async function pinNote(note: Note) {
    try {
        await pinNoteRecord(note);
        return await getActiveNotes();
    } catch (err) {
        if (err instanceof Error) {
            throw new Error(err.message);
        }
    }
}

/**
 * Unpins a note for the current user.
 * 
 * @param note - The note to unpin.
 * @returns Promise resolving to the updated list of active notes.
 * @throws Error if the operation fails.
 */
export async function unpinNote(note: Note) {
    try {
        await unpinNoteRecord(note);
        return await getActiveNotes();
    } catch (err) {
        if (err instanceof Error) {
            throw new Error(err.message);
        }
    }
}