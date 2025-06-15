import { Note } from "@/lib/types";
import { Button } from "../ui/button";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Dispatch, SetStateAction, useState } from "react";
import { editNote } from "@/lib/note-client";

/**
 * UpdateNoteDialog component
 *
 * Renders a dialog for editing an existing note.
 * - Allows user to update the note's title and description.
 * - On save, updates the note and notes state.
 *
 * @param note - The note object to edit.
 * @param setNotes - State setter for updating the notes array.
 * @returns JSX.Element
 */
export default function UpdateNoteDialog({
    note,
    setNotes,
}: {
    note: Note;
    setNotes: Dispatch<SetStateAction<Note[]>>;
}) {
    // Local state for title and description inputs
    const [title, setTitle] = useState(note.title);
    const [description, setDescription] = useState(note.description ?? "");

    return (
        <Dialog>
            {/* Button to open the edit dialog */}
            <DialogTrigger asChild>
                <Button>Edit</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Edit this note...</DialogTitle>
                    <DialogDescription>
                        You&apos;re going to edit this note
                    </DialogDescription>
                </DialogHeader>
                {/* Form for editing note */}
                <form className="grid gap-4 py-4">
                    {/* Title input row */}
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="title" className="text-right">
                            Title
                        </Label>
                        <Input
                            className="col-span-3"
                            type="text"
                            id="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder={note.title}
                        />
                    </div>
                    {/* Description input row */}
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="description" className="text-right">
                            Description
                        </Label>
                        <Textarea
                            id="description"
                            onChange={(e) => setDescription(e.target.value)}
                            value={description}
                            className="col-span-3"
                            placeholder={note.description || ""}
                        />
                    </div>
                    {/* Action buttons row */}
                    <div className="flex justify-end gap-4">
                        {/* Cancel button */}
                        <DialogClose asChild>
                            <Button variant="secondary">Cancel</Button>
                        </DialogClose>
                        {/* Save button triggers note update */}
                        <DialogClose asChild>
                            <Button
                                onClick={() =>
                                    editNote(
                                        note,
                                        { title, description },
                                        setNotes
                                    )
                                }
                            >
                                Save
                            </Button>
                        </DialogClose>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    );
}
