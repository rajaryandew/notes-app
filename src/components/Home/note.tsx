import type { Note } from "@/lib/types";
import {
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../ui/card";
import Delete from "./delete";
import EditNote from "./update-note";
import { MotionCard } from "../ui/motion";
import { useNote } from "@/context/NoteContext";
import { tempDeleteNote } from "@/lib/note-client";
import NoteActionDropdown from "./note-action-dropdown";
import PinnedBadge from "./pinned-badge";
import { useTags } from "@/context/TagsContext";
import { Badge } from "../ui/badge";

/**
 * Note component
 *
 * Renders a card for an individual note.
 * - Displays the note's title, description, and pin status.
 * - Provides actions to edit, delete (move to recycle bin), and pin/unpin the note.
 *
 * @param note - The note object to display.
 * @param index - The index of the note in the list (used as key).
 * @returns JSX.Element
 */
export default function Note({ note, index }: { note: Note; index: number }) {
    // Get setNotes function from NoteContext to update notes list
    const setNotes = useNote().setNotesList;
    const tag = useTags().tags.find((t) => t.id === note.tagId)?.name
    return (
        <MotionCard
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{}}
            exit={{ opacity: 0, y: 10, scale: 0.8, rotate: -3 }}
            className="shrink flex-1/4"
            key={index}
        >
            {/* Header: pin badge, title, and actions */}
            <CardHeader className="flex items-center justify-between relative">
                {note.isPinned ? <PinnedBadge /> : <></>}
                <CardTitle>{note.title}</CardTitle>
                <NoteActionDropdown note={note} />
            </CardHeader>
            {/* Note description */}
            <CardContent>
                <CardDescription>{note.description || "--"}</CardDescription>
            </CardContent>
            {/* Actions: edit and delete */}
            <CardFooter className="flex gap-4 justify-between items-center">
                <Badge variant="secondary" className={tag ? "opacity-100" : "opacity-0"}>{tag}</Badge>
                <div className="flex gap-4 items-center">
                    <EditNote setNotes={setNotes} note={note} />
                    <Delete onDelete={() => tempDeleteNote(note, setNotes)} />
                </div>
            </CardFooter>
        </MotionCard>
    );
}
