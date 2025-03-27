"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarDays, DollarSign, Users, Briefcase, Plus, Clock, BarChart } from "lucide-react"

export default function DashboardPage() {
  const [upcomingEvents, setUpcomingEvents] = useState([
    {
      id: 1,
      name: "Annual Tech Conference",
      date: "May 15-17, 2024",
      location: "San Francisco Convention Center",
      attendees: 120,
      capacity: 200,
      budget: 50000,
      spent: 34000,
      tasks: { completed: 18, total: 24 },
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
      tasks: { completed: 12, total: 20 },
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
      tasks: { completed: 8, total: 30 },
    },
  ])

  const [pendingTasks, setPendingTasks] = useState([
    { id: 1, title: "Finalize catering menu", dueDate: "in 2 days", event: "Annual Tech Conference" },
    { id: 2, title: "Send speaker confirmations", dueDate: "in 3 days", event: "Annual Tech Conference" },
    { id: 3, title: "Finalize venue contract", dueDate: "in 5 days", event: "Product Launch" },
    { id: 4, title: "Order promotional materials", dueDate: "in 7 days", event: "Summer Festival" },
  ])

  const completeTask = (taskId) => {
    setPendingTasks(pendingTasks.filter((task) => task.id !== taskId))
  }

  return (
    <main className="flex-1 container py-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <Link href="/events/new">
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            <span>New Event</span>
          </Button>
        </Link>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Events</CardTitle>
            <CalendarDays className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">+1 from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Attendees</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">245</div>
            <p className="text-xs text-muted-foreground">+22% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Budget Spent</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$71,450</div>
            <p className="text-xs text-muted-foreground">+5% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Active Vendors</CardTitle>
            <Briefcase className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">+2 from last month</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-3 mb-8">
        <div className="md:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Financial Overview</CardTitle>
              <CardDescription>Budget allocation and spending across events</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] flex items-end justify-between gap-2">
                {upcomingEvents.map((event, index) => (
                  <div key={index} className="flex flex-col items-center gap-2 w-full">
                    <div className="w-full flex flex-col items-center">
                      <div className="flex w-full justify-center gap-1">
                        <div
                          className="w-12 bg-primary/30 rounded-t-sm"
                          style={{ height: `${(event.budget / 75000) * 250}px` }}
                        ></div>
                        <div
                          className="w-12 bg-primary rounded-t-sm"
                          style={{ height: `${(event.spent / 75000) * 250}px` }}
                        ></div>
                      </div>
                      <div className="mt-2 text-center">
                        <p className="text-sm font-medium">{event.name.split(" ")[0]}</p>
                        <p className="text-xs text-muted-foreground">
                          ${event.spent.toLocaleString()} / ${event.budget.toLocaleString()}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-center mt-4 gap-6">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 bg-primary/30 rounded-sm"></div>
                  <span className="text-sm">Allocated</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 bg-primary rounded-sm"></div>
                  <span className="text-sm">Spent</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Event Analytics</CardTitle>
              <CardDescription>Key performance indicators</CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div>
                <h3 className="text-sm font-medium mb-2">Attendee Registration</h3>
                <div className="space-y-2">
                  {upcomingEvents.map((event, index) => (
                    <div key={index} className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>{event.name.split(" ")[0]}</span>
                        <span>
                          {event.attendees} / {event.capacity}
                        </span>
                      </div>
                      <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                        <div
                          className="h-full bg-primary rounded-full"
                          style={{ width: `${(event.attendees / event.capacity) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium mb-2">Task Completion</h3>
                <div className="space-y-2">
                  {upcomingEvents.map((event, index) => (
                    <div key={index} className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>{event.name.split(" ")[0]}</span>
                        <span>
                          {event.tasks.completed} / {event.tasks.total}
                        </span>
                      </div>
                      <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                        <div
                          className="h-full bg-primary rounded-full"
                          style={{ width: `${(event.tasks.completed / event.tasks.total) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <Button className="w-full">
                <BarChart className="h-4 w-4 mr-2" />
                View All Analytics
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      <Tabs defaultValue="upcoming">
        <TabsList className="mb-4">
          <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
          <TabsTrigger value="tasks">Pending Tasks</TabsTrigger>
        </TabsList>
        <TabsContent value="upcoming">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {upcomingEvents.map((event) => (
              <Link href={`/events/${event.id}`} key={event.id}>
                <Card className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-2">
                    <CardTitle>{event.name}</CardTitle>
                    <CardDescription>
                      <div className="flex items-center gap-2">
                        <CalendarDays className="h-4 w-4" />
                        <span>{event.date}</span>
                      </div>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Budget:</span>
                        <span>
                          ${event.spent.toLocaleString()} / ${event.budget.toLocaleString()}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Attendees:</span>
                        <span>
                          {event.attendees} / {event.capacity}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Tasks:</span>
                        <span>
                          {event.tasks.completed} / {event.tasks.total} completed
                        </span>
                      </div>
                      <div className="pt-2">
                        <Button variant="outline" className="w-full">
                          View Details
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="tasks">
          <Card>
            <CardHeader>
              <CardTitle>Pending Tasks</CardTitle>
              <CardDescription>Tasks that need your attention</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {pendingTasks.map((task) => (
                  <div key={task.id} className="flex items-start gap-4 rounded-lg border p-4">
                    <div className="rounded-full bg-primary/10 p-2">
                      <Clock className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium">{task.title}</h4>
                        <span className="text-xs text-muted-foreground">Due {task.dueDate}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{task.event}</p>
                    </div>
                    <Button variant="outline" size="sm" onClick={() => completeTask(task.id)}>
                      Complete
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </main>
  )
}

