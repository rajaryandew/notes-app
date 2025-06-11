"use client";
import { CardContent } from "../ui/card";
import { Input } from "../ui/input";
import Notes from "./notes";
import { useEffect, useState } from "react";
import AddNote from "./add-note";
import { getActiveNotes } from "@/lib/server-actions/note";
import { toast } from "sonner";
import { useNote } from "@/context/NoteContext";
import Loading from "./loading";

export default function Content() {
    const [searchValue, setSearchValue] = useState("");
    const { setNotesList } = useNote();
    const [loading,setLoading] = useState(true)

    useEffect(() => {
        getActiveNotes()
            .then((notes) => {
                setNotesList(notes?.reverse() ?? []);
            })
            .catch((res) => {
                toast.error("Something unexpected happened!!", {
                    description: res.message,
                });
            })
            .finally(() => {
                setLoading(false)
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <CardContent className="px-4 flex flex-col overflow-auto ">
            <div className="flex justify-between items-center w-full mb-3">
                <AddNote variant={"default"} />
                <Input
                    className="grow-0 basis-40 md:basis-80"
                    onChange={(e) => setSearchValue(e.target.value.trim())}
                    type="text"
                    placeholder="Search notes..."
                />
            </div>
            <section className="flex-1 overflow-y-auto ">
                {loading === true ? (<Loading/>) : (<Notes searchValue={searchValue}/>)}
            </section>
        </CardContent>
    );
}
