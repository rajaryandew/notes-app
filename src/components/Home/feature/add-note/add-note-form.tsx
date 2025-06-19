import { addNote } from "@/lib/note-client";
import { DialogClose } from "../../../ui/dialog";
import { Input } from "../../../ui/input";
import { Label } from "../../../ui/label";
import { MotionButton } from "../../../ui/motion";
import { Textarea } from "../../../ui/textarea";
import TagInput from "../../tag-input";
import { useState } from "react";
import { useNote } from "@/context/NoteContext";

export default function AddNoteForm({ type }: { type: "drawer" | "dialog" }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [tag, setTag] = useState<number>();
    const setNotes = useNote().setNotesList;

    const textAlign = type === "dialog" ? "inline-block text-right" : "text-left"
    const footStyle = type === "dialog" ? "flex justify-end gap-4" : "flex flex-col-reverse gap-4"
    return (
        <div className="grid gap-4 py-4">
            {/* Title input row */}
            <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="title" className={textAlign}>
                    Title
                </Label>
                <Input
                    type="text"
                    id="title"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    className="col-span-3"
                />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="tag" className={textAlign}>
                    Tag
                </Label>
                <TagInput setTag={setTag} tagId={tag}/>
            </div>
            {/* Description input row */}
            <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="description" className={textAlign}>
                    Description
                </Label>
                <Textarea
                    id="description"
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                    className="col-span-3"
                    placeholder="Write more about it (optional)"
                />
            </div>
            {/* Action buttons row */}
            <div className={footStyle}>
                {/* Cancel button closes the dialog */}
                <DialogClose asChild>
                    <MotionButton
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        variant="secondary"
                    >
                        Cancel
                    </MotionButton>
                </DialogClose>
                {/* Add button triggers note creation and closes the dialog */}
                <DialogClose asChild>
                    <MotionButton
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => {
                            addNote(
                                title,
                                description,
                                setTitle,
                                setDescription,
                                setNotes,
                                tag
                            );
                        }}
                    >
                        Add
                    </MotionButton>
                </DialogClose>
            </div>
        </div>
    );
}
