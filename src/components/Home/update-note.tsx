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
import { Note } from "@/lib/types";
import { Dispatch, SetStateAction, useState } from "react";
import { editNote } from "@/lib/note-client";
import UpdateNoteDialog from "./update-note-dialog";
import UpdateNoteDrawer from "./update-note-drawer";

export default function EditNote({
    note,
    setNotes,
}: {
    note: Note;
    setNotes: Dispatch<SetStateAction<Note[]>>;
}) {
    return(
        <>
            <div className="hidden md:block">
                <UpdateNoteDialog note={note} setNotes={setNotes}/>
            </div>
            <div className="block md:hidden">
                <UpdateNoteDrawer note={note} setNotes={setNotes}/>
            </div>
        </>
    )
}
