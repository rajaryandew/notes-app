import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@radix-ui/react-dialog";
import { Button } from "../ui/button";
import { DialogHeader } from "../ui/dialog";

export default function AddNote() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className=" font-semibold flex-1/8 grow-0">New Note</Button>
            </DialogTrigger>
            <DialogContent className="bg-white sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Add Note</DialogTitle>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}