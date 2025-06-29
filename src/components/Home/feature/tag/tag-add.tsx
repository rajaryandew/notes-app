import { useState } from "react";
import { CommandItem } from "@/components/ui/command";
import {
    DialogTrigger,
    Dialog,
    DialogContent,
    DialogHeader,
    DialogDescription,
    DialogTitle,
} from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { DialogClose } from "@radix-ui/react-dialog";
import { addTagClient } from "@/lib/tag-client";
import { useTags } from "@/context/TagsContext";

export default function AddTag() {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("");
    const {setTags} = useTags()

    function resetInput(){
        setValue("")
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <CommandItem onSelect={() => setOpen(true)}>
                    <Plus />
                    Add tag
                </CommandItem>
            </DialogTrigger>
            <DialogContent className="w-64">
                <DialogHeader>
                    <DialogTitle>Add tag</DialogTitle>
                    <DialogDescription>Add a custom tag</DialogDescription>
                </DialogHeader>
                <Input
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder="tag name"
                />
                <div className="grid grid-cols-3">
                    <DialogClose asChild>
                        <Button variant="outline" onClick={() => addTagClient(value,setTags,resetInput)}>Add tag</Button>
                    </DialogClose>
                    <DialogClose asChild>
                        <Button className="col-start-3" variant="secondary">
                            Cancel
                        </Button>
                    </DialogClose>
                </div>
            </DialogContent>
        </Dialog>
    );
}
