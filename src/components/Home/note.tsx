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
import { onDelete } from "@/lib/note-client";

export default function Note({
    note,
    index,
}: {
    note: Note;
    index: number;
}) {

    const setNotes = useNote().setNotesList

    return (
        <MotionCard
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{}}
            exit={{ opacity: 0, y: 10, scale: 0.8, rotate: -3 }}
            className="shrink flex-1/4"
            key={index}
        >
            <CardHeader>
                <CardTitle>{note.title}</CardTitle>
            </CardHeader>
            <CardContent>
                <CardDescription>{note.description || "--"}</CardDescription>
            </CardContent>
            <CardFooter className="flex gap-4 justify-end items-center">
                <EditNote setNotes={setNotes} note={note} />
                <Delete onDelete={() => onDelete(note,setNotes)} />
            </CardFooter>
        </MotionCard>
    );
}
