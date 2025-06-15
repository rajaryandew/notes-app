import {
    DialogContent,
    DialogTrigger,
    Dialog,
    DialogHeader,
    DialogTitle,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { restoreAll} from "@/lib/note-client";
import { useDeletedNote } from "@/context/DeletedNoteContext";
import { useNote } from "@/context/NoteContext";
import { DialogClose, DialogDescription } from "@radix-ui/react-dialog";

 /**
 * RestoreAll component
 * 
 * Renders a dialog for confirming restoration of all notes from the recycle bin.
 * - Button is disabled if there are no deleted notes.
 * - On confirmation, restores all deleted notes and updates state.
 * 
 * @returns JSX.Element
 */
export function RestoreAll() {
    // Get state setters and deleted notes from context
    const { setDeletedNotes, deletedNotes } = useDeletedNote();
    const setNotes = useNote().setNotesList;
    return (
        <Dialog>
            {/* Trigger button to open the dialog */}
            <DialogTrigger asChild>
                <Button variant="outline" disabled={deletedNotes.length === 0}>
                    Restore all
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Restore all notes</DialogTitle>
                    <DialogDescription>
                        Are you sure you want to restore all notes from recycle
                        bin?
                    </DialogDescription>
                </DialogHeader>
                <div className="flex justify-between items-center">
                    {/* Confirm restore button */}
                    <DialogClose asChild>
                        <Button
                            onClick={() =>
                                restoreAll(setNotes, setDeletedNotes)
                            }
                            variant="default"
                        >
                            Restore
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
