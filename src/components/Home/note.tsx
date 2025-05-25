import type { Note } from "@/lib/types";
import {
    Card,
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

export default function Note({
    note,
    index,
    setNotes,
}: {
    note: Note;
    index: number;
    setNotes: Dispatch<SetStateAction<Note[]>>;
}) {

    async function onDelete(){
      setNotes((n) => n.filter((no) => no.id !== note.id))
      await removeNote(note);  
    }

    return (
        <Card className="shrink flex-1/4" key={index}>
            <CardHeader>
                <CardTitle>{note.title}</CardTitle>
            </CardHeader>
            <CardContent>
                <CardDescription>{note.description}</CardDescription>
            </CardContent>
            <CardFooter className="flex gap-4 justify-end items-center">
                <EditNote setNotes={setNotes} note={note}/>
                <Delete onDelete={onDelete}/>
            </CardFooter>
        </Card>
    );
}
