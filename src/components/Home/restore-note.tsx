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

export default function RestoreNote({ note }: { note: Note }) {
    const { setDeletedNotes } = useDeletedNote();
    const setActiveNotes = useNote().setNotesList;
    return (
        <Dialog>
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
                    <DialogClose asChild>
                        <Button variant="outline">Cancel</Button>
                    </DialogClose>
                </div>
            </DialogContent>
        </Dialog>
    );
}
