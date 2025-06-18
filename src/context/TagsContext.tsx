"use client"
import { Tag } from "@/lib/types";
import { useContext,createContext,useState } from "react";

type TagContextType = {
    tags: Tag[],
    setTags: React.Dispatch<React.SetStateAction<Tag[]>>
}

/**
 * Context for managing the main tags list state across the app.
 * 
 * Provides:
 * - tags: Array of all tags.
 * - setTags: Function to update the tags array.
 */
const TagContext = createContext<TagContextType>({
    tags: [],
    setTags:() => {} 
});

/**
 * Provider component for NoteContext.
 * 
 * @param children - React children components that will have access to the tags context.
 * @returns JSX.Element wrapping children with tags context provider.
 */
export function TagProvider({children} : {children:React.ReactNode}){
    const [tags,setTags] = useState<Tag[]>([])

    return (
        <TagContext.Provider value={{tags,setTags}}>
            {children}
        </TagContext.Provider>
    )
}

/**
 * Custom hook to access the tags context.
 * 
 * @returns The tags context value.
 */
export const useTags = () => useContext(TagContext)