import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { MotionButton } from "../../../ui/motion";
import { ButtonVariant } from "@/lib/types";
import { DialogHeader } from "../../../ui/dialog";
import AddNoteForm from "./add-note-form";

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
                <AddNoteForm type="dialog"/>
            </DialogContent>
        </Dialog>
    );
}
