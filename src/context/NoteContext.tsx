"use client"
import { Note } from "@/lib/types";
import { useContext,createContext,useState } from "react";

type NoteContextType = {
    notesList: Note[],
    setNotesList: React.Dispatch<React.SetStateAction<Note[]>>
}

/**
 * Context for managing the main notes list state across the app.
 * 
 * Provides:
 * - notesList: Array of all notes.
 * - setNotesList: Function to update the notes array.
 */
const NoteContext= createContext<NoteContextType>({
    notesList: [],
    setNotesList:() => {} 
});

/**
 * Provider component for NoteContext.
 * 
 * @param children - React children components that will have access to the notes context.
 * @returns JSX.Element wrapping children with notes context provider.
 */
export function NoteProvider({children} : {children:React.ReactNode}){
    const [notesList,setNotesList] = useState<Note[]>([])

    return (
        <NoteContext.Provider value={{notesList,setNotesList}}>
            {children}
        </NoteContext.Provider>
    )
}

/**
 * Custom hook to access the notes context.
 * 
 * @returns The notes context value.
 */
export const useNote = () => useContext(NoteContext)