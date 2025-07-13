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
import { ChevronsUpDown } from "lucide-react";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import AddTag from "./tag-add";
import TagItem from "./tag";

export default function TagInput({
    setTag,
    tagId,
}: {
    setTag: Dispatch<SetStateAction<number | undefined>>;
    tagId?: number | null | undefined;
}) {
    const { tags } = useTags();
    const [open, setOpen] = useState(false);
    const [searchValue, setSearchValue] = useState(String(tagId));

    useEffect(() => {
        setSearchValue(tagId != null ? String(tagId) : "");
    }, [tagId]);

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button variant="outline">
                    {searchValue
                        ? tags.find(
                              (tag) => String(tag.id) === (searchValue || "")
                          )?.name
                        : "None"}
                    <ChevronsUpDown className="opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent
                id="tag"
                className="w-[200px] p-0"
                align="start"
                side="right"
            >
                <Command className="overflow-y-scroll">
                    <CommandInput placeholder="select tag" />
                    <CommandList className="max-h-full">
                        <CommandEmpty>None...</CommandEmpty>
                        <CommandGroup>
                            {tags.map((tag) => (
                                <TagItem
                                    onSelect={(val) => {
                                        setTag(tag.id);
                                        setSearchValue(
                                            val === searchValue ? "" : val
                                        );
                                        setOpen(false);
                                    }}
                                    tag={tag}
                                    checked={searchValue === String(tag.id)}
                                    key={tag.id}
                                />
                            ))}
                            <AddTag />
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    );
}
