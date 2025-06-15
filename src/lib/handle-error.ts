import { Prisma } from "@/generated/prisma";
import { toast } from "sonner";

/**
 * Handles and displays user-friendly error messages for known Prisma errors.
 *
 * - Checks the type and code of the Prisma error and shows a relevant toast notification.
 * - Falls back to a generic message if the error is unknown.
 *
 * @param error - The error object returned from the server or Prisma client.
 * @param fallbackMsg - The default message to display if the error is not recognized.
 */
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
    } else if (error instanceof Prisma.PrismaClientValidationError) {
        toast.error("Invalid input. Please check your fields.");
        return;
    } else if (error instanceof Prisma.PrismaClientInitializationError) {
        toast.error("Can't connect to the database.");
        return;
    }

    toast.error(fallbackMsg);
}
