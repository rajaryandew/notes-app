"use client";
import { Button } from "@/components/ui/button";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { useTags } from "@/context/TagsContext";
import { CheckIcon, ChevronsUpDown, Plus } from "lucide-react";
import { useState } from "react";
import AddTag from "./add-tag";

export default function TagInput() {
    const { tags } = useTags();
    const [open, setOpen] = useState(false);
    const [searchValue, setSearchValue] = useState("");

    console.log("Tags:", tags); // check array content
    console.log("Search value:", searchValue); // make sure selection is updating

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button variant="outline">
                    {searchValue
                        ? tags.find((tag) => searchValue === tag.name)?.name
                        : "None..."}
                    <ChevronsUpDown className="opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent id="tag" className="w-[200px] p-0">
                <Command>
                    <CommandInput placeholder="select tag" />
                    <CommandList>
                        <CommandEmpty>None...</CommandEmpty>
                        <CommandGroup>
                            {tags.map((tag) => (
                                <CommandItem
                                    key={tag.id}
                                    value={tag.name}
                                    onSelect={(val) => {
                                        setSearchValue(
                                            val === searchValue ? "" : val
                                        );
                                        setOpen(false);
                                    }}
                                >
                                    <CheckIcon
                                        className={
                                            searchValue === tag.name
                                                ? "opacity-100"
                                                : "opacity-0"
                                        }
                                    />
                                    {tag.name}
                                </CommandItem>
                            ))}
                            <AddTag></AddTag>
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    );
}
