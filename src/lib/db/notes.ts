import { NewNote, Note } from "../types";
import prisma from "./prisma";

export async function getNotesRecord(username: string) {
    const notes:Note[] = await prisma.note.findMany({
        where: {
            username: username,
        },
    });
    return notes
}

export async function createNoteRecord(username:string,note:NewNote){
    prisma.note.create({
        data:{
            title:note.title,
            description:note.title,
            username
        }
    })
}

export async function removeNoteRecord(note:Note){
    prisma.note.delete({
        where: {
            id:note.id,
        }
    })
}