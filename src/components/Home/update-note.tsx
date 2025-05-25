"use client";
import { Button } from "../ui/button";
import {
    Dialog,
    DialogClose,
    DialogHeader,
    DialogTrigger,
    DialogContent,
    DialogDescription,
    DialogTitle,
} from "../ui/dialog";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Input } from "../ui/input";
import { NewNote, Note } from "@/lib/types";
import { Dispatch, SetStateAction, useState } from "react";
import { updateNote } from "@/lib/server-actions/note";

export default function EditNote({ note,setNotes }: { note: Note,setNotes:Dispatch<SetStateAction<Note[]>> }) {
    const [title, setTitle] = useState(note.title);
    const [description, setDescription] = useState(note.description ?? "");

    async function edit(){
        const updatedNote:NewNote = {title,description}
        setNotes(await updateNote(note,updatedNote) ?? [])
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>Edit</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Edit this note...</DialogTitle>
                    <DialogDescription>
                        You're going to edit this note
                    </DialogDescription>
                </DialogHeader>
                <form className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="title" className="text-right">
                            Title
                        </Label>
                        <Input
                            className="col-span-3"
                            type="text"
                            id="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
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
                            <Button variant="secondary">Cancel</Button>
                        </DialogClose>
                        <DialogClose asChild>
                            <Button onClick={edit}>Edit</Button>
                        </DialogClose>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    );
}
