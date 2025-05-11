import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default function NotFound() {
    return (
        <div className="w-screen h-screen flex items-center justify-center">
            <Card className="h-1/4 w-1/2 md:w-1/4">
                <CardHeader>
                    <CardTitle>Account not found</CardTitle>
                    <CardDescription className="ml-3">
                        Account with entered username and password not found. Try again!
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Link href="login" className="underline text-center block">
                        Go to login
                    </Link>
                </CardContent>
            </Card>
        </div>
    );
}
