"use client";

import { Button } from "../ui/button";
import {
    DialogHeader,
    Dialog,
    DialogContent,
    DialogTitle,
    DialogTrigger,
    DialogDescription,
    DialogClose
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

import { type Dispatch, type SetStateAction, useState } from "react";
import type { NewNote, Note } from "@/lib/types";
import { createNote, getNotes } from "@/lib/server-actions/note";

export default function AddNote({
    setNotes,
}: {
    setNotes: Dispatch<SetStateAction<Note[]>>;
}) {
    const [title, setTitle] = useState("Title");
    const [description, setDescription] = useState("");

    async function addNote() {
        const note:NewNote = {title,description}
        setNotes(await createNote(note))
        setTitle("Title");
        setDescription("");
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className=" font-semibold flex-1/8 grow-0">
                    New Note
                </Button>
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
                            Title
                        </Label>
                        <Textarea
                            id="description"
                            onChange={(e) =>
                                setDescription(e.target.value)
                            }
                            value={description}
                            className="col-span-3"
                            placeholder="Write more about it (optional)"
                        />
                    </div>
                    <div className="flex justify-end gap-4">
                        <DialogClose asChild>
                            <Button variant="secondary">Cancel</Button>
                        </DialogClose>
                        <DialogClose asChild>
                            <Button onClick={addNote}>Add</Button>
                        </DialogClose>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
