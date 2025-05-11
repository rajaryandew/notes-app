import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { LogoutButton } from "./logout-button";

export default function ProfilePicture({ src }: { src: string }) {
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Avatar>
                    <AvatarImage className="rounded-full size-10 hover:opacity-80" src={src} />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </PopoverTrigger>
            <PopoverContent className="m-3" asChild>
                <div className="flex flex-col gap-4">
                    <h4>Settings</h4>
                    <LogoutButton />
                </div>
            </PopoverContent>
        </Popover>
    );
}
