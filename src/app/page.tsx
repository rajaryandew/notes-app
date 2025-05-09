import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from "@/components/ui/card";

import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

export default function Home() {

    return (
        <Card className="w-full h-full p-4">
            <CardHeader className="flex p-4 justify-between w-full">
                <CardTitle className="text-3xl">Notes App</CardTitle>
                <Avatar>
                    <AvatarImage className="rounded-full size-10" src="https://github.com/shadcn.png"/>
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </CardHeader>
        </Card>
    )
}