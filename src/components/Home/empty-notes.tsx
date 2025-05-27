import { FileText } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import AddNote from "./add-note";

export default function EmptyNotes() {
  return (
      <Card className="bg-none outline-0 w-full">
          <CardHeader className="flex flex-col items-center justify-center text-center">
              <FileText className="w-10 h-10 mb-2" />
              <CardTitle>No Notes Yet</CardTitle>
              <CardDescription>
                  Start by creating your first note 🎉
              </CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center">
              <AddNote variant={"secondary"}/>
          </CardContent>
      </Card>
  );
}
