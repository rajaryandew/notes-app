import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";

import {type Note as NoteType } from "@/utils/notes";
import Note from "./Note";

export default function Notes({searchValue,notes}: {searchValue:string,notes:NoteType[]}) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {notes.map((note, index) =>
                (note.title.toLowerCase()).startsWith(searchValue) ?
                    <Note key={index} note={note} index={index}></Note>
                    : null

            )}
        </div>
    )
}