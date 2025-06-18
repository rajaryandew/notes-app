import { Note, Tag } from "../lib/types";

export function sortNotes(notes: Note[] | undefined) {
    const sortedNotes =
        notes
            ?.reverse()
            .sort((a, b) => Number(b.isPinned) - Number(a.isPinned)) ?? [];
    return sortedNotes;
}

export function sortTags(tags: Tag[] | undefined) {
    const sorted = tags?.sort((a, b) => {
        if (!a.user) return -1;
        if (!b.user) return 1;
        return 0;
    });
    return sorted;
}
