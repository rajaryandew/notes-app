import {
    Drawer,
    DrawerContent,
    DrawerDescription,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";
import { MotionButton } from "@/components/ui/motion";
import { ButtonVariant } from "@/lib/types";
import { DialogHeader } from "@/components/ui/dialog";
import AddNoteForm from "./add-note-form";

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
    return (
        <Drawer>
            {/* Button to open the drawer */}
            <DrawerTrigger asChild>
                <MotionButton
                    whileTap={{ scale: 0.8 }}
                    className=" font-semibold flex-1/8 grow-0 lg:w-[9vw]"
                    variant={variant}
                >
                    New Note
                </MotionButton>
            </DrawerTrigger>
            {/* Drawer content for adding a note */}
            <DrawerContent className="px-4">
                <DialogHeader>
                    <DrawerTitle className="py-2">Add Note</DrawerTitle>
                </DialogHeader>
                <DrawerDescription className="text-center">
                    Add a new note with title and description.
                </DrawerDescription>
                <AddNoteForm type="drawer" />
            </DrawerContent>
        </Drawer>
    );
}
