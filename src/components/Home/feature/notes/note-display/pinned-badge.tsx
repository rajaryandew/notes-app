import { Pin } from "lucide-react";
import { Badge } from "@/components/ui/badge";

/**
 * PinnedBadge component
 * 
 * Renders a badge with a pin icon to indicate a pinned note.
 * 
 * @returns JSX.Element
 */
export default function PinnedBadge(){
    return(
        <Badge asChild className="absolute -left-1 -rotate-45 bottom-6 border-none" variant="outline"><Pin/></Badge>
    )
}