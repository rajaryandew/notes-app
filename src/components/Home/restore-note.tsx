import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { Note } from "@/lib/types";
import { restoreNote } from "@/lib/note-client";
import { useDeletedNote } from "@/context/DeletedNoteContext";
import { useNote } from "@/context/NoteContext";

/**
 * RestoreNote component
 *
 * Renders a dialog to confirm restoring a deleted note.
 * - On confirmation, restores the note and updates both active and deleted notes state.
 *
 * @param note - The note object to restore.
 * @returns JSX.Element
 */
export default function RestoreNote({ note }: { note: Note }) {
    // Get state setters from context
    const { setDeletedNotes } = useDeletedNote();
    const setActiveNotes = useNote().setNotesList;
    return (
        <Dialog>
            {/* Button to open the restore confirmation dialog */}
            <DialogTrigger asChild>
                <Button variant="secondary">Restore note</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Restore this note</DialogTitle>
                    <DialogDescription>
                        You can restore this note from recycle bin
                    </DialogDescription>
                </DialogHeader>
                <div className="flex justify-between items-center">
                    {/* Confirm restore button */}
                    <DialogClose asChild>
                        <Button
                            onClick={() =>
                                restoreNote(
                                    note,
                                    setActiveNotes,
                                    setDeletedNotes
                                )
                            }
                        >
                            Restore
                        </Button>
                    </DialogClose>
                    {/* Cancel button */}
                    <DialogClose asChild>
                        <Button variant="outline">Cancel</Button>
                    </DialogClose>
                </div>
            </DialogContent>
        </Dialog>
    );
}
