"use client";
import { CardContent } from "../ui/card";
import { Input } from "../ui/input";
import Notes from "./notes";
import { useEffect, useState } from "react";
import AddNote from "./add-note";
import { getActiveNotes } from "@/lib/server-actions/note";
import { toast } from "sonner";
import { useNote } from "@/context/NoteContext";
import Loading from "./loading";
import { useTags } from "@/context/TagsContext";
import { getTags } from "@/lib/server-actions/tags";

/**
 * Content component
 *
 * Main content area for the notes app.
 * - Loads and displays the user's notes.
 * - Provides a search input to filter notes.
 * - Shows loading state while fetching notes.
 *
 * @returns JSX.Element
 */
export default function Content() {
    // State for search input value
    const [searchValue, setSearchValue] = useState("");
    // Get setNotesList from context to update notes globally
    const { setNotesList } = useNote();
    const {setTags,tags} = useTags()
    // Loading state for notes fetch
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch active notes on mount
        getActiveNotes()
            .then((notes) => {
                setNotesList(
                    (notes ?? [])
                        .reverse()
                        .sort((a, b) => Number(b.isPinned) - Number(a.isPinned))
                );
            })
            .catch((res) => {
                // Show error toast if fetch fails
                toast.error("Something unexpected happened!!", {
                    description: res.message,
                });
            })
            .finally(() => {
                setLoading(false);
            });
        getTags().then((tags) => {
            setTags(tags ?? [])
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
    },[tags])

    return (
        <CardContent className="px-4 flex flex-col overflow-auto ">
            {/* Header row: Add Note button and search input */}
                <div className="flex justify-between items-center w-full mb-3">
                    <AddNote variant={"default"} />
                    <Input
                        className="grow-0 basis-40 md:basis-80"
                        onChange={(e) => setSearchValue(e.target.value.trim())}
                        type="text"
                        placeholder="Search notes..."
                    />
                </div>
                {/* Notes list or loading spinner */}
                <section className="flex-1 overflow-y-auto ">
                    {loading === true ? (
                        <Loading />
                    ) : (
                        <Notes searchValue={searchValue} />
                    )}
                </section>
        </CardContent>
    );
}
