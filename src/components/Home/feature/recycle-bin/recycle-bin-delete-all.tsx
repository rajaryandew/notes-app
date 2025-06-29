import {
    DialogContent,
    DialogTrigger,
    Dialog,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { deleteAll} from "@/lib/note-client";
import { useDeletedNote } from "@/context/DeletedNoteContext";
import { useNote } from "@/context/NoteContext";
import { DialogClose, DialogDescription } from "@radix-ui/react-dialog";

/**
 * DeleteAll component
 * 
 * Renders a dialog for confirming deletion of all notes in the recycle bin.
 * - Button is disabled if there are no deleted notes.
 * - On confirmation, deletes all notes from the recycle bin and updates state.
 * 
 * @returns JSX.Element
 */
export function DeleteAll() {
    // Get state setters and deleted notes from context
    const { setDeletedNotes, deletedNotes } = useDeletedNote();
    const setNotes = useNote().setNotesList;
    return (
        <Dialog>
            {/* Trigger button to open the dialog */}
            <DialogTrigger asChild>
                <Button variant="destructive" disabled={deletedNotes.length === 0}>
                    Delete all
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Delete all notes</DialogTitle>
                    <DialogDescription>
                        Are you sure you want to delete all notes from recycle
                        bin? This action cannot be undone, be careful!
                    </DialogDescription>
                </DialogHeader>
                <div className="flex justify-between items-center">
                    {/* Confirm delete button */}
                    <DialogClose asChild>
                        <Button
                            onClick={() =>
                                deleteAll(setNotes, setDeletedNotes)
                            }
                            variant="destructive"
                        >
                            Delete
                        </Button>
                    </DialogClose>
                    {/* Cancel button */}
                    <DialogClose asChild>
                        <Button variant="secondary">Cancel</Button>
                    </DialogClose>
                </div>
            </DialogContent>
        </Dialog>
    );
}
