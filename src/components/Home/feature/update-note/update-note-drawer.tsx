import { Note } from "@/lib/types";
import { Button } from "@/components/ui//button";
import {
    Drawer,
    DrawerContent,
    DrawerDescription,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui//drawer";
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
}: {
    note: Note;
}) {

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
