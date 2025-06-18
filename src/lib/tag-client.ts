import { Tag, NewTag } from "./types";
import {
    getTags,
    createTag,
    updateTag,
    deleteTag,
} from "./server-actions/tags";
import { toast } from "sonner";
import { handlePrismaError } from "./handle-error";
import { Dispatch, SetStateAction } from "react";

/**
 * Fetch all tags for a user and update state.
 */
export async function getTagsClient(
    setTags: Dispatch<SetStateAction<Tag[]>>
) {
    try {
        const tags = await getTags();
        setTags(tags ?? []);
    } catch (err) {
        handlePrismaError(err);
    }
}

/**
 * Add a new tag and update state.
 */
export async function addTagClient(
    tag: string,
    setTags: Dispatch<SetStateAction<Tag[]>>,
    resetInputs?: () => void
) {
    try {
        await createTag(tag);
        const tags = await getTags();
        setTags(tags ?? []);
        if (resetInputs) resetInputs();
        toast("Tag added successfully 🏷️");
    } catch (err) {
        handlePrismaError(err);
    }
}

/**
 * Update an existing tag and update state.
 */
export async function editTagClient(
    tag: Tag,
    updatedTag: NewTag,
    setTags: Dispatch<SetStateAction<Tag[]>>
) {
    try {
        await updateTag(tag, updatedTag);
        const tags = await getTags();
        setTags(tags ?? []);
        toast("Tag updated ✅");
    } catch (err) {
        handlePrismaError(err);
    }
}

/**
 * Delete a tag and update state.
 */
export async function removeTagClient(
    tag: Tag,
    setTags: Dispatch<SetStateAction<Tag[]>>
) {
    try {
        await deleteTag(tag);
        const tags = await getTags();
        setTags(tags ?? []);
        toast("Tag deleted 🗑️");
    } catch (err) {
        handlePrismaError(err);
    }
}
