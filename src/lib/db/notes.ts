import { NewNote, Note } from "../types";
import prisma from "./prisma";

/**
 * Fetch all active (not deleted) notes for a given user.
 * @param username - The username whose notes to fetch.
 * @returns Promise resolving to an array of active notes.
 */
export async function getActiveNotesRecord(username: string) {
    const notes: Note[] = await prisma.note.findMany({
        where: {
            username: username,
            isDeleted: false
        },
    });
    return notes;
}

/**
 * Fetch all deleted notes for a given user.
 * @param username - The username whose deleted notes to fetch.
 * @returns Promise resolving to an array of deleted notes.
 */
export async function getDeletedNotesRecord(username:string){
    const notes: Note[] = await prisma.note.findMany({
        where: {
            username: username,
            isDeleted: true,
        },
    });
    return notes;
}

/**
 * Create a new note for a user.
 * @param username - The username for whom to create the note.
 * @param note - The note data (title and description).
 * @returns Promise resolving when the note is created.
 */
export async function createNoteRecord(username: string, note: NewNote) {
    await prisma.note.create({
        data: {
            title: note.title,
            description: note.description,
            username,
        },
    });
}

/**
 * Soft delete a note (mark as deleted without removing from database).
 * @param note - The note to soft delete.
 * @returns Promise resolving when the note is soft deleted.
 */
export async function softDeleteNoteRecord(note: Note) {
    const expiresAt = new Date(new Date().getTime() + 30 * 24 * 60 * 60 * 1000)
    await prisma.note.update({
        where: {
            id: note.id,
        },
        data:{
            isDeleted:true,
            expiresAt
        }
    });
}

/**
 * Permanently delete a note from the database.
 * @param note - The note to delete.
 * @returns Promise resolving when the note is permanently deleted.
 */
export async function deleteNoteRecord(note:Note){
    await prisma.note.delete({
        where:{
            id: note.id
        }
    })
}

/**
 * Update an existing note.
 * @param note - The note to update.
 * @param updatedNote - The new data for the note.
 * @returns Promise resolving when the note is updated.
 */
export async function updateNoteRecord(note: Note, updatedNote: NewNote) {
    await prisma.note.update({
        where:{
            id:note.id
        },
        data:{
            title:updatedNote.title,
            description:updatedNote.description
        }
    });
}

/**
 * Restore a soft-deleted note.
 * @param note - The note to restore.
 * @returns Promise resolving when the note is restored.
 */
export async function restoreNoteRecord(note: Note){
    await prisma.note.update({
        where:{
            id:note.id
        },
        data:{
            isDeleted:false,
            expiresAt: null
        }
    })
}

/**
 * Restore all soft-deleted notes for a user.
 * @param username - The username whose notes to restore.
 * @returns Promise resolving when all notes are restored.
 */
export async function restoreAllRecord(username:string){
    await prisma.note.updateMany({
        where:{
            username,
            isDeleted: true
        },
        data: {
            isDeleted:false,
            expiresAt:null
        }
    })
}

/**
 * Permanently delete all soft-deleted notes for a user.
 * @param username - The username whose notes to delete.
 * @returns Promise resolving when all notes are permanently deleted.
 */
export async function deleteAllRecord(username:string){
    await prisma.note.deleteMany({
        where:{
            username,
            isDeleted:true
        }
    })
}

/**
 * Pin a note to the top of the list.
 * @param note - The note to pin.
 * @returns Promise resolving when the note is pinned.
 */
export async function pinNoteRecord(note: Note) {
    await prisma.note.update({
        where: {
            id: note.id,
        },
        data: {
            isPinned: true,
        },
    });
}

/**
 * Unpin a note, removing it from the top of the list.
 * @param note - The note to unpin.
 * @returns Promise resolving when the note is unpinned.
 */
export async function unpinNoteRecord(note: Note) {
    await prisma.note.update({
        where: {
            id: note.id,
        },
        data: {
            isPinned: false,
        },
    });
}