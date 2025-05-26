"use client"
import { Note } from "@/lib/types";
import { useContext,createContext,useState } from "react";

type NoteContextType = {
    notesList: Note[],
    setNotesList: React.Dispatch<React.SetStateAction<Note[]>>
}

const NoteContext= createContext<NoteContextType>({
    notesList: [],
    setNotesList:() => {} 
});

export function NoteProvider({children} : {children:React.ReactNode}){
    const [notesList,setNotesList] = useState<Note[]>([])

    return (
        <NoteContext.Provider value={{notesList,setNotesList}}>
            {children}
        </NoteContext.Provider>
    )
}

export const useNote = () => useContext(NoteContext)