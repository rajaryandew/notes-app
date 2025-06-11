"use client";
import { Trash } from "lucide-react";
import { Button } from "../ui/button";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "../ui/sheet";
import { Separator } from "../ui/separator";
import Notes from "./notes";
import { useDeletedNote } from "@/context/DeletedNoteContext";
import { AnimatePresence, motion } from "motion/react";
import { MotionButton } from "../ui/motion";
import EmptyNotes from "./empty-notes";
import DeletedNote from "./deleted-note";
import { useEffect } from "react";
import { getDeletedNotes } from "@/lib/server-actions/note";

export default function RecycleBin() {
    const { setDeletedNotes, deletedNotes } = useDeletedNote();
    useEffect(() => {
        getDeletedNotes()
            .then((deletedNotes) => {
                setDeletedNotes(deletedNotes?.reverse() || []);
            })
            .catch((err) => {console.log(err)});
    }, []);
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="outline">
                    <Trash />
                    Recycle Bin
                </Button>
            </SheetTrigger>
            <SheetContent className="w-11/12" >
                <SheetHeader>
                    <SheetTitle>Recycle bin</SheetTitle>
                    <SheetDescription>
                        The place to access all your deleted notes
                    </SheetDescription>
                    <Separator className="mt-4" />
                </SheetHeader>
                <div className="px-2 h-full w-full overflow-auto">
                    <div className="grid grid-cols-1 gap-2">
                        <AnimatePresence>
                            {deletedNotes.map((note) => (
                                <motion.div key={note.id} layout>
                                    <DeletedNote note={note} index={note.id} />
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    );
}
