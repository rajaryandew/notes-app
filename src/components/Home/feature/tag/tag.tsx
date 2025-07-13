import { type Tag } from "@/lib/types";
import { CommandItem } from "@/components/ui/command";
import { CheckIcon, Trash } from "lucide-react";
import TagDelete from "./tag-delete";

export default function TagItem({
    tag,
    onSelect,
    checked,
}: {
    tag: Tag;
    onSelect: (val: string) => void;
    checked: boolean;
}) {
    return (
        <CommandItem
            key={tag.id}
            value={String(tag.id)}
            onSelect={(val) => onSelect(val)}
            className="flex justify-between"
        >
            <CheckIcon className={checked ? "opacity-100" : "opacity-0"} />
            <div className="w-full">{tag.name}</div>
            {tag.user ?  <TagDelete tag={tag}/> : <></> }
        </CommandItem>
    );
}
