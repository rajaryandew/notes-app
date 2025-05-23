'use server'

import { createNoteRecord, getNotesRecord, removeNoteRecord } from "../db/notes"
import { NewNote, Note } from "../types"
import { cookies } from "next/headers"


export async function getNotes(){
    try{
        const username = (await cookies()).get("username")!.value
        const notes = await getNotesRecord(username)
        return notes
    } catch(err:any){
        throw new Error(err.message)
    }
}

export async function createNote(note:NewNote){
    try{
        const username = (await cookies()).get("username")!.value;
        await createNoteRecord(username,note)
        return await getNotes()
    }catch(err:any){
        throw new Error(err.message)
    }
}

export async function removeNote(note:Note){
    try {
        removeNoteRecord(note);
        return await getNotes()
    } catch (err: any) {
        throw new Error(err.message);
    }
}