import Note from "./note";
import { AnimatePresence, motion } from "motion/react";
import { useNote } from "@/context/NoteContext";

export default function Notes({
    searchValue,
}: {
    searchValue: string;
}) {

    const notes = useNote().notesList

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <AnimatePresence>
                {notes.map((note) =>
                    note.title
                        .toLowerCase()
                        .startsWith(searchValue.toLowerCase()) ||
                    note
                        .description!.toLowerCase()
                        .startsWith(searchValue.toLowerCase()) ? (
                        <motion.div key={note.id} layout>
                            <Note
                                note={note}
                                index={note.id}
                            ></Note>
                        </motion.div>
                    ) : null
                )}
            </AnimatePresence>
        </div>
    );
}
