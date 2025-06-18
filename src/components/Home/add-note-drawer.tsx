import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";
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
 * AddNoteDrawer component
 *
 * Renders a drawer UI for creating a new note.
 * - Allows user to input a title and optional description.
 * - On submission, adds the note and updates the notes state.
 *
 * @param variant - Button variant for the trigger button.
 * @returns JSX.Element
 */
export function AddNoteDrawer({ variant }: { variant: ButtonVariant }) {
    // Get setNotes function from NoteContext to update notes list
    const setNotes = useNote().setNotesList;
    // Local state for title and description inputs
    const [title, setTitle] = useState("Title");
    const [description, setDescription] = useState("");
    const [tag,setTag] = useState<number>()
    return (
        <Drawer>
            {/* Button to open the drawer */}
            <DrawerTrigger asChild>
                <MotionButton variant={variant}>New Note</MotionButton>
            </DrawerTrigger>
            {/* Drawer content for adding a note */}
            <DrawerContent className="px-4">
                <DialogHeader>
                    <DrawerTitle className="py-2">Add Note</DrawerTitle>
                </DialogHeader>
                <DrawerDescription className="text-center">
                    Add a new note with title and description.
                </DrawerDescription>
                <div className="grid gap-4 py-4">
                    {/* Title input row */}
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="title" className="text-left">
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
                        <Label htmlFor="tag">
                            Tag
                        </Label>
                        <TagInput setTag={setTag}/>
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
                            placeholder="Write more about it (optional)"
                        />
                    </div>
                    {/* Action buttons row */}
                    <div className="flex flex-col justify-end gap-4">
                        {/* Add button triggers note creation and closes the drawer */}
                        <DrawerClose asChild>
                            <MotionButton
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() =>
                                    addNote(
                                        title,
                                        description,
                                        setTitle,
                                        setDescription,
                                        setNotes,
                                        tag
                                    )
                                }
                            >
                                Add
                            </MotionButton>
                        </DrawerClose>
                        {/* Cancel button closes the drawer */}
                        <DrawerClose asChild>
                            <MotionButton
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                variant="secondary"
                            >
                                Cancel
                            </MotionButton>
                        </DrawerClose>
                    </div>
                </div>
            </DrawerContent>
        </Drawer>
    );
}
