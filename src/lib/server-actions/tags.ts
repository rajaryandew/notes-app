"use server"
import { createTagRecord, deleteTagRecord, getTagRecords, updateTagRecord } from "../db/tags";
import { getCookie } from "../get-cookie";
import { NewTag, Tag } from "../types";

export async function getTags() {
    const username = await getCookie()
    try {
        console.log(username)
        const tags: Tag[] = await getTagRecords(username ?? "") || [];
        const sorted = tags.sort((a, b) => {
            if (!a.user) return -1;
            if (!b.user) return 1;
            return 0
        });
        return sorted
    } catch (err) {
        if (err instanceof Error) {
            throw new Error(err.message);
        }
    }
}

export async function createTag(tagName: string) {
    const username = await getCookie()
    try {
        await createTagRecord({name:tagName,user:username});
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
        await deleteTagRecord(tag);
    } catch (err) {
        if (err instanceof Error) {
            throw new Error(err.message);
        }
    }
}
