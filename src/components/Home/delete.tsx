import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTrigger,
    DialogDescription,
    DialogClose,
    DialogTitle,
} from "../ui/dialog";
import { Button } from "../ui/button";

export default function Delete({ onDelete }: { onDelete: () => void }) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>Delete</Button>
            </DialogTrigger>
            <DialogContent className="w-sm">
                <DialogHeader>
                    <DialogTitle>Confirm deleting this note</DialogTitle>
                    <DialogDescription className="text-sm text-muted-foreground mt-2 leading-relaxed">
                        This action cannot be undone. Be careful.
                    </DialogDescription>
                </DialogHeader>
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
