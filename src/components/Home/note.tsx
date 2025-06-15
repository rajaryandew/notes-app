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
import { Pin } from "lucide-react";
import PinnedBadge from "./pinned-badge";

export default function Note({ note, index }: { note: Note; index: number }) {
    const setNotes = useNote().setNotesList;

    return (
        <MotionCard
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{}}
            exit={{ opacity: 0, y: 10, scale: 0.8, rotate: -3 }}
            className="shrink flex-1/4"
            key={index}
        >
            <CardHeader className="flex items-center justify-between relative">
                {
                    note.isPinned ? <PinnedBadge/> : <></>
                }
                <CardTitle>{note.title}</CardTitle>
                <NoteActionDropdown note={note}/>
            </CardHeader>
            <CardContent>
                <CardDescription>{note.description || "--"}</CardDescription>
            </CardContent>
            <CardFooter className="flex gap-4 justify-end items-center">
                <EditNote setNotes={setNotes} note={note} />
                <Delete onDelete={() => tempDeleteNote(note,setNotes)} />
            </CardFooter>
        </MotionCard>
    );
}
