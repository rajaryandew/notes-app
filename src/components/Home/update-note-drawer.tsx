import { Note } from "@/lib/types";
import { Button } from "../ui/button";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "../ui/drawer";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Dispatch, SetStateAction, useState } from "react";
import { editNote } from "@/lib/note-client";

/**
 * UpdateNoteDrawer component
 *
 * Renders a drawer for editing an existing note.
 * - Allows user to update the note's title and description.
 * - On save, updates the note and notes state.
 *
 * @param note - The note object to edit.
 * @param setNotes - State setter for updating the notes array.
 * @returns JSX.Element
 */
export default function UpdateNoteDrawer({
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
        <Drawer>
            {/* Button to open the edit drawer */}
            <DrawerTrigger asChild>
                <Button>Edit</Button>
            </DrawerTrigger>
            <DrawerContent className="px-4">
                <DrawerHeader>
                    <DrawerTitle>Edit this note...</DrawerTitle>
                    <DrawerDescription>
                        You&apos;re going to edit this note
                    </DrawerDescription>
                </DrawerHeader>
                {/* Form for editing note */}
                <form className="grid gap-4 py-4">
                    {/* Title input row */}
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="title" className="text-left">
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
                        <Label htmlFor="description" className="text-left">
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
                    <div className="flex flex-col justify-end gap-4">
                        {/* Save button triggers note update */}
                        <DrawerClose asChild>
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
                        </DrawerClose>
                        {/* Cancel button */}
                        <DrawerClose asChild>
                            <Button variant="secondary">Cancel</Button>
                        </DrawerClose>
                    </div>
                </form>
            </DrawerContent>
        </Drawer>
    );
}
