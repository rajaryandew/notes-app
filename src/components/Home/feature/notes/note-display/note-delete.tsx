import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTrigger,
    DialogDescription,
    DialogClose,
    DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

/**
 * Delete component
 *
 * Renders a dialog to confirm deleting a note.
 * - Shows a confirmation dialog before deleting.
 * - Calls the provided onDelete callback when confirmed.
 *
 * @param onDelete - Callback function to execute when delete is confirmed.
 * @returns JSX.Element
 */
export default function Delete({ onDelete }: { onDelete: () => void }) {
    return (
        <Dialog>
            {/* Button to open the delete confirmation dialog */}
            <DialogTrigger asChild>
                <Button>Delete</Button>
            </DialogTrigger>
            <DialogContent className="w-sm">
                <DialogHeader>
                    <DialogTitle>Confirm deleting this note</DialogTitle>
                    <DialogDescription className="text-sm text-muted-foreground mt-2 leading-relaxed">
                        This note will still be inside recycle bin.
                    </DialogDescription>
                </DialogHeader>
                {/* Action buttons: Delete and Cancel */}
                <DialogClose asChild>
                    <div className="grid grid-cols-3 w-full gap-x-2 mt-3">
                        <Button
                            className="col-start-1"
                            autoFocus
                            variant="destructive"
                            onClick={onDelete}
                        >
                            Delete
                        </Button>
                        <Button className="col-start-3" variant="outline">
                            Cancel
                        </Button>
                    </div>
                </DialogClose>
            </DialogContent>
        </Dialog>
    );
}
