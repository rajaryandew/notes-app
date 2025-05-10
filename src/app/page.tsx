import {Roboto} from "next/font/google"

const roboto = Roboto({
    weight:"700",
    subsets:["latin"]
})

import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from "@/components/ui/card";

import ProfilePicture from "@/components/Home/ProfilePicture";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";


export default function Home() {

    return (
        <Card className="w-full h-full p-4">
            <CardHeader className="flex mb-3 p-4 justify-between w-full">
                <CardTitle className={`text-3xl ${roboto.className}`}>Notes App</CardTitle>
                <ProfilePicture src=""/>    
            </CardHeader>
            <CardContent className="px-4 item-center flex justify-between">
                <Button className="px-9 flex-1/8 grow-0">New Note</Button>
                <Input className="grow-0 basis-40 md:basis-80" type="text" placeholder="Search notes..."/>
            </CardContent>
        </Card>
    )
}