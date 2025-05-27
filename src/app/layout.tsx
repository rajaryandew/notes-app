import type { Metadata } from "next";
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "sonner";

export const metadata: Metadata = {
    title: "QuickNote",
    description:
        "A simple and clean notes app to quickly jot down ideas, make lists, and keep your thoughts organized — anytime, anywhere.",
};

export default function RootLayout({ children }: {
  children: React.ReactNode
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <body className="bg-background h-screen w-screen ">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          {/* For the toast to show if something goes wrong */}
          <Toaster theme="system" closeButton duration={2000}/>
        </ThemeProvider>
      </body>
    </html>
  )
}