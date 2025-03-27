import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>EventPro - All-in-One Event Management Platform</title>
        <meta name="description" content="Streamline your event planning process with EventPro" />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light">
          <div className="sticky inset-x-0 top-0 z-30 w-full border-b backdrop-blur-lg transition-all">
            <Navbar1/>
          </div>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'
import { Navbar1 } from "@/components/navbar";

export const metadata = {
      generator: 'v0.dev'
    };
