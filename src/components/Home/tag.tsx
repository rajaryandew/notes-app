import { type Tag } from "@/lib/types";
import { CommandItem } from "@/components/ui/command";
import { CheckIcon } from "lucide-react";

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
            value={tag.name}
            onSelect={(val) => onSelect(val)}
        >
            <CheckIcon className={checked ? "opacity-100" : "opacity-0"} />
            {tag.name}
        </CommandItem>
    );
}
