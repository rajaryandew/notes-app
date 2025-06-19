import { editNote } from "@/lib/note-client";
import { Button } from "@/components/ui//button";
import { DialogClose } from "@/components/ui//dialog";
import { Input } from "@/components/ui//input";
import { Label } from "@/components/ui//label";
import { Textarea } from "@/components/ui//textarea";
import { Note } from "@/lib/types";
import { useState } from "react";
import { useNote } from "@/context/NoteContext";
import TagInput from "@/components/Home/tag-input";

export default function UpdateNoteForm({
    type,
    note,
}: {
    type: "dialog" | "drawer";
    note: Note;
}) {
    const [title, setTitle] = useState(note.title);
    const [description, setDescription] = useState(note.description);
    const [tagId, setTagId] = useState<number | undefined>(note.tagId!);
    const setNotes = useNote().setNotesList;

    const textAlign =
        type === "dialog" ? "text-right inline-block" : "text-left";
    const footStyle =
        type === "dialog" ? "flex justify-end gap-4" : "flex flex-col-reverse";

    return (
        <div className="grid gap-4 py-4">
            {/* Title input row */}
            <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="title" className={textAlign}>
                    Title
                </Label>
                <Input
                    className="col-span-3"
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder={note.title}
                />
            </div>
            <div className="grid grid-cols-4 gap-4 items-center">
                <Label htmlFor="tag" className={textAlign}>
                    Tag
                </Label>
                <TagInput setTag={setTagId} tagId={tagId} />
            </div>
            {/* Description input row */}
            <div className={footStyle}>
                <Label htmlFor="description" className={textAlign}>
                    Description
                </Label>
                <Textarea
                    id="description"
                    onChange={(e) => setDescription(e.target.value)}
                    value={description || ""}
                    className="col-span-3"
                    placeholder={note.description || ""}
                />
            </div>
            {/* Action buttons row */}
            <div className="flex justify-end gap-4">
                {/* Cancel button */}
                <DialogClose asChild>
                    <Button variant="secondary">Cancel</Button>
                </DialogClose>
                {/* Save button triggers note update */}
                <DialogClose asChild>
                    <Button
                        onClick={() =>
                            editNote(
                                note,
                                { title, description, tagId },
                                setNotes
                            )
                        }
                    >
                        Save
                    </Button>
                </DialogClose>
            </div>
        </div>
    );
}
