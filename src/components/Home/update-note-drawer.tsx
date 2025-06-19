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
import UpdateNoteForm from "./update-note-form";

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
                <UpdateNoteForm note={note} type="drawer"/>
            </DrawerContent>
        </Drawer>
    );
}
