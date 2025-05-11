import type { Metadata } from "next";
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Notes app",
  description: "A simple notes app"
}

export default function RootLayout({ children }: {
  children: React.ReactNode
}) {
  return (
    <html suppressHydrationWarning>
      <body className="bg-background h-screen w-screen ">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}