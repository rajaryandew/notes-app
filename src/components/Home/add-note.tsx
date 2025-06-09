"use client";

import {
    DialogHeader,
    Dialog,
    DialogContent,
    DialogTitle,
    DialogTrigger,
    DialogDescription,
    DialogClose,
} from "../ui/dialog";
import {
    DrawerHeader,
    Drawer,
    DrawerContent,
    DrawerTitle,
    DrawerTrigger,
    DrawerDescription,
    DrawerClose,
} from "../ui/drawer";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";
import { MotionButton } from "../ui/motion";
import { useNote } from "@/context/NoteContext";
import { addNote } from "@/lib/note-client";
import { ButtonVariant } from "@/lib/types";
import { AddNoteDialog } from "./add-note-dialog";
import { AddNoteDrawer } from "./add-note-drawer";

export default function AddNote({ variant }: { variant: ButtonVariant }) {
    // TODO: better drawer styling and html bug using useMediaQuery

    return (
        <>
            <div className="hidden md:block">
                <AddNoteDialog variant={variant} />
            </div>
            <div className="block md:hidden">
                <AddNoteDrawer variant={variant} />
            </div>
        </>
    );
}
