import { Note } from "@/lib/types";
import { Button } from "../ui/button";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "../ui/drawer";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Dispatch, SetStateAction, useState } from "react";
import { editNote } from "@/lib/note-client";

export default function UpdateNoteDrawer({
    note,
    setNotes,
}: {
    note: Note;
    setNotes: Dispatch<SetStateAction<Note[]>>;
}) {
    const [title, setTitle] = useState(note.title);
    const [description, setDescription] = useState(note.description ?? "");

    return (
        <Drawer>
            <DrawerTrigger asChild>
                <Button>Edit</Button>
            </DrawerTrigger>
            <DrawerContent className="px-4">
                <DrawerHeader>
                    <DrawerTitle>Edit this note...</DrawerTitle>
                    <DrawerDescription>
                        You&apos;re going to edit this note
                    </DrawerDescription>
                </DrawerHeader>
                <form className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="title" className="text-left">
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
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="description" className="text-left">
                            Description
                        </Label>
                        <Textarea
                            id="description"
                            onChange={(e) => setDescription(e.target.value)}
                            value={description}
                            className="col-span-3"
                            placeholder={note.description || ""}
                        />
                    </div>
                    <div className="flex flex-col justify-end gap-4">
                        <DrawerClose asChild>
                            <Button
                                onClick={() =>
                                    editNote(
                                        note,
                                        { title, description },
                                        setNotes
                                    )
                                }
                            >
                                Save
                            </Button>
                        </DrawerClose>
                        <DrawerClose asChild>
                            <Button variant="secondary">Cancel</Button>
                        </DrawerClose>
                    </div>
                </form>
            </DrawerContent>
        </Drawer>
    );
}
