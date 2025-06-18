import { Note, Tag } from "@/lib/types";
import { Dispatch, SetStateAction } from "react";
import { sortNotes, sortTags } from "./sort";
import { getActiveNotes } from "@/lib/server-actions/note";
import { getTags } from "@/lib/server-actions/tags";

export async function refreshNotes(setNotes: Dispatch<SetStateAction<Note[]>>) {
    const notes = await getActiveNotes();
    setNotes(sortNotes(notes) || []);
}

export async function refreshTags(setTags: Dispatch<SetStateAction<Tag[]>>) {
    const tags = await getTags();
    setTags(sortTags(tags) || []);
}
