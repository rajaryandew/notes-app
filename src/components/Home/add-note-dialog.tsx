import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { MotionButton } from "../ui/motion";
import { ButtonVariant } from "@/lib/types";
import { DialogHeader } from "../ui/dialog";
import { Label } from "@radix-ui/react-label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { useNote } from "@/context/NoteContext";
import { useState } from "react";
import { addNote } from "@/lib/note-client";
import TagInput from "./tag-input";

/**
 * AddNoteDialog component
 *
 * Renders a dialog for creating a new note.
 * - Allows user to input a title and optional description.
 * - On submission, adds the note and updates the notes state.
 *
 * @param variant - Button variant for the trigger button.
 * @returns JSX.Element
 */
export function AddNoteDialog({ variant }: { variant: ButtonVariant }) {
    // Get setNotes function from NoteContext to update notes list
    const setNotes = useNote().setNotesList;
    // Local state for title and description inputs
    const [title, setTitle] = useState("Title");
    const [description, setDescription] = useState("");
    return (
        <Dialog>
            {/* Button to open the dialog */}
            <DialogTrigger asChild>
                <MotionButton
                    whileTap={{ scale: 0.8 }}
                    className=" font-semibold flex-1/8 grow-0"
                    variant={variant}
                >
                    New Note
                </MotionButton>
            </DialogTrigger>
            {/* Dialog content for adding a note */}
            <DialogContent className="">
                <DialogHeader>
                    <DialogTitle>Add Note</DialogTitle>
                </DialogHeader>
                <DialogDescription>
                    Add a new note with title and description.
                </DialogDescription>
                <div className="grid gap-4 py-4">
                    {/* Title input row */}
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="title" className="text-right">
                            Title
                        </Label>
                        <Input
                            type="text"
                            id="title"
                            onChange={(e) => setTitle(e.target.value)}
                            value={title}
                            className="col-span-3"
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="tag" className="text-right">
                            Tag
                        </Label>
                        <TagInput/>
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
                            placeholder="Write more about it (optional)"
                        />
                    </div>
                    {/* Action buttons row */}
                    <div className="flex justify-end gap-4">
                        {/* Cancel button closes the dialog */}
                        <DialogClose asChild>
                            <MotionButton
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                variant="secondary"
                            >
                                Cancel
                            </MotionButton>
                        </DialogClose>
                        {/* Add button triggers note creation and closes the dialog */}
                        <DialogClose asChild>
                            <MotionButton
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() =>
                                    addNote(
                                        title,
                                        description,
                                        setTitle,
                                        setDescription,
                                        setNotes
                                    )
                                }
                            >
                                Add
                            </MotionButton>
                        </DialogClose>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
