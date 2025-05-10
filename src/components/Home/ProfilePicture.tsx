import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

export default function ProfilePicture({src}: {src:string}){
    return(
        <>
            <Avatar>
                <AvatarImage className="rounded-full size-10" src={src} />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
        </>
    )
}