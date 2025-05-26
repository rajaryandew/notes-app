"use client";
import { Note } from "@/lib/types";
import { CardContent } from "../ui/card";
import { Input } from "../ui/input";
import Notes from "./notes";
import { useEffect, useState } from "react";
import AddNote from "./add-note";
import { getNotes } from "@/lib/server-actions/note";
import { toast } from "sonner";

export default function Content() {
    const [searchValue, setSearchValue] = useState("");
    const [notesList, setNotesList] = useState<Note[]>([]);

    useEffect(() => {
        getNotes().then((notes) => {
            setNotesList(notes?.reverse() ?? []);
        }).catch((res) => {
            toast.error("Something unexpected happened!!", {
                description:res.message
            })
        })
    }, []);

    return (
        <CardContent className="px-4 flex flex-col overflow-auto">
            <div className="flex justify-between items-center w-full mb-3">
                <AddNote setNotes={setNotesList} />
                <Input
                    className="grow-0 basis-40 md:basis-80"
                    onChange={(e) => setSearchValue(e.target.value.trim())}
                    type="text"
                    placeholder="Search notes..."
                />
            </div>
            <section className="flex-1 overflow-y-auto  ">
                <Notes
                    searchValue={searchValue}
                    notes={notesList}
                    setNotes={setNotesList}
                />
            </section>
        </CardContent>
    );
}
