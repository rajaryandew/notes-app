import { FileText } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import AddNote from "./add-note";

/**
 * EmptyNotes component
 * 
 * Renders a placeholder card when there are no notes.
 * - Shows an icon, message, and a button to add the first note.
 * 
 * @returns JSX.Element
 */
export default function EmptyNotes() {
  return (
      <Card className="bg-none outline-0 w-full">
          <CardHeader className="flex flex-col items-center justify-center text-center">
              {/* Icon and message for empty state */}
              <FileText className="w-10 h-10 mb-2" />
              <CardTitle>No Notes Yet</CardTitle>
              <CardDescription>
                  Start by creating your first note 🎉
              </CardDescription>
          </CardHeader>
          {/* Button to add a new note */}
          <CardContent className="flex justify-center">
              <AddNote variant={"secondary"}/>
          </CardContent>
      </Card>
  );
}
