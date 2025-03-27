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
import { CalendarDays, Briefcase, Plus, Search, Edit, Trash, Phone, Mail } from "lucide-react"

export default function VendorsPage() {
  const [vendors, setVendors] = useState([
    {
      id: 1,
      name: "Grand Hotel",
      service: "Venue",
      contact: "John Smith",
      phone: "555-123-4567",
      email: "john@grandhotel.com",
      events: ["Annual Tech Conference", "Marketing Summit"],
      status: "Active",
    },
    {
      id: 2,
      name: "Gourmet Catering",
      service: "Food & Beverage",
      contact: "Mary Johnson",
      phone: "555-234-5678",
      email: "mary@gourmetcatering.com",
      events: ["Annual Tech Conference", "Product Launch", "Leadership Workshop"],
      status: "Active",
    },
    {
      id: 3,
      name: "Sound Solutions",
      service: "AV Equipment",
      contact: "David Brown",
      phone: "555-345-6789",
      email: "david@soundsolutions.com",
      events: ["Annual Tech Conference", "Summer Festival"],
      status: "Active",
    },
    {
      id: 4,
      name: "Print Masters",
      service: "Printing",
      contact: "Sarah Wilson",
      phone: "555-456-7890",
      email: "sarah@printmasters.com",
      events: ["Product Launch", "Marketing Summit"],
      status: "Active",
    },
    {
      id: 5,
      name: "Event Decorators",
      service: "Decor",
      contact: "Michael Davis",
      phone: "555-567-8901",
      email: "michael@eventdecorators.com",
      events: ["Summer Festival"],
      status: "Active",
    },
    {
      id: 6,
      name: "Security Pro",
      service: "Security",
      contact: "Jennifer Lee",
      phone: "555-678-9012",
      email: "jennifer@securitypro.com",
      events: ["Annual Tech Conference", "Summer Festival"],
      status: "Active",
    },
    {
      id: 7,
      name: "Transport Services",
      service: "Transportation",
      contact: "Robert Taylor",
      phone: "555-789-0123",
      email: "robert@transportservices.com",
      events: ["Annual Tech Conference"],
      status: "Inactive",
    },
  ])

  const [newVendor, setNewVendor] = useState({
    name: "",
    service: "",
    contact: "",
    phone: "",
    email: "",
  })

  const [searchTerm, setSearchTerm] = useState("")
  const [serviceFilter, setServiceFilter] = useState("all")
  const [statusFilter, setStatusFilter] = useState("all")

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setNewVendor((prev) => ({ ...prev, [name]: value }))
  }

  const handleAddVendor = () => {
    const id = vendors.length > 0 ? Math.max(...vendors.map((v) => v.id)) + 1 : 1
    setVendors([
      ...vendors,
      {
        ...newVendor,
        id,
        events: [],
        status: "Active",
      },
    ])
    setNewVendor({
      name: "",
      service: "",
      contact: "",
      phone: "",
      email: "",
    })
  }

  const filteredVendors = vendors.filter((vendor) => {
    const matchesSearch =
      vendor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      vendor.service.toLowerCase().includes(searchTerm.toLowerCase()) ||
      vendor.contact.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesService = serviceFilter === "all" || vendor.service === serviceFilter
    const matchesStatus = statusFilter === "all" || vendor.status === statusFilter

    return matchesSearch && matchesService && matchesStatus
  })

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
            <Link href="/vendors" className="font-medium">
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
          <h1 className="text-3xl font-bold">Vendors</h1>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="gap-2">
                <Plus className="h-4 w-4" />
                <span>Add Vendor</span>
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add New Vendor</DialogTitle>
                <DialogDescription>Enter the details of the new vendor below.</DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Vendor Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={newVendor.name}
                    onChange={handleInputChange}
                    placeholder="Enter vendor name"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="service">Service Type</Label>
                  <Select
                    value={newVendor.service}
                    onValueChange={(value) => setNewVendor((prev) => ({ ...prev, service: value }))}
                  >
                    <SelectTrigger id="service">
                      <SelectValue placeholder="Select service type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Venue">Venue</SelectItem>
                      <SelectItem value="Food & Beverage">Food & Beverage</SelectItem>
                      <SelectItem value="AV Equipment">AV Equipment</SelectItem>
                      <SelectItem value="Printing">Printing</SelectItem>
                      <SelectItem value="Decor">Decor</SelectItem>
                      <SelectItem value="Security">Security</SelectItem>
                      <SelectItem value="Transportation">Transportation</SelectItem>
                      <SelectItem value="Entertainment">Entertainment</SelectItem>
                      <SelectItem value="Photography">Photography</SelectItem>
                      <SelectItem value="Other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="contact">Contact Person</Label>
                  <Input
                    id="contact"
                    name="contact"
                    value={newVendor.contact}
                    onChange={handleInputChange}
                    placeholder="Enter contact name"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    value={newVendor.phone}
                    onChange={handleInputChange}
                    placeholder="Enter phone number"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    value={newVendor.email}
                    onChange={handleInputChange}
                    placeholder="Enter email address"
                  />
                </div>
              </div>
              <DialogFooter>
                <Button onClick={handleAddVendor}>Add Vendor</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search vendors..."
              className="pl-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Select value={serviceFilter} onValueChange={setServiceFilter}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by service" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Services</SelectItem>
              <SelectItem value="Venue">Venue</SelectItem>
              <SelectItem value="Food & Beverage">Food & Beverage</SelectItem>
              <SelectItem value="AV Equipment">AV Equipment</SelectItem>
              <SelectItem value="Printing">Printing</SelectItem>
              <SelectItem value="Decor">Decor</SelectItem>
              <SelectItem value="Security">Security</SelectItem>
              <SelectItem value="Transportation">Transportation</SelectItem>
            </SelectContent>
          </Select>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="Active">Active</SelectItem>
              <SelectItem value="Inactive">Inactive</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Vendor Directory</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              {filteredVendors.map((vendor) => (
                <div
                  key={vendor.id}
                  className="flex flex-col md:flex-row items-start md:items-center justify-between p-4 rounded-md border"
                >
                  <div className="space-y-1 mb-4 md:mb-0">
                    <div className="flex items-center gap-2">
                      <Briefcase className="h-4 w-4 text-muted-foreground" />
                      <h3 className="font-medium">{vendor.name}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">{vendor.service}</p>
                    <div className="flex items-center gap-1 text-sm">
                      <span
                        className={`px-2 py-0.5 rounded-full text-xs ${
                          vendor.status === "Active" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {vendor.status}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-1 mb-4 md:mb-0">
                    <p className="text-sm font-medium">{vendor.contact}</p>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Phone className="h-3 w-3" />
                      <span>{vendor.phone}</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Mail className="h-3 w-3" />
                      <span>{vendor.email}</span>
                    </div>
                  </div>

                  <div className="space-y-1 mb-4 md:mb-0 flex-1 max-w-[200px]">
                    <p className="text-sm font-medium">Associated Events:</p>
                    <div className="flex flex-wrap gap-1">
                      {vendor.events.map((event, index) => (
                        <span key={index} className="px-2 py-0.5 bg-primary/10 rounded-full text-xs">
                          {event}
                        </span>
                      ))}
                      {vendor.events.length === 0 && <span className="text-sm text-muted-foreground">No events</span>}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Edit className="h-4 w-4 mr-2" />
                      Edit
                    </Button>
                    <Button variant="outline" size="sm" className="text-destructive">
                      <Trash className="h-4 w-4 mr-2" />
                      Remove
                    </Button>
                  </div>
                </div>
              ))}

              {filteredVendors.length === 0 && (
                <div className="text-center py-8">
                  <p className="text-muted-foreground">No vendors found matching your filters.</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}

