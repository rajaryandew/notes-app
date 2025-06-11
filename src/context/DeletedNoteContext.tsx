"use client"
import { Note } from "@/lib/types";
import { useContext,createContext,useState } from "react";

type DeletedNoteContextType = {
    deletedNotes: Note[],
    setDeletedNotes: React.Dispatch<React.SetStateAction<Note[]>>
}

const DeletedNoteContext= createContext<DeletedNoteContextType>({
    deletedNotes: [],
    setDeletedNotes: () => {}
});

export function DeletedNoteProvider({children} : {children:React.ReactNode}){
    const [deletedNotes,setDeletedNotes] = useState<Note[]>([])

    return (
        <DeletedNoteContext.Provider value={{deletedNotes,setDeletedNotes}}>
            {children}
        </DeletedNoteContext.Provider>
    )
}

export const useDeletedNote = () => useContext(DeletedNoteContext)