import { useTags } from "@/context/TagsContext";
import { removeTagClient } from "@/lib/tag-client";
import { Tag } from "@/lib/types";
import { Trash } from "lucide-react";

export default function TagDelete({tag}: {tag:Tag}) {
    const {setTags} = useTags()
    return (
        <button onClick={() => removeTagClient(tag,setTags)}>
            <Trash />
        </button>
    );
}
