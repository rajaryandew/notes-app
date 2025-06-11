import type { Note } from "@/lib/types";
import {
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../ui/card";
import { MotionCard } from "../ui/motion";
import RestoreNote from "./restore-note";
import PermanentlyDelete from "./permanently-delete-note";

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
            <CardHeader>
                <CardTitle>{note.title}</CardTitle>
            </CardHeader>
            <CardContent>
                <CardDescription>{note.description || "--"}</CardDescription>
            </CardContent>
            <CardFooter className="grid grid-cols-1 grid-rows-1 gap-4">
                <RestoreNote note={note}/>
                <PermanentlyDelete note={note}/>
            </CardFooter>
        </MotionCard>
    );
}
