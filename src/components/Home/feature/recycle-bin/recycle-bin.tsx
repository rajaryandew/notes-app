"use client";
import { Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { useDeletedNote } from "@/context/DeletedNoteContext";
import { AnimatePresence, motion } from "motion/react";
import DeletedNote from "./recycle-bin-note";
import { useEffect } from "react";
import { getDeletedNotes } from "@/lib/server-actions/note";
import { RestoreAll } from "./recycle-bin-retore-all";
import { DeleteAll } from "./recycle-bin-delete-all";

/**
 * RecycleBin component
 *
 * Renders a sheet (drawer) for accessing and managing deleted notes.
 * - Fetches deleted notes on mount and updates context state.
 * - Provides actions to restore all or delete all notes in the recycle bin.
 * - Lists all deleted notes with animation.
 *
 * @returns JSX.Element
 */
export default function RecycleBin() {
    // Get deleted notes and setter from context
    const { setDeletedNotes, deletedNotes } = useDeletedNote();
    useEffect(() => {
        // Fetch deleted notes on mount
        getDeletedNotes()
            .then((deletedNotes) => {
                setDeletedNotes(deletedNotes?.reverse() || []);
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <Sheet>
            {/* Button to open the recycle bin sheet */}
            <SheetTrigger asChild>
                <Button variant="outline">
                    <Trash />
                    Recycle Bin
                </Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Recycle bin</SheetTitle>
                    <SheetDescription>
                        The place to access all your deleted notes
                    </SheetDescription>
                    <Separator className="mt-4" />
                </SheetHeader>
                <div className="px-2 h-full w-full overflow-auto">
                    {/* Actions: restore all and delete all */}
                    <div className="grid grid-cols-2 grid-rows-1 gap-2 pb-4 px-2">
                        <RestoreAll />
                        <DeleteAll />
                    </div>
                    {/* List of deleted notes */}
                    <div className="grid grid-cols-1 gap-2">
                        <AnimatePresence>
                            {deletedNotes.map((note) => (
                                <motion.div key={note.id} layout>
                                    <DeletedNote note={note} index={note.id} />
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    );
}
