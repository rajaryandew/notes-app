import { NewNote, Note } from "../types";
import prisma from "./prisma";

export async function getNotesRecord(username: string) {
    const notes: Note[] = await prisma.note.findMany({
        where: {
            username: username,
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

export async function removeNoteRecord(note: Note) {
    await prisma.note.delete({
        where: {
            id: note.id,
        },
    });
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
