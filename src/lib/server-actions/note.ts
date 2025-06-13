"use server";

import {
    createNoteRecord,
    deleteAllRecord,
    deleteNoteRecord,
    getActiveNotesRecord,
    getDeletedNotesRecord,
    restoreAllRecord,
    restoreNoteRecord,
    softDeleteNoteRecord,
    updateNoteRecord,
} from "../db/notes";
import { getCookie } from "../get-cookie";
import { NewNote, Note } from "../types";
import { Prisma } from "@/generated/prisma";

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