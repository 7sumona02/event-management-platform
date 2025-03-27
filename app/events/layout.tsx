import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CalendarDays, Mail } from "lucide-react"

export default function EventsLayout({ children }) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <CalendarDays className="h-6 w-6" />
            <span>EventPro</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/dashboard" className="text-muted-foreground hover:text-foreground">
              Dashboard
            </Link>
            <Link href="/events" className="font-medium">
              Events
            </Link>
            <Link href="/vendors" className="text-muted-foreground hover:text-foreground">
              Vendors
            </Link>
            <Link href="/attendees" className="text-muted-foreground hover:text-foreground">
              Attendees
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="icon">
              <span className="sr-only">Notifications</span>
              <Mail className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="sm" className="gap-2">
              <span className="hidden md:inline-flex">John Doe</span>
              <span className="h-8 w-8 rounded-full bg-primary text-primary-foreground grid place-items-center text-sm font-medium">
                JD
              </span>
            </Button>
          </div>
        </div>
      </header>
      {children}
    </div>
  )
}

