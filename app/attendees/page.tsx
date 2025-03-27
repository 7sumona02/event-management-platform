"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CalendarDays, Plus, Search, Mail, Download } from "lucide-react"

export default function AttendeesPage() {
  const [attendees, setAttendees] = useState([
    {
      id: 1,
      name: "Alice Cooper",
      email: "alice@example.com",
      ticketType: "VIP",
      event: "Annual Tech Conference",
      registered: "2024-03-10",
      status: "Confirmed",
    },
    {
      id: 2,
      name: "Bob Johnson",
      email: "bob@example.com",
      ticketType: "Standard",
      event: "Annual Tech Conference",
      registered: "2024-03-12",
      status: "Confirmed",
    },
    {
      id: 3,
      name: "Carol Smith",
      email: "carol@example.com",
      ticketType: "Standard",
      event: "Annual Tech Conference",
      registered: "2024-03-15",
      status: "Confirmed",
    },
    {
      id: 4,
      name: "Dave Williams",
      email: "dave@example.com",
      ticketType: "VIP",
      event: "Annual Tech Conference",
      registered: "2024-03-18",
      status: "Confirmed",
    },
    {
      id: 5,
      name: "Eve Brown",
      email: "eve@example.com",
      ticketType: "Standard",
      event: "Annual Tech Conference",
      registered: "2024-03-20",
      status: "Pending",
    },
    {
      id: 6,
      name: "Frank Miller",
      email: "frank@example.com",
      ticketType: "Standard",
      event: "Product Launch",
      registered: "2024-03-22",
      status: "Confirmed",
    },
    {
      id: 7,
      name: "Grace Lee",
      email: "grace@example.com",
      ticketType: "VIP",
      event: "Product Launch",
      registered: "2024-03-25",
      status: "Confirmed",
    },
    {
      id: 8,
      name: "Henry Davis",
      email: "henry@example.com",
      ticketType: "Standard",
      event: "Product Launch",
      registered: "2024-03-28",
      status: "Pending",
    },
    {
      id: 9,
      name: "Irene Wilson",
      email: "irene@example.com",
      ticketType: "Standard",
      event: "Summer Festival",
      registered: "2024-04-01",
      status: "Confirmed",
    },
    {
      id: 10,
      name: "Jack Thompson",
      email: "jack@example.com",
      ticketType: "VIP",
      event: "Summer Festival",
      registered: "2024-04-05",
      status: "Confirmed",
    },
  ])

  const [newAttendee, setNewAttendee] = useState({
    name: "",
    email: "",
    ticketType: "",
    event: "",
    status: "Confirmed",
  })

  const [searchTerm, setSearchTerm] = useState("")
  const [eventFilter, setEventFilter] = useState("all")
  const [ticketFilter, setTicketFilter] = useState("all")
  const [statusFilter, setStatusFilter] = useState("all")

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setNewAttendee((prev) => ({ ...prev, [name]: value }))
  }

  const handleAddAttendee = () => {
    const id = attendees.length > 0 ? Math.max(...attendees.map((a) => a.id)) + 1 : 1
    setAttendees([
      ...attendees,
      {
        ...newAttendee,
        id,
        registered: new Date().toISOString().split("T")[0],
      },
    ])
    setNewAttendee({
      name: "",
      email: "",
      ticketType: "",
      event: "",
      status: "Confirmed",
    })
  }

  const filteredAttendees = attendees.filter((attendee) => {
    const matchesSearch =
      attendee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      attendee.email.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesEvent = eventFilter === "all" || attendee.event === eventFilter
    const matchesTicket = ticketFilter === "all" || attendee.ticketType === ticketFilter
    const matchesStatus = statusFilter === "all" || attendee.status === statusFilter

    return matchesSearch && matchesEvent && matchesTicket && matchesStatus
  })

  const events = [
    "Annual Tech Conference",
    "Product Launch",
    "Summer Festival",
    "Leadership Workshop",
    "Marketing Summit",
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
            <Link href="/events" className="text-muted-foreground hover:text-foreground">
              Events
            </Link>
            <Link href="/vendors" className="text-muted-foreground hover:text-foreground">
              Vendors
            </Link>
            <Link href="/attendees" className="font-medium">
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
          <h1 className="text-3xl font-bold">Attendees</h1>
          <div className="flex gap-2">
            <Button variant="outline" className="gap-2">
              <Download className="h-4 w-4" />
              <span>Export</span>
            </Button>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="gap-2">
                  <Plus className="h-4 w-4" />
                  <span>Add Attendee</span>
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Add New Attendee</DialogTitle>
                  <DialogDescription>Enter the details of the new attendee below.</DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid gap-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={newAttendee.name}
                      onChange={handleInputChange}
                      placeholder="Enter attendee name"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      value={newAttendee.email}
                      onChange={handleInputChange}
                      placeholder="Enter email address"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="event">Event</Label>
                    <Select
                      value={newAttendee.event}
                      onValueChange={(value) => setNewAttendee((prev) => ({ ...prev, event: value }))}
                    >
                      <SelectTrigger id="event">
                        <SelectValue placeholder="Select event" />
                      </SelectTrigger>
                      <SelectContent>
                        {events.map((event) => (
                          <SelectItem key={event} value={event}>
                            {event}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="ticketType">Ticket Type</Label>
                    <Select
                      value={newAttendee.ticketType}
                      onValueChange={(value) => setNewAttendee((prev) => ({ ...prev, ticketType: value }))}
                    >
                      <SelectTrigger id="ticketType">
                        <SelectValue placeholder="Select ticket type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Standard">Standard</SelectItem>
                        <SelectItem value="VIP">VIP</SelectItem>
                        <SelectItem value="Early Bird">Early Bird</SelectItem>
                        <SelectItem value="Group">Group</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="status">Status</Label>
                    <Select
                      value={newAttendee.status}
                      onValueChange={(value) => setNewAttendee((prev) => ({ ...prev, status: value }))}
                    >
                      <SelectTrigger id="status">
                        <SelectValue placeholder="Select status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Confirmed">Confirmed</SelectItem>
                        <SelectItem value="Pending">Pending</SelectItem>
                        <SelectItem value="Cancelled">Cancelled</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <DialogFooter>
                  <Button onClick={handleAddAttendee}>Add Attendee</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search attendees..."
              className="pl-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Select value={eventFilter} onValueChange={setEventFilter}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by event" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Events</SelectItem>
              {events.map((event) => (
                <SelectItem key={event} value={event}>
                  {event}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={ticketFilter} onValueChange={setTicketFilter}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by ticket" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Tickets</SelectItem>
              <SelectItem value="Standard">Standard</SelectItem>
              <SelectItem value="VIP">VIP</SelectItem>
              <SelectItem value="Early Bird">Early Bird</SelectItem>
              <SelectItem value="Group">Group</SelectItem>
            </SelectContent>
          </Select>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="Confirmed">Confirmed</SelectItem>
              <SelectItem value="Pending">Pending</SelectItem>
              <SelectItem value="Cancelled">Cancelled</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Attendee Directory</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border">
              <div className="grid grid-cols-6 gap-4 p-4 border-b font-medium text-sm">
                <div>Name</div>
                <div>Email</div>
                <div>Event</div>
                <div>Ticket Type</div>
                <div>Registration Date</div>
                <div>Status</div>
              </div>
              {filteredAttendees.map((attendee) => (
                <div key={attendee.id} className="grid grid-cols-6 gap-4 p-4 border-b text-sm items-center">
                  <div>{attendee.name}</div>
                  <div>{attendee.email}</div>
                  <div>{attendee.event}</div>
                  <div>{attendee.ticketType}</div>
                  <div>{attendee.registered}</div>
                  <div>
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
                        attendee.status === "Confirmed"
                          ? "bg-green-100 text-green-800"
                          : attendee.status === "Pending"
                            ? "bg-amber-100 text-amber-800"
                            : "bg-red-100 text-red-800"
                      }`}
                    >
                      {attendee.status}
                    </span>
                  </div>
                </div>
              ))}

              {filteredAttendees.length === 0 && (
                <div className="text-center py-8">
                  <p className="text-muted-foreground">No attendees found matching your filters.</p>
                </div>
              )}
            </div>

            <div className="flex items-center justify-between mt-4">
              <div className="text-sm text-muted-foreground">
                Showing {filteredAttendees.length} of {attendees.length} attendees
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Mail className="h-4 w-4 mr-2" />
                  Email Selected
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}

