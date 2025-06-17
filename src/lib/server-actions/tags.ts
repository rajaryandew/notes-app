import { createTagRecord, getTagRecords, updateTagRecord } from "../db/tags";
import { NewTag, Tag } from "../types";

export async function getTags(username: string) {
    try {
        const tags: Tag[] = await getTagRecords(username);
        return tags.sort((a, b) => {
            if (!a.user) return -1;
            if (!b.user) return 1;
            return 0;
        });
    } catch (err) {
        if (err instanceof Error) {
            throw new Error(err.message);
        }
    }
}

export async function createTag(newTag: NewTag) {
    try {
        await createTagRecord(newTag);
    } catch (err) {
        if (err instanceof Error) {
            throw new Error(err.message);
        }
    }
}

export async function updateTag(tag: Tag, updatedTag: NewTag) {
    try {
        await updateTagRecord(tag, updatedTag);
    } catch (err) {
        if (err instanceof Error) {
            throw new Error(err.message);
        }
    }
}

export async function deleteTag(tag: Tag) {
    try {
        await deleteTag(tag);
    } catch (err) {
        if (err instanceof Error) {
            throw new Error(err.message);
        }
    }
}
