import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function AlreadyExists() {
    return (
        <div className="w-screen h-screen flex items-center justify-center">
            <Card className="h-1/4 w-1/2 md:w-1/4">
                <CardHeader>
                    <CardTitle>Account already exists</CardTitle>
                    <CardDescription className="ml-3">Account with username entered already exists</CardDescription>
                </CardHeader>
                <CardContent>
                    <Link href="signup" className="underline text-center block">Go to signup</Link>
                </CardContent>
            </Card>
        </div>
    );
}
