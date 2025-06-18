"use server"
import { createTagRecord, deleteTagRecord, getTagRecords, updateTagRecord } from "../db/tags";
import { getCookie } from "../get-cookie";
import { NewTag, Tag } from "../types";

export async function getTags() {
    const username = await getCookie()
    try {
        const tags: Tag[] = await getTagRecords(username ?? "") || [];
        return tags
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
