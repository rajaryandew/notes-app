import type { Note } from "@/lib/types";
import {
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { MotionCard } from "@/components/ui/motion";
import RestoreNote from "./recycle-bin-restore-note";
import PermanentlyDelete from "./recycle-bin-perma-delete-note";

/**
 * DeletedNote component
 * 
 * Renders a card for a deleted note in the recycle bin.
 * - Displays the note's title and description.
 * - Provides actions to restore or permanently delete the note.
 * 
 * @param note - The deleted note object.
 * @param index - The index of the note in the list (used as key).
 * @returns JSX.Element
 */
export default function DeletedNote({ note, index }: { note: Note; index: number }) {
    return (
        <MotionCard
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{}}
            exit={{ opacity: 0, y: 10, scale: 0.8, rotate: -3 }}
            className="shrink flex-1/4"
            key={index}
        >
            {/* Note title */}
            <CardHeader>
                <CardTitle>{note.title}</CardTitle>
            </CardHeader>
            {/* Note description */}
            <CardContent>
                <CardDescription>{note.description || "--"}</CardDescription>
            </CardContent>
            {/* Actions: restore or permanently delete */}
            <CardFooter className="grid grid-cols-1 grid-rows-1 gap-4">
                <RestoreNote note={note}/>
                <PermanentlyDelete note={note}/>
            </CardFooter>
        </MotionCard>
    );
}
