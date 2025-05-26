'use server'

import { createNoteRecord, getNotesRecord, removeNoteRecord, updateNoteRecord } from "../db/notes"
import { getCookie } from "../get-cookie"
import { NewNote, Note } from "../types"
import { Prisma } from "@/generated/prisma"


export async function getNotes(){
    try{
        const username = await getCookie()
        const notes = await getNotesRecord(username)
        return notes
    } catch(err){
        if(err instanceof Prisma.PrismaClientInitializationError){
            throw new Error("Can't connect to the server... Try again");
        }
    }
}

export async function createNote(note:NewNote){
    try{
        const username = await getCookie();
        await createNoteRecord(username,note)
        return await getNotes()
    }catch(err){
        if(err instanceof Prisma.PrismaClientInitializationError){
            throw new Error("Can't connect to the server... Try again")
        }
        else if(err instanceof Error){
            throw new Error(`Error: ${err.message}`)
        }
    }
}

export async function removeNote(note:Note){
    try {
        removeNoteRecord(note);
        return await getNotes()
    } catch (err) {
        if (err instanceof Error) {
            throw new Error(err.message);
        }
    }
}

export async function updateNote(note:Note,updatedNote:NewNote){
    try {
        await updateNoteRecord(note,updatedNote)
        return await getNotes()
    } catch (error) {
        if(error instanceof Error){
            throw error.message
        }
    }
}