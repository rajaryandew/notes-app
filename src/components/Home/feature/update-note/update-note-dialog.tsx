import { Note } from "@/lib/types";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui//dialog";
import { Input } from "@/components/ui//input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Dispatch, SetStateAction, useState } from "react";
import { editNote } from "@/lib/note-client";
import UpdateNoteForm from "./update-note-form";

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
                <UpdateNoteForm type="dialog" note={note}/>
            </DialogContent>
        </Dialog>
    );
}
