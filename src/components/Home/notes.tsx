import Note from "./note";
import { AnimatePresence, motion } from "motion/react";
import { useNote } from "@/context/NoteContext";
import EmptyNotes from "./empty-notes";

export default function Notes({ searchValue }: { searchValue: string }) {
    const notes = useNote().notesList;

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <AnimatePresence>
                {notes.length === 0 ? (
                    <motion.div initial={{scale:0}} animate={{scale:1}} layout>
                        <EmptyNotes />
                    </motion.div>
                ) : (
                    notes.map((note) =>
                        note.title
                            .toLowerCase()
                            .includes(searchValue.toLowerCase()) ||
                        note
                            .description!.toLowerCase()
                            .includes(searchValue.toLowerCase()) ? (
                            <motion.div key={note.id} layout>
                                <Note note={note} index={note.id}></Note>
                            </motion.div>
                        ) : null
                    )
                )}
            </AnimatePresence>
        </div>
    );
}
