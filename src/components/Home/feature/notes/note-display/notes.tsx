import Note from "./note";
import { AnimatePresence, motion } from "motion/react";
import { useNote } from "@/context/NoteContext";
import EmptyNotes from "./note-empty";

/**
 * Notes component
 *
 * Displays a grid of notes, filtered by the search value.
 * - If there are no notes, shows the EmptyNotes component.
 * - Animates note cards using AnimatePresence and motion.
 *
 * @param searchValue - The string to filter notes by title or description.
 * @returns JSX.Element
 */
export default function Notes({ searchValue }: { searchValue: string }) {
    // Get the list of notes from context
    const notes = useNote().notesList;

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <AnimatePresence>
                {notes.length === 0 ? (
                    // Show empty state if no notes
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} layout>
                        <EmptyNotes />
                    </motion.div>
                ) : (
                    // Filter and render notes matching the search value
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
