"use client"
import { Note } from "@/utils/notes";
import { CardContent } from "../ui/card";
import { Input } from "../ui/input";
import Notes from "./Notes";
import { useState } from "react";
import AddNote from "./AddNote";

export default function Content({ notes }: { notes: Note[] }) {

    const [searchValue, setSearchValue] = useState("")

    return (
        <CardContent className="px-4 flex flex-col overflow-auto">
            <div className="flex justify-between items-center w-full mb-3">
                <AddNote />
                <Input className="grow-0 basis-40 md:basis-80" onChange={(e) => setSearchValue((e.target.value).trim())} type="text" placeholder="Search notes..." />
            </div>
            <section className="flex-1 overflow-y-auto  ">
                <Notes searchValue={searchValue} notes={notes} />
            </section>
        </CardContent>
    )
}