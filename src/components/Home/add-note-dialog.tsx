import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { MotionButton } from "../ui/motion";
import { ButtonVariant } from "@/lib/types";
import { DialogHeader } from "../ui/dialog";
import { Label } from "@radix-ui/react-label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { useNote } from "@/context/NoteContext";
import { useState } from "react";
import { addNote } from "@/lib/note-client";

export function AddNoteDialog({ variant }: { variant: ButtonVariant }) {
    const setNotes = useNote().setNotesList;
    const [title, setTitle] = useState("Title");
    const [description, setDescription] = useState("");
    return (
        <Dialog>
            <DialogTrigger asChild>
                <MotionButton
                    whileTap={{ scale: 0.8 }}
                    className=" font-semibold flex-1/8 grow-0"
                    variant={variant}
                >
                    New Note
                </MotionButton>
            </DialogTrigger>
            <DialogContent className="">
                <DialogHeader>
                    <DialogTitle>Add Note</DialogTitle>
                </DialogHeader>
                <DialogDescription>
                    Add a new note with title and description.
                </DialogDescription>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="title" className="text-right">
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
                        <Label htmlFor="description" className="text-right">
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
                    <div className="flex justify-end gap-4">
                        <DialogClose asChild>
                            <MotionButton
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                variant="secondary"
                            >
                                Cancel
                            </MotionButton>
                        </DialogClose>
                        <DialogClose asChild>
                            <MotionButton
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() =>
                                    addNote(
                                        title,
                                        description,
                                        setTitle,
                                        setDescription,
                                        setNotes
                                    )
                                }
                            >
                                Add
                            </MotionButton>
                        </DialogClose>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
