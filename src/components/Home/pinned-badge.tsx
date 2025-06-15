import { Pin } from "lucide-react";
import { Badge } from "../ui/badge";

export default function PinnedBadge(){
    return(
        <Badge asChild className="absolute -left-1 -rotate-45 bottom-6 border-none" variant="outline"><Pin/></Badge>
    )
}