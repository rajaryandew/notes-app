import type { Note } from "@/lib/types";
import {
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../ui/card";
import type { Dispatch, SetStateAction } from "react";
import { removeNote } from "@/lib/server-actions/note";
import Delete from "./delete";
import EditNote from "./update-note";
import { MotionCard } from "../ui/motion";
import { toast } from "sonner";

export default function Note({
    note,
    index,
    setNotes,
}: {
    note: Note;
    index: number;
    setNotes: Dispatch<SetStateAction<Note[]>>;
}) {
    async function onDelete() {
        try{
            await removeNote(note);
            setNotes((n) => n.filter((no) => no.id !== note.id));
        } catch(err){
            const error = err as Error
            toast.error("Something unexpected happned", {
                description:error.message
            })
        }
        
    }

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
                <Delete onDelete={onDelete} />
            </CardFooter>
        </MotionCard>
    );
}
