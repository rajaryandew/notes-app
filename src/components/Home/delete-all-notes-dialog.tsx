import {
    DialogContent,
    DialogTrigger,
    Dialog,
    DialogHeader,
    DialogTitle,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { deleteAll} from "@/lib/note-client";
import { useDeletedNote } from "@/context/DeletedNoteContext";
import { useNote } from "@/context/NoteContext";
import { DialogClose, DialogDescription } from "@radix-ui/react-dialog";

export function DeleteAll() {
    const { setDeletedNotes, deletedNotes } = useDeletedNote();
    const setNotes = useNote().setNotesList;
    return (
        <Dialog>
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
                    <DialogClose asChild>
                        <Button variant="secondary">Cancel</Button>
                    </DialogClose>
                </div>
            </DialogContent>
        </Dialog>
    );
}
