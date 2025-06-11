import { NewNote, Note } from "../types";
import prisma from "./prisma";

export async function getActiveNotesRecord(username: string) {
    const notes: Note[] = await prisma.note.findMany({
        where: {
            username: username,
            isDeleted: false
        },
    });
    return notes;
}

export async function getDeletedNotesRecord(username:string){
    const notes: Note[] = await prisma.note.findMany({
        where: {
            username: username,
            isDeleted: true,
        },
    });
    return notes;
}

export async function createNoteRecord(username: string, note: NewNote) {
    await prisma.note.create({
        data: {
            title: note.title,
            description: note.description,
            username,
        },
    });
}

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

export async function deleteNoteRecord(note:Note){
    await prisma.note.delete({
        where:{
            id: note.id
        }
    })
}

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