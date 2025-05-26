import { Prisma } from "@/generated/prisma";
import { toast } from "sonner";

export function handlePrismaError(
    error: unknown,
    fallbackMsg = "Something went wrong"
) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
        switch (error.code) {
            case "P2002":
                toast.error("Already exists. Try something unique.");
                return;
            case "P2025":
                toast.error("Item not found. It may have been deleted.");
                return;
            case "P2000":
                toast.error("Input is too long. Try shortening it.");
                return;
            case "P2003":
                toast.error("Invalid relation. Try refreshing.");
                return;
            default:
                toast.error(`Database error [${error.code}]`);
                return;
        }
    }

    else if (error instanceof Prisma.PrismaClientValidationError) {
        toast.error("Invalid input. Please check your fields.");
        return;
    }

    else if (error instanceof Prisma.PrismaClientInitializationError) {
        toast.error("Can't connect to the database.");
        return;
    }

    toast.error(fallbackMsg);
}
