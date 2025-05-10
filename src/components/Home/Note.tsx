import type { Note } from "@/utils/notes";
import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";

export default function Note({note,index}: {note:Note,index:number}) {
    return (
        <Card className="shrink flex-1/4" key={index}>
            <CardHeader>
                <CardTitle>{note.title}</CardTitle>
            </CardHeader>
            <CardContent>
                <CardDescription>{note.description}</CardDescription>
            </CardContent>
            <CardFooter className="flex gap-4 justify-end items-center">
                <Button>Edit</Button>
                <Button>Delete</Button>
            </CardFooter>
        </Card>
    )
}