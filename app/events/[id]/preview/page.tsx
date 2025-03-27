"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarDays, MapPin, Clock, Users, DollarSign, ChevronLeft } from "lucide-react"

export default function EventPreviewPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-background">
      <div className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl">
            <CalendarDays className="h-6 w-6" />
            <span>EventPro</span>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" asChild>
              <Link href={`/events/${params.id}`}>
                <ChevronLeft className="h-4 w-4 mr-1" />
                Back to Admin
              </Link>
            </Button>
            <Button size="sm">Register Now</Button>
          </div>
        </div>
      </div>

      <div className="h-64 bg-gradient-to-r from-primary/20 to-primary/10 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-2">Annual Tech Conference</h1>
          <p className="text-xl text-muted-foreground">May 15-17, 2024 • San Francisco Convention Center</p>
        </div>
      </div>

      <div className="container py-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2 space-y-8">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">About This Event</h2>
                <p className="mb-4">
                  Join us for three days of inspiring talks, workshops, and networking opportunities with industry
                  leaders. The Annual Tech Conference brings together the brightest minds in technology to share
                  insights, learn from each other, and shape the future of the industry.
                </p>
                <p>
                  Whether you're a developer, designer, product manager, or tech enthusiast, this conference offers
                  valuable content and connections to help you grow professionally.
                </p>

                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="flex items-start gap-3">
                    <CalendarDays className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-medium">Date & Time</h3>
                      <p className="text-sm text-muted-foreground">May 15-17, 2024</p>
                      <p className="text-sm text-muted-foreground">9:00 AM - 5:00 PM PDT</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-medium">Location</h3>
                      <p className="text-sm text-muted-foreground">San Francisco Convention Center</p>
                      <p className="text-sm text-muted-foreground">747 Howard St, San Francisco, CA</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div>
              <h2 className="text-2xl font-bold mb-4">Event Schedule</h2>
              <Tabs defaultValue="day1">
                <TabsList className="mb-4">
                  <TabsTrigger value="day1">Day 1 (May 15)</TabsTrigger>
                  <TabsTrigger value="day2">Day 2 (May 16)</TabsTrigger>
                  <TabsTrigger value="day3">Day 3 (May 17)</TabsTrigger>
                </TabsList>
                <TabsContent value="day1">
                  <Card>
                    <CardContent className="p-6 space-y-4">
                      <div className="flex gap-4 pb-4 border-b">
                        <div className="w-24 text-right">
                          <span className="text-sm font-medium">9:00 AM</span>
                        </div>
                        <div>
                          <h3 className="font-medium">Registration & Breakfast</h3>
                          <p className="text-sm text-muted-foreground">Main Lobby</p>
                        </div>
                      </div>
                      <div className="flex gap-4 pb-4 border-b">
                        <div className="w-24 text-right">
                          <span className="text-sm font-medium">10:00 AM</span>
                        </div>
                        <div>
                          <h3 className="font-medium">Opening Keynote</h3>
                          <p className="text-sm text-muted-foreground">Main Hall</p>
                          <p className="text-sm">The Future of Technology: Trends and Predictions</p>
                        </div>
                      </div>
                      <div className="flex gap-4 pb-4 border-b">
                        <div className="w-24 text-right">
                          <span className="text-sm font-medium">12:00 PM</span>
                        </div>
                        <div>
                          <h3 className="font-medium">Lunch</h3>
                          <p className="text-sm text-muted-foreground">Dining Area</p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="w-24 text-right">
                          <span className="text-sm font-medium">1:30 PM</span>
                        </div>
                        <div>
                          <h3 className="font-medium">Breakout Sessions</h3>
                          <p className="text-sm text-muted-foreground">Various Rooms</p>
                          <p className="text-sm">Multiple tracks covering AI, Web Development, Mobile, and Cloud</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="day2">
                  <Card>
                    <CardContent className="p-6 space-y-4">
                      <div className="flex gap-4 pb-4 border-b">
                        <div className="w-24 text-right">
                          <span className="text-sm font-medium">9:00 AM</span>
                        </div>
                        <div>
                          <h3 className="font-medium">Breakfast & Networking</h3>
                          <p className="text-sm text-muted-foreground">Main Lobby</p>
                        </div>
                      </div>
                      <div className="flex gap-4 pb-4 border-b">
                        <div className="w-24 text-right">
                          <span className="text-sm font-medium">10:00 AM</span>
                        </div>
                        <div>
                          <h3 className="font-medium">Industry Panel Discussion</h3>
                          <p className="text-sm text-muted-foreground">Main Hall</p>
                          <p className="text-sm">Leading experts discuss emerging technologies and market trends</p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="w-24 text-right">
                          <span className="text-sm font-medium">2:00 PM</span>
                        </div>
                        <div>
                          <h3 className="font-medium">Workshops</h3>
                          <p className="text-sm text-muted-foreground">Various Rooms</p>
                          <p className="text-sm">Hands-on sessions for practical skill development</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="day3">
                  <Card>
                    <CardContent className="p-6 space-y-4">
                      <div className="flex gap-4 pb-4 border-b">
                        <div className="w-24 text-right">
                          <span className="text-sm font-medium">9:00 AM</span>
                        </div>
                        <div>
                          <h3 className="font-medium">Breakfast & Networking</h3>
                          <p className="text-sm text-muted-foreground">Main Lobby</p>
                        </div>
                      </div>
                      <div className="flex gap-4 pb-4 border-b">
                        <div className="w-24 text-right">
                          <span className="text-sm font-medium">10:00 AM</span>
                        </div>
                        <div>
                          <h3 className="font-medium">Closing Keynote</h3>
                          <p className="text-sm text-muted-foreground">Main Hall</p>
                          <p className="text-sm">Innovations That Will Shape Our Future</p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="w-24 text-right">
                          <span className="text-sm font-medium">12:00 PM</span>
                        </div>
                        <div>
                          <h3 className="font-medium">Farewell Lunch & Networking</h3>
                          <p className="text-sm text-muted-foreground">Dining Area</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4">Registration</h2>

                <div className="space-y-4">
                  <div className="p-3 border rounded-md">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-medium">VIP Pass</h3>
                      <span className="font-bold">$299</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">Premium experience with exclusive access</p>
                    <Button className="w-full">Select</Button>
                  </div>

                  <div className="p-3 border rounded-md">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-medium">Early Bird</h3>
                      <span className="font-bold">$149</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">Discounted rate for early registrations</p>
                    <Button className="w-full">Select</Button>
                  </div>

                  <div className="p-3 border rounded-md">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-medium">Standard</h3>
                      <span className="font-bold">$199</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">Regular conference admission</p>
                    <Button className="w-full">Select</Button>
                  </div>

                  <div className="mt-4">
                    <div className="flex gap-2 mb-2">
                      <Input placeholder="Enter promo code" />
                      <Button variant="outline">Apply</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4">Event Details</h2>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Users className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-medium">Attendees</h3>
                      <p className="text-sm text-muted-foreground">120 registered / 200 capacity</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-medium">Duration</h3>
                      <p className="text-sm text-muted-foreground">3 days (9:00 AM - 5:00 PM daily)</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <DollarSign className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-medium">Pricing</h3>
                      <p className="text-sm text-muted-foreground">Starting from $149</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <footer className="border-t mt-12 py-8 bg-muted/30">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <CalendarDays className="h-5 w-5" />
              <span className="font-bold">EventPro</span>
            </div>
            <div className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Annual Tech Conference. All rights reserved.
            </div>
            <div className="flex gap-4">
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

