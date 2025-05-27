import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../ui/card";
import { Skeleton } from "../ui/skeleton";

export default function Loading() {
    const skeletonCard = (
        <Card className="shrink flex-1/4">
            <CardHeader>
                <CardTitle>
                    <Skeleton className="h-6 w-3/4" />
                </CardTitle>
            </CardHeader>

            <CardContent>
                <CardDescription>
                    <Skeleton className="h-4 w-full mb-1" />
                </CardDescription>
            </CardContent>

            <CardFooter className="flex gap-4 justify-end items-center">
                <Skeleton className="h-8 w-20" />
                <Skeleton className="h-8 w-20" />
            </CardFooter>
        </Card>
    );

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 h-full">
            {skeletonCard}
            {skeletonCard}
            {skeletonCard}
            {skeletonCard}
        </div>
    );
}
