import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CalendarDays, DollarSign, Users, Plus, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function EventsPage() {
  const events = [
    {
      id: 1,
      name: "Annual Tech Conference",
      date: "May 15-17, 2024",
      location: "San Francisco Convention Center",
      attendees: 120,
      capacity: 200,
      budget: 50000,
      spent: 34000,
      type: "Conference",
    },
    {
      id: 2,
      name: "Product Launch",
      date: "June 5, 2024",
      location: "New York Marriott",
      attendees: 75,
      capacity: 100,
      budget: 15000,
      spent: 12450,
      type: "Launch",
    },
    {
      id: 3,
      name: "Summer Festival",
      date: "July 10-12, 2024",
      location: "Central Park",
      attendees: 50,
      capacity: 500,
      budget: 75000,
      spent: 25000,
      type: "Festival",
    },
    {
      id: 4,
      name: "Leadership Workshop",
      date: "August 22, 2024",
      location: "Chicago Business Center",
      attendees: 30,
      capacity: 50,
      budget: 8000,
      spent: 3500,
      type: "Workshop",
    },
    {
      id: 5,
      name: "Marketing Summit",
      date: "September 15-16, 2024",
      location: "Los Angeles Conference Hall",
      attendees: 85,
      capacity: 150,
      budget: 25000,
      spent: 18000,
      type: "Conference",
    },
  ]

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
            <Button variant="ghost" size="sm" className="gap-2">
              <span className="hidden md:inline-flex">John Doe</span>
              <span className="h-8 w-8 rounded-full bg-primary text-primary-foreground grid place-items-center text-sm font-medium">
                JD
              </span>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1 container py-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold">Events</h1>
          <Link href="/events/new">
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              <span>New Event</span>
            </Button>
          </Link>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search events..." className="pl-8" />
          </div>
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="conference">Conference</SelectItem>
              <SelectItem value="launch">Product Launch</SelectItem>
              <SelectItem value="festival">Festival</SelectItem>
              <SelectItem value="workshop">Workshop</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="upcoming">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by date" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="upcoming">Upcoming</SelectItem>
              <SelectItem value="past">Past Events</SelectItem>
              <SelectItem value="all-time">All Time</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid gap-6">
          {events.map((event) => (
            <Link href={`/events/${event.id}`} key={event.id}>
              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-4 gap-4">
                    <div className="space-y-1">
                      <h2 className="text-xl font-bold">{event.name}</h2>
                      <p className="text-sm text-muted-foreground">{event.type}</p>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <CalendarDays className="h-4 w-4" />
                        <span>{event.date}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{event.location}</p>
                    </div>

                    <div className="flex flex-col justify-center">
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        <div>
                          <p className="font-medium">
                            {event.attendees} / {event.capacity}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {Math.round((event.attendees / event.capacity) * 100)}% capacity
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col justify-center">
                      <div className="flex items-center gap-2">
                        <DollarSign className="h-4 w-4 text-muted-foreground" />
                        <div>
                          <p className="font-medium">
                            ${event.spent.toLocaleString()} / ${event.budget.toLocaleString()}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {Math.round((event.spent / event.budget) * 100)}% of budget
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-end">
                      <Button variant="outline">View Details</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </main>
    </div>
  )
}

