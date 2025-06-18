import { Tag, NewTag } from "./types";
import {
    createTag,
    updateTag,
    deleteTag,
} from "./server-actions/tags";
import { toast } from "sonner";
import { handlePrismaError } from "./handle-error";
import { Dispatch, SetStateAction } from "react";;
import { refreshTags } from "@/utils/refresh";

/**
 * Fetch all tags for a user and update state.
 */
export async function getTagsClient(
    setTags: Dispatch<SetStateAction<Tag[]>>
) {
    try {
        await refreshTags(setTags)
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
        await refreshTags(setTags);
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
        await refreshTags(setTags);
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
        await refreshTags(setTags)
        toast("Tag deleted 🗑️");
    } catch (err) {
        handlePrismaError(err);
    }
}
