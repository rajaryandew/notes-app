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
import { Dispatch, SetStateAction } from "react";
import { useDeletedNote } from "@/context/DeletedNoteContext";

export default function PermanentlyDelete({
    note,
}: {
    note: Note;
}) {
    const {setDeletedNotes} = useDeletedNote()

    return (
        <Dialog>
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
