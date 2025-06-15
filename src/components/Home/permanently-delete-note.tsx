import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTrigger,
    DialogDescription,
    DialogClose,
    DialogTitle,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { deleteNote } from "@/lib/note-client";
import { Note } from "@/lib/types";
import { useDeletedNote } from "@/context/DeletedNoteContext";

/**
 * PermanentlyDelete component
 * 
 * Renders a dialog to confirm permanent deletion of a note.
 * - Shows a warning that the action cannot be undone.
 * - Calls deleteNote and updates deleted notes state on confirmation.
 * 
 * @param note - The note object to permanently delete.
 * @returns JSX.Element
 */
export default function PermanentlyDelete({
    note,
}: {
    note: Note;
}) {
    // Get setDeletedNotes from context to update deleted notes list
    const {setDeletedNotes} = useDeletedNote()

    return (
        <Dialog>
            {/* Button to open the permanent delete confirmation dialog */}
            <DialogTrigger asChild>
                <Button variant="destructive">Delete permanently</Button>
            </DialogTrigger>
            <DialogContent className="w-sm">
                <DialogHeader>
                    <DialogTitle>Confirm deleting this note</DialogTitle>
                    <DialogDescription className="text-sm text-muted-foreground mt-2 leading-relaxed">
                        Be careful! This action cannot be undone.
                    </DialogDescription>
                </DialogHeader>
                {/* Action buttons: Delete and Cancel */}
                <DialogClose asChild>
                    <div className="grid grid-cols-3 w-full gap-x-2 mt-3">
                        <Button
                            className="col-start-1"
                            autoFocus
                            variant="destructive"
                            onClick={() => deleteNote(note,setDeletedNotes)}
                        >
                            Delete
                        </Button>
                        <Button className="col-start-3" variant="outline">
                            Cancel
                        </Button>
                    </div>
                </DialogClose>
            </DialogContent>
        </Dialog>
    );
}
