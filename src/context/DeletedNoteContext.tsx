"use client"
import { Note } from "@/lib/types";
import { useContext,createContext,useState } from "react";

type DeletedNoteContextType = {
    deletedNotes: Note[],
    setDeletedNotes: React.Dispatch<React.SetStateAction<Note[]>>
}

/**
 * Context for managing deleted notes state across the app.
 * 
 * Provides:
 * - deletedNotes: Array of deleted notes.
 * - setDeletedNotes: Function to update the deleted notes array.
 */
const DeletedNoteContext= createContext<DeletedNoteContextType>({
    deletedNotes: [],
    setDeletedNotes: () => {}
});

/**
 * Provider component for DeletedNoteContext.
 * 
 * @param children - React children components that will have access to the deleted notes context.
 * @returns JSX.Element wrapping children with deleted notes context provider.
 */
export function DeletedNoteProvider({children} : {children:React.ReactNode}){
    const [deletedNotes,setDeletedNotes] = useState<Note[]>([])

    return (
        <DeletedNoteContext.Provider value={{deletedNotes,setDeletedNotes}}>
            {children}
        </DeletedNoteContext.Provider>
    )
}

/**
 * Custom hook to access the deleted notes context.
 * 
 * @returns The deleted notes context value.
 */
export const useDeletedNote = () => useContext(DeletedNoteContext)