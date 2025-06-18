"use client";
import { Button } from "@/components/ui/button";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandList,
} from "@/components/ui/command";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { useTags } from "@/context/TagsContext";
import { ChevronsUpDown} from "lucide-react";
import { useState } from "react";
import AddTag from "./add-tag";
import TagItem from "./tag";

export default function TagInput() {
    const { tags } = useTags();
    const [open, setOpen] = useState(false);
    const [searchValue, setSearchValue] = useState("");

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button variant="outline">
                    {searchValue
                        ? tags.find((tag) => searchValue === tag.name)?.name
                        : "None"}
                    <ChevronsUpDown className="opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent id="tag" className="w-[200px] p-0" align="start" side="right"> 
                <Command>
                    <CommandInput placeholder="select tag" />
                    <CommandList>
                        <CommandEmpty>None...</CommandEmpty>
                        <CommandGroup>
                            {tags.map((tag) => (
                                <TagItem
                                    onSelect={(val) => {
                                        setSearchValue(
                                            val === searchValue ? "" : val
                                        );
                                        setOpen(false);
                                    }}
                                    tag={tag}
                                    checked={searchValue === tag.name}
                                    key={tag.id}
                                />
                            ))}
                            <AddTag></AddTag>
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    );
}
