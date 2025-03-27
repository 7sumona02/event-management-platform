"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Switch } from "@/components/ui/switch"
import { toast } from "@/components/ui/use-toast"
import {
  CalendarDays,
  DollarSign,
  Users,
  Briefcase,
  Mail,
  ArrowLeft,
  Clock,
  Edit,
  Plus,
  Trash,
  FileText,
  Calendar,
  CheckCircle,
  BarChart,
  LineChart,
  Download,
  UserPlus,
  MessageSquare,
  FileCheck,
  Bell,
} from "lucide-react"

export default function EventDetailsPage({ params }: { params: { id: string } }) {
  // Task Management
  const [tasks, setTasks] = useState([
    { id: 1, title: "Book venue", completed: true, dueDate: "2024-04-15", assignedTo: "John Doe", category: "Venue" },
    {
      id: 2,
      title: "Finalize catering menu",
      completed: false,
      dueDate: "2024-04-20",
      assignedTo: "Sarah Wilson",
      category: "Food & Beverage",
    },
    {
      id: 3,
      title: "Send speaker confirmations",
      completed: false,
      dueDate: "2024-04-21",
      assignedTo: "John Doe",
      category: "Speakers",
    },
    {
      id: 4,
      title: "Order promotional materials",
      completed: true,
      dueDate: "2024-04-10",
      assignedTo: "Michael Brown",
      category: "Marketing",
    },
    {
      id: 5,
      title: "Set up registration website",
      completed: true,
      dueDate: "2024-04-05",
      assignedTo: "Emily Davis",
      category: "Technology",
    },
  ])

  // Budget and Expenses
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      item: "Venue deposit",
      amount: 15000,
      category: "Venue",
      date: "2024-03-15",
      paid: true,
      approvedBy: "John Doe",
    },
    {
      id: 2,
      item: "Catering deposit",
      amount: 5000,
      category: "Food & Beverage",
      date: "2024-03-20",
      paid: true,
      approvedBy: "Sarah Wilson",
    },
    {
      id: 3,
      item: "Speaker fees",
      amount: 8000,
      category: "Talent",
      date: "2024-04-15",
      paid: false,
      approvedBy: "Pending",
    },
    {
      id: 4,
      item: "AV equipment rental",
      amount: 3500,
      category: "Equipment",
      date: "2024-05-01",
      paid: false,
      approvedBy: "Pending",
    },
    {
      id: 5,
      item: "Marketing materials",
      amount: 2500,
      category: "Marketing",
      date: "2024-04-10",
      paid: true,
      approvedBy: "Michael Brown",
    },
  ])

  const [budgetCategories, setBudgetCategories] = useState([
    { name: "Venue", allocated: 20000, spent: 15000 },
    { name: "Food & Beverage", allocated: 10000, spent: 5000 },
    { name: "Talent", allocated: 10000, spent: 8000 },
    { name: "Equipment", allocated: 5000, spent: 3500 },
    { name: "Marketing", allocated: 3000, spent: 2500 },
    { name: "Miscellaneous", allocated: 2000, spent: 0 },
  ])

  // Vendor Management
  const [vendors, setVendors] = useState([
    {
      id: 1,
      name: "Grand Hotel",
      service: "Venue",
      contact: "John Smith",
      phone: "555-123-4567",
      email: "john@grandhotel.com",
      contractStatus: "Signed",
      contractFile: "grand_hotel_contract.pdf",
      paymentSchedule: [
        { date: "2024-03-15", amount: 15000, status: "Paid" },
        { date: "2024-05-01", amount: 15000, status: "Pending" },
      ],
      notes: "Venue includes basic AV setup and WiFi",
    },
    {
      id: 2,
      name: "Gourmet Catering",
      service: "Food & Beverage",
      contact: "Mary Johnson",
      phone: "555-234-5678",
      email: "mary@gourmetcatering.com",
      contractStatus: "Signed",
      contractFile: "gourmet_catering_contract.pdf",
      paymentSchedule: [
        { date: "2024-03-20", amount: 5000, status: "Paid" },
        { date: "2024-05-10", amount: 5000, status: "Pending" },
      ],
      notes: "Special dietary requirements accommodated",
    },
    {
      id: 3,
      name: "Sound Solutions",
      service: "AV Equipment",
      contact: "David Brown",
      phone: "555-345-6789",
      email: "david@soundsolutions.com",
      contractStatus: "In Review",
      contractFile: "sound_solutions_contract.pdf",
      paymentSchedule: [{ date: "2024-05-01", amount: 3500, status: "Pending" }],
      notes: "Includes technician on-site for the duration of the event",
    },
    {
      id: 4,
      name: "Print Masters",
      service: "Printing",
      contact: "Sarah Wilson",
      phone: "555-456-7890",
      email: "sarah@printmasters.com",
      contractStatus: "Signed",
      contractFile: "print_masters_contract.pdf",
      paymentSchedule: [{ date: "2024-04-10", amount: 2500, status: "Paid" }],
      notes: "Rush delivery available if needed",
    },
  ])

  // Attendee Management
  const [attendees, setAttendees] = useState([
    {
      id: 1,
      name: "Alice Cooper",
      email: "alice@example.com",
      ticketType: "VIP",
      registered: "2024-03-10",
      status: "Confirmed",
      checkedIn: false,
    },
    {
      id: 2,
      name: "Bob Johnson",
      email: "bob@example.com",
      ticketType: "Standard",
      registered: "2024-03-12",
      status: "Confirmed",
      checkedIn: false,
    },
    {
      id: 3,
      name: "Carol Smith",
      email: "carol@example.com",
      ticketType: "Standard",
      registered: "2024-03-15",
      status: "Confirmed",
      checkedIn: false,
    },
    {
      id: 4,
      name: "Dave Williams",
      email: "dave@example.com",
      ticketType: "VIP",
      registered: "2024-03-18",
      status: "Confirmed",
      checkedIn: false,
    },
    {
      id: 5,
      name: "Eve Brown",
      email: "eve@example.com",
      ticketType: "Standard",
      registered: "2024-03-20",
      status: "Pending",
      checkedIn: false,
    },
  ])

  // Communication Management
  const [communications, setCommunications] = useState([
    {
      id: 1,
      type: "Email",
      subject: "Event Registration Confirmation",
      recipients: "All Attendees",
      sentDate: "2024-03-25",
      status: "Sent",
      openRate: "75%",
    },
    {
      id: 2,
      type: "Email",
      subject: "Speaker Announcement",
      recipients: "All Attendees",
      sentDate: "2024-04-05",
      status: "Sent",
      openRate: "68%",
    },
    {
      id: 3,
      type: "Email",
      subject: "Event Reminder - 1 Week to Go",
      recipients: "All Attendees",
      scheduledDate: "2024-05-08",
      status: "Scheduled",
      openRate: "-",
    },
    {
      id: 4,
      type: "Survey",
      subject: "Post-Event Feedback",
      recipients: "All Attendees",
      scheduledDate: "2024-05-18",
      status: "Scheduled",
      openRate: "-",
    },
  ])

  // Timeline and Milestones
  const [milestones, setMilestones] = useState([
    { id: 1, title: "Venue Booking", date: "2024-03-01", completed: true },
    { id: 2, title: "Registration Opens", date: "2024-03-10", completed: true },
    { id: 3, title: "Speaker Confirmation Deadline", date: "2024-04-15", completed: false },
    { id: 4, title: "Early Bird Registration Ends", date: "2024-04-30", completed: false },
    { id: 5, title: "Final Attendee Count Due", date: "2024-05-08", completed: false },
    { id: 6, title: "Event Day", date: "2024-05-15", completed: false },
    { id: 7, title: "Post-Event Survey", date: "2024-05-18", completed: false },
  ])

  // Task Templates
  const taskTemplates = [
    {
      id: 1,
      name: "Conference Template",
      taskCount: 24,
      categories: ["Venue", "Catering", "Speakers", "Marketing", "Technology"],
    },
    {
      id: 2,
      name: "Product Launch Template",
      taskCount: 18,
      categories: ["Venue", "Catering", "Press", "Marketing", "Product Demo"],
    },
    { id: 3, name: "Workshop Template", taskCount: 12, categories: ["Venue", "Catering", "Facilitators", "Materials"] },
  ]

  // Team Members
  const [teamMembers, setTeamMembers] = useState([
    { id: 1, name: "John Doe", role: "Event Manager", initials: "JD", taskCount: 3 },
    { id: 2, name: "Sarah Wilson", role: "Catering Coordinator", initials: "SW", taskCount: 2 },
    { id: 3, name: "Michael Brown", role: "Marketing Lead", initials: "MB", taskCount: 1 },
    { id: 4, name: "Emily Davis", role: "Tech Support", initials: "ED", taskCount: 1 },
  ])

  // Activity Log
  const [activityLog, setActivityLog] = useState([
    {
      id: 1,
      type: "task",
      message: "Task completed: Order promotional materials",
      timestamp: "Today, 10:30 AM",
      icon: CheckCircle,
    },
    {
      id: 2,
      type: "attendee",
      message: "New attendee registered: Eve Brown",
      timestamp: "Yesterday, 3:45 PM",
      icon: UserPlus,
    },
    {
      id: 3,
      type: "email",
      message: "Email campaign sent: Speaker Announcement",
      timestamp: "April 5, 2024",
      icon: Mail,
    },
    {
      id: 4,
      type: "payment",
      message: "Payment made: Marketing materials",
      timestamp: "April 10, 2024",
      icon: DollarSign,
    },
    { id: 5, type: "contract", message: "Contract signed: Print Masters", timestamp: "April 8, 2024", icon: FileCheck },
  ])

  // Form States
  const [newTask, setNewTask] = useState("")
  const [newTaskDueDate, setNewTaskDueDate] = useState("")
  const [newTaskAssignee, setNewTaskAssignee] = useState("")
  const [newTaskCategory, setNewTaskCategory] = useState("")
  const [selectedTemplate, setSelectedTemplate] = useState("")
  const [taskFilter, setTaskFilter] = useState("all")

  const [newExpense, setNewExpense] = useState({
    item: "",
    amount: "",
    category: "",
    date: "",
    paid: false,
  })

  const [newVendor, setNewVendor] = useState({
    name: "",
    service: "",
    contact: "",
    phone: "",
    email: "",
    contractStatus: "Not Started",
    notes: "",
  })

  const [newAttendee, setNewAttendee] = useState({
    name: "",
    email: "",
    ticketType: "",
    status: "Confirmed",
  })

  const [newMilestone, setNewMilestone] = useState({
    title: "",
    date: "",
  })

  const [newTeamMember, setNewTeamMember] = useState({
    name: "",
    role: "",
    email: "",
  })

  // Email Campaign State
  const [newCampaign, setNewCampaign] = useState({
    subject: "",
    content: "",
    recipients: "all",
    scheduledDate: "",
    scheduledTime: "",
  })

  // Notification Settings
  const [notificationSettings, setNotificationSettings] = useState({
    registrationConfirmation: true,
    oneWeekReminder: true,
    oneDayReminder: true,
    postEventThankYou: true,
  })

  // Survey State
  const [newSurvey, setNewSurvey] = useState({
    name: "",
    description: "",
    scheduledDate: "",
    questions: [],
  })

  // Check-in State
  const [checkInEmail, setCheckInEmail] = useState("")

  // Dialogs State
  const [editTaskDialogOpen, setEditTaskDialogOpen] = useState(false)
  const [currentTask, setCurrentTask] = useState(null)
  const [editVendorDialogOpen, setEditVendorDialogOpen] = useState(false)
  const [currentVendor, setCurrentVendor] = useState(null)
  const [editAttendeeDialogOpen, setEditAttendeeDialogOpen] = useState(false)
  const [currentAttendee, setCurrentAttendee] = useState(null)
  const [editMilestoneDialogOpen, setEditMilestoneDialogOpen] = useState(false)
  const [currentMilestone, setCurrentMilestone] = useState(null)
  const [viewContractDialogOpen, setViewContractDialogOpen] = useState(false)
  const [currentContract, setCurrentContract] = useState(null)

  // Attendee Experience State
  const [registrationSettings, setRegistrationSettings] = useState({
    enableRegistration: true,
    enableWaitlist: true,
    collectAttendeeInfo: true,
    sendConfirmationEmails: true,
  })

  const [ticketTiers, setTicketTiers] = useState([
    {
      id: 1,
      name: "VIP Pass",
      description: "Premium experience with exclusive access",
      price: 299,
      quantity: 50,
      startDate: "2024-04-01",
      endDate: "2024-05-10",
    },
    {
      id: 2,
      name: "Early Bird",
      description: "Discounted rate for early registrations",
      price: 149,
      quantity: 100,
      startDate: "2024-04-01",
      endDate: "2024-04-30",
    },
    {
      id: 3,
      name: "Standard",
      description: "Regular conference admission",
      price: 199,
      quantity: 150,
      startDate: "2024-04-01",
      endDate: "2024-05-14",
    },
  ])

  const [promoCodes, setPromoCodes] = useState([
    {
      id: 1,
      code: "TECHCONF25",
      description: "25% off all ticket types",
      discountType: "percentage",
      discountValue: 25,
      startDate: "2024-04-01",
      endDate: "2024-04-15",
      usageLimit: 50,
      usesRemaining: 50,
      applicableTickets: "all",
    },
    {
      id: 2,
      code: "SPEAKER50",
      description: "50% off for speakers and partners",
      discountType: "percentage",
      discountValue: 50,
      startDate: "2024-04-01",
      endDate: "2024-05-14",
      usageLimit: 25,
      usesRemaining: 25,
      applicableTickets: "all",
    },
  ])

  const [brandingSettings, setBrandingSettings] = useState({
    logo: null,
    banner: null,
    colorScheme: "primary",
    customDomain: "",
  })

  // Handlers
  const toggleTaskCompletion = (taskId) => {
    const updatedTasks = tasks.map((task) => (task.id === taskId ? { ...task, completed: !task.completed } : task))
    setTasks(updatedTasks)

    // Add to activity log if completed
    const task = tasks.find((t) => t.id === taskId)
    if (!task.completed) {
      addToActivityLog("task", `Task completed: ${task.title}`)
    }
  }

  const addTask = () => {
    if (newTask.trim() === "") return
    const newTaskObj = {
      id: tasks.length + 1,
      title: newTask,
      completed: false,
      dueDate: newTaskDueDate || new Date().toISOString().split("T")[0],
      assignedTo: newTaskAssignee || "Unassigned",
      category: newTaskCategory || "Uncategorized",
    }
    setTasks([...tasks, newTaskObj])
    setNewTask("")
    setNewTaskDueDate("")
    setNewTaskAssignee("")
    setNewTaskCategory("")

    addToActivityLog("task", `New task added: ${newTaskObj.title}`)
    toast({
      title: "Task Added",
      description: "Your new task has been added successfully.",
    })
  }

  const editTask = (task) => {
    setCurrentTask(task)
    setEditTaskDialogOpen(true)
  }

  const saveEditedTask = () => {
    const updatedTasks = tasks.map((task) => (task.id === currentTask.id ? currentTask : task))
    setTasks(updatedTasks)
    setEditTaskDialogOpen(false)

    toast({
      title: "Task Updated",
      description: "Your task has been updated successfully.",
    })
  }

  const deleteTask = (taskId) => {
    const taskToDelete = tasks.find((t) => t.id === taskId)
    setTasks(tasks.filter((task) => task.id !== taskId))

    toast({
      title: "Task Deleted",
      description: `Task "${taskToDelete.title}" has been deleted.`,
    })
  }

  const applyTaskTemplate = () => {
    // In a real app, this would load tasks from the selected template
    const template = taskTemplates.find((t) => t.name === selectedTemplate)
    if (!template) return

    // Simulate adding tasks from template
    const newTasks = [
      {
        id: tasks.length + 1,
        title: `${template.name} - Task 1`,
        completed: false,
        dueDate: new Date().toISOString().split("T")[0],
        assignedTo: "Unassigned",
        category: template.categories[0],
      },
      {
        id: tasks.length + 2,
        title: `${template.name} - Task 2`,
        completed: false,
        dueDate: new Date().toISOString().split("T")[0],
        assignedTo: "Unassigned",
        category: template.categories[1],
      },
      {
        id: tasks.length + 3,
        title: `${template.name} - Task 3`,
        completed: false,
        dueDate: new Date().toISOString().split("T")[0],
        assignedTo: "Unassigned",
        category: template.categories[2],
      },
    ]

    setTasks([...tasks, ...newTasks])
    setSelectedTemplate("")

    addToActivityLog("task", `Applied template: ${template.name}`)
    toast({
      title: "Template Applied",
      description: `${template.name} with ${newTasks.length} tasks has been applied.`,
    })
  }

  const addExpense = () => {
    if (!newExpense.item || !newExpense.amount || !newExpense.category || !newExpense.date) {
      toast({
        title: "Missing Information",
        description: "Please fill in all expense details.",
        variant: "destructive",
      })
      return
    }

    const newExpenseObj = {
      id: expenses.length + 1,
      item: newExpense.item,
      amount: Number.parseFloat(newExpense.amount),
      category: newExpense.category,
      date: newExpense.date,
      paid: newExpense.paid,
      approvedBy: newExpense.paid ? "John Doe" : "Pending",
    }

    setExpenses([...expenses, newExpenseObj])

    // Update budget category spent amount
    const updatedBudgetCategories = budgetCategories.map((category) => {
      if (category.name === newExpenseObj.category) {
        return {
          ...category,
          spent: category.spent + newExpenseObj.amount,
        }
      }
      return category
    })

    setBudgetCategories(updatedBudgetCategories)

    setNewExpense({
      item: "",
      amount: "",
      category: "",
      date: "",
      paid: false,
    })

    addToActivityLog("payment", `New expense added: ${newExpenseObj.item}`)
    toast({
      title: "Expense Added",
      description: "Your new expense has been added successfully.",
    })
  }

  const toggleExpensePaid = (expenseId) => {
    const updatedExpenses = expenses.map((expense) => {
      if (expense.id === expenseId) {
        return {
          ...expense,
          paid: !expense.paid,
          approvedBy: !expense.paid ? "John Doe" : "Pending",
        }
      }
      return expense
    })

    setExpenses(updatedExpenses)

    const expense = expenses.find((e) => e.id === expenseId)
    if (!expense.paid) {
      addToActivityLog("payment", `Payment made: ${expense.item}`)
    }

    toast({
      title: expense.paid ? "Payment Marked as Pending" : "Payment Marked as Paid",
      description: `${expense.item} has been updated.`,
    })
  }

  const addVendor = () => {
    if (!newVendor.name || !newVendor.service || !newVendor.contact) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required vendor details.",
        variant: "destructive",
      })
      return
    }

    const newVendorObj = {
      id: vendors.length + 1,
      name: newVendor.name,
      service: newVendor.service,
      contact: newVendor.contact,
      phone: newVendor.phone,
      email: newVendor.email,
      contractStatus: newVendor.contractStatus,
      contractFile: "",
      paymentSchedule: [],
      notes: newVendor.notes,
    }

    setVendors([...vendors, newVendorObj])

    setNewVendor({
      name: "",
      service: "",
      contact: "",
      phone: "",
      email: "",
      contractStatus: "Not Started",
      notes: "",
    })

    addToActivityLog("vendor", `New vendor added: ${newVendorObj.name}`)
    toast({
      title: "Vendor Added",
      description: "Your new vendor has been added successfully.",
    })
  }

  const editVendor = (vendor) => {
    setCurrentVendor(vendor)
    setEditVendorDialogOpen(true)
  }

  const saveEditedVendor = () => {
    const updatedVendors = vendors.map((vendor) => (vendor.id === currentVendor.id ? currentVendor : vendor))
    setVendors(updatedVendors)
    setEditVendorDialogOpen(false)

    toast({
      title: "Vendor Updated",
      description: "Vendor information has been updated successfully.",
    })
  }

  const removeVendor = (vendorId) => {
    const vendorToRemove = vendors.find((v) => v.id === vendorId)
    setVendors(vendors.filter((vendor) => vendor.id !== vendorId))

    toast({
      title: "Vendor Removed",
      description: `${vendorToRemove.name} has been removed from your vendors.`,
    })
  }

  const viewContract = (vendor) => {
    setCurrentContract(vendor)
    setViewContractDialogOpen(true)
  }

  const updateContractStatus = (vendorId, status) => {
    const updatedVendors = vendors.map((vendor) => {
      if (vendor.id === vendorId) {
        return {
          ...vendor,
          contractStatus: status,
        }
      }
      return vendor
    })

    setVendors(updatedVendors)

    const vendor = vendors.find((v) => v.id === vendorId)
    if (status === "Signed") {
      addToActivityLog("contract", `Contract signed: ${vendor.name}`)
    }

    toast({
      title: "Contract Status Updated",
      description: `${vendor.name} contract is now ${status}.`,
    })
  }

  const addAttendee = () => {
    if (!newAttendee.name || !newAttendee.email || !newAttendee.ticketType) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required attendee details.",
        variant: "destructive",
      })
      return
    }

    const newAttendeeObj = {
      id: attendees.length + 1,
      name: newAttendee.name,
      email: newAttendee.email,
      ticketType: newAttendee.ticketType,
      registered: new Date().toISOString().split("T")[0],
      status: newAttendee.status,
      checkedIn: false,
    }

    setAttendees([...attendees, newAttendeeObj])

    setNewAttendee({
      name: "",
      email: "",
      ticketType: "",
      status: "Confirmed",
    })

    addToActivityLog("attendee", `New attendee registered: ${newAttendeeObj.name}`)
    toast({
      title: "Attendee Added",
      description: "New attendee has been added successfully.",
    })
  }

  const editAttendee = (attendee) => {
    setCurrentAttendee(attendee)
    setEditAttendeeDialogOpen(true)
  }

  const saveEditedAttendee = () => {
    const updatedAttendees = attendees.map((attendee) =>
      attendee.id === currentAttendee.id ? currentAttendee : attendee,
    )
    setAttendees(updatedAttendees)
    setEditAttendeeDialogOpen(false)

    toast({
      title: "Attendee Updated",
      description: "Attendee information has been updated successfully.",
    })
  }

  const removeAttendee = (attendeeId) => {
    const attendeeToRemove = attendees.find((a) => a.id === attendeeId)
    setAttendees(attendees.filter((attendee) => attendee.id !== attendeeId))

    toast({
      title: "Attendee Removed",
      description: `${attendeeToRemove.name} has been removed from your attendees.`,
    })
  }

  const checkInAttendee = (email) => {
    const attendeeToCheckIn = attendees.find((a) => a.email.toLowerCase() === email.toLowerCase())

    if (!attendeeToCheckIn) {
      toast({
        title: "Attendee Not Found",
        description: "No attendee found with that email address.",
        variant: "destructive",
      })
      return
    }

    const updatedAttendees = attendees.map((attendee) => {
      if (attendee.id === attendeeToCheckIn.id) {
        return {
          ...attendee,
          checkedIn: true,
        }
      }
      return attendee
    })

    setAttendees(updatedAttendees)
    setCheckInEmail("")

    toast({
      title: "Attendee Checked In",
      description: `${attendeeToCheckIn.name} has been checked in successfully.`,
    })
  }

  const addMilestone = () => {
    if (!newMilestone.title || !newMilestone.date) {
      toast({
        title: "Missing Information",
        description: "Please provide both title and date for the milestone.",
        variant: "destructive",
      })
      return
    }

    const newMilestoneObj = {
      id: milestones.length + 1,
      title: newMilestone.title,
      date: newMilestone.date,
      completed: false,
    }

    setMilestones([...milestones, newMilestoneObj])

    setNewMilestone({
      title: "",
      date: "",
    })

    toast({
      title: "Milestone Added",
      description: "New milestone has been added to your timeline.",
    })
  }

  const editMilestone = (milestone) => {
    setCurrentMilestone(milestone)
    setEditMilestoneDialogOpen(true)
  }

  const saveEditedMilestone = () => {
    const updatedMilestones = milestones.map((milestone) =>
      milestone.id === currentMilestone.id ? currentMilestone : milestone,
    )
    setMilestones(updatedMilestones)
    setEditMilestoneDialogOpen(false)

    toast({
      title: "Milestone Updated",
      description: "Milestone has been updated successfully.",
    })
  }

  const toggleMilestoneCompletion = (milestoneId) => {
    const updatedMilestones = milestones.map((milestone) => {
      if (milestone.id === milestoneId) {
        return {
          ...milestone,
          completed: !milestone.completed,
        }
      }
      return milestone
    })

    setMilestones(updatedMilestones)

    const milestone = milestones.find((m) => m.id === milestoneId)
    if (!milestone.completed) {
      addToActivityLog("milestone", `Milestone completed: ${milestone.title}`)
    }

    toast({
      title: milestone.completed ? "Milestone Marked as Incomplete" : "Milestone Completed",
      description: `${milestone.title} has been updated.`,
    })
  }

  const addTeamMember = () => {
    if (!newTeamMember.name || !newTeamMember.role) {
      toast({
        title: "Missing Information",
        description: "Please provide both name and role for the team member.",
        variant: "destructive",
      })
      return
    }

    // Generate initials from name
    const nameParts = newTeamMember.name.split(" ")
    const initials =
      nameParts.length > 1 ? `${nameParts[0][0]}${nameParts[1][0]}` : `${nameParts[0][0]}${nameParts[0][1] || ""}`

    const newTeamMemberObj = {
      id: teamMembers.length + 1,
      name: newTeamMember.name,
      role: newTeamMember.role,
      initials: initials.toUpperCase(),
      taskCount: 0,
    }

    setTeamMembers([...teamMembers, newTeamMemberObj])

    setNewTeamMember({
      name: "",
      role: "",
      email: "",
    })

    toast({
      title: "Team Member Added",
      description: `${newTeamMemberObj.name} has been added to your team.`,
    })
  }

  const createEmailCampaign = () => {
    if (!newCampaign.subject || !newCampaign.content || !newCampaign.scheduledDate) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required email campaign details.",
        variant: "destructive",
      })
      return
    }

    const newCampaignObj = {
      id: communications.length + 1,
      type: "Email",
      subject: newCampaign.subject,
      recipients: newCampaign.recipients === "all" ? "All Attendees" : "Selected Attendees",
      scheduledDate: newCampaign.scheduledDate,
      status: "Scheduled",
      openRate: "-",
    }

    setCommunications([...communications, newCampaignObj])

    setNewCampaign({
      subject: "",
      content: "",
      recipients: "all",
      scheduledDate: "",
      scheduledTime: "",
    })

    addToActivityLog("email", `Email campaign scheduled: ${newCampaignObj.subject}`)
    toast({
      title: "Email Campaign Created",
      description: "Your email campaign has been scheduled successfully.",
    })
  }

  const sendNotification = (type) => {
    toast({
      title: "Notification Sent",
      description: `${type} notification has been sent to attendees.`,
    })

    addToActivityLog("notification", `Notification sent: ${type}`)
  }

  const createSurvey = () => {
    if (!newSurvey.name || !newSurvey.scheduledDate) {
      toast({
        title: "Missing Information",
        description: "Please provide both name and scheduled date for the survey.",
        variant: "destructive",
      })
      return
    }

    const newSurveyObj = {
      id: communications.length + 1,
      type: "Survey",
      subject: newSurvey.name,
      recipients: "All Attendees",
      scheduledDate: newSurvey.scheduledDate,
      status: "Scheduled",
      openRate: "-",
    }

    setCommunications([...communications, newSurveyObj])

    setNewSurvey({
      name: "",
      description: "",
      scheduledDate: "",
      questions: [],
    })

    toast({
      title: "Survey Created",
      description: "Your survey has been scheduled successfully.",
    })
  }

  const toggleNotificationSetting = (setting) => {
    setNotificationSettings({
      ...notificationSettings,
      [setting]: !notificationSettings[setting],
    })

    toast({
      title: "Notification Settings Updated",
      description: `${setting} notifications have been ${notificationSettings[setting] ? "disabled" : "enabled"}.`,
    })
  }

  const addToActivityLog = (type, message) => {
    const iconMap = {
      task: CheckCircle,
      attendee: UserPlus,
      email: Mail,
      payment: DollarSign,
      contract: FileCheck,
      vendor: Briefcase,
      milestone: Calendar,
      notification: Bell,
    }

    const newActivity = {
      id: activityLog.length + 1,
      type,
      message,
      timestamp: new Date().toLocaleString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      }),
      icon: iconMap[type] || CheckCircle,
    }

    setActivityLog([newActivity, ...activityLog])
  }

  // Filtered tasks based on selected filter
  const filteredTasks = tasks.filter((task) => {
    if (taskFilter === "all") return true
    if (taskFilter === "completed") return task.completed
    if (taskFilter === "pending") return !task.completed
    if (taskFilter === "overdue") {
      const dueDate = new Date(task.dueDate)
      const today = new Date()
      return !task.completed && dueDate < today
    }
    return true
  })

  // Calculations
  const completedTasksCount = tasks.filter((task) => task.completed).length
  const totalBudget = budgetCategories.reduce((total, category) => total + category.allocated, 0)
  const spentBudget = budgetCategories.reduce((total, category) => total + category.spent, 0)
  const paidBudget = expenses.filter((expense) => expense.paid).reduce((total, expense) => total + expense.amount, 0)
  const checkedInCount = attendees.filter((attendee) => attendee.checkedIn).length

  return (
    <main className="flex-1 container py-6">
      <div className="flex items-center gap-2 mb-6">
        <Link href="/dashboard">
          <Button variant="outline" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <h1 className="text-3xl font-bold">Annual Tech Conference</h1>
        <Button variant="outline" size="icon" className="ml-auto">
          <Edit className="h-4 w-4" />
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Event Date</CardTitle>
            <CalendarDays className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">May 15-17, 2024</div>
            <p className="text-xs text-muted-foreground">3 days remaining</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Registered Attendees</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{attendees.length} / 200</div>
            <p className="text-xs text-muted-foreground">{Math.round((attendees.length / 200) * 100)}% of capacity</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Budget</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              ${spentBudget.toLocaleString()} / ${totalBudget.toLocaleString()}
            </div>
            <Progress value={(spentBudget / totalBudget) * 100} className="h-2 mt-2" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Task Progress</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {completedTasksCount} / {tasks.length}
            </div>
            <Progress value={(completedTasksCount / tasks.length) * 100} className="h-2 mt-2" />
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="checklist">
        <TabsList className="mb-4">
          <TabsTrigger value="checklist">Planning</TabsTrigger>
          <TabsTrigger value="timeline">Timeline</TabsTrigger>
          <TabsTrigger value="budget">Budget</TabsTrigger>
          <TabsTrigger value="vendors">Vendors</TabsTrigger>
          <TabsTrigger value="attendees">Attendees</TabsTrigger>
          <TabsTrigger value="attendee-experience">Attendee Experience</TabsTrigger>
          <TabsTrigger value="communications">Communications</TabsTrigger>
        </TabsList>

        {/* PLANNING TAB */}
        <TabsContent value="checklist">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="md:col-span-2">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle>Event Checklist</CardTitle>
                    <CardDescription>Track your event planning progress</CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" size="sm">
                          <FileText className="h-4 w-4 mr-2" />
                          Templates
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Apply Task Template</DialogTitle>
                          <DialogDescription>
                            Choose a template to quickly add common tasks to your event.
                          </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                          <div className="grid gap-2">
                            <Label htmlFor="template">Select Template</Label>
                            <Select value={selectedTemplate} onValueChange={setSelectedTemplate}>
                              <SelectTrigger id="template">
                                <SelectValue placeholder="Choose a template" />
                              </SelectTrigger>
                              <SelectContent>
                                {taskTemplates.map((template) => (
                                  <SelectItem key={template.id} value={template.name}>
                                    {template.name} ({template.taskCount} tasks)
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="grid gap-2">
                            <Label>Template Details</Label>
                            {selectedTemplate && (
                              <div className="text-sm p-3 border rounded-md bg-muted">
                                <p className="font-medium">{selectedTemplate}</p>
                                <p className="text-muted-foreground">
                                  {taskTemplates.find((t) => t.name === selectedTemplate)?.taskCount} tasks across{" "}
                                  {taskTemplates.find((t) => t.name === selectedTemplate)?.categories.length} categories
                                </p>
                                <div className="mt-2 flex flex-wrap gap-1">
                                  {taskTemplates
                                    .find((t) => t.name === selectedTemplate)
                                    ?.categories.map((category, i) => (
                                      <span key={i} className="px-2 py-0.5 bg-primary/10 rounded-full text-xs">
                                        {category}
                                      </span>
                                    ))}
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                        <DialogFooter>
                          <Button onClick={applyTaskTemplate} disabled={!selectedTemplate}>
                            Apply Template
                          </Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                    <Select value={taskFilter} onValueChange={setTaskFilter}>
                      <SelectTrigger className="w-[150px]">
                        <SelectValue placeholder="Filter tasks" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Tasks</SelectItem>
                        <SelectItem value="completed">Completed</SelectItem>
                        <SelectItem value="pending">Pending</SelectItem>
                        <SelectItem value="overdue">Overdue</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {filteredTasks.map((task) => (
                      <div key={task.id} className="flex items-start space-x-2 p-3 border rounded-md">
                        <Checkbox
                          id={`task-${task.id}`}
                          checked={task.completed}
                          onCheckedChange={() => toggleTaskCompletion(task.id)}
                          className="mt-1"
                        />
                        <div className="flex-1">
                          <label
                            htmlFor={`task-${task.id}`}
                            className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${
                              task.completed ? "line-through text-muted-foreground" : ""
                            }`}
                          >
                            {task.title}
                          </label>
                          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1 text-xs text-muted-foreground">
                            <div className="flex items-center">
                              <Calendar className="h-3 w-3 mr-1" />
                              Due: {task.dueDate}
                            </div>
                            <div className="flex items-center">
                              <UserPlus className="h-3 w-3 mr-1" />
                              Assigned to: {task.assignedTo}
                            </div>
                            <span className="px-2 py-0.5 bg-primary/10 rounded-full">{task.category}</span>
                          </div>
                        </div>
                        <div className="flex gap-1">
                          <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => editTask(task)}>
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-destructive"
                            onClick={() => deleteTask(task.id)}
                          >
                            <Trash className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}

                    <div className="border-t pt-4 mt-4">
                      <h4 className="text-sm font-medium mb-2">Add New Task</h4>
                      <div className="grid gap-4">
                        <div className="grid gap-2">
                          <Label htmlFor="new-task">Task Description</Label>
                          <Input
                            id="new-task"
                            placeholder="Enter task description"
                            value={newTask}
                            onChange={(e) => setNewTask(e.target.value)}
                          />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="grid gap-2">
                            <Label htmlFor="due-date">Due Date</Label>
                            <Input
                              id="due-date"
                              type="date"
                              value={newTaskDueDate}
                              onChange={(e) => setNewTaskDueDate(e.target.value)}
                            />
                          </div>
                          <div className="grid gap-2">
                            <Label htmlFor="assignee">Assign To</Label>
                            <Select value={newTaskAssignee} onValueChange={setNewTaskAssignee}>
                              <SelectTrigger id="assignee">
                                <SelectValue placeholder="Select team member" />
                              </SelectTrigger>
                              <SelectContent>
                                {teamMembers.map((member) => (
                                  <SelectItem key={member.id} value={member.name}>
                                    {member.name}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="grid gap-2">
                            <Label htmlFor="category">Category</Label>
                            <Select value={newTaskCategory} onValueChange={setNewTaskCategory}>
                              <SelectTrigger id="category">
                                <SelectValue placeholder="Select category" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="Venue">Venue</SelectItem>
                                <SelectItem value="Food & Beverage">Food & Beverage</SelectItem>
                                <SelectItem value="Speakers">Speakers</SelectItem>
                                <SelectItem value="Marketing">Marketing</SelectItem>
                                <SelectItem value="Technology">Technology</SelectItem>
                                <SelectItem value="Logistics">Logistics</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        <Button onClick={addTask}>Add Task</Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle>Team Collaboration</CardTitle>
                  <CardDescription>Manage your event team</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {teamMembers.map((member) => (
                      <div key={member.id} className="flex items-center gap-3 p-3 border rounded-md">
                        <div className="h-8 w-8 rounded-full bg-primary text-primary-foreground grid place-items-center text-sm font-medium">
                          {member.initials}
                        </div>
                        <div>
                          <p className="font-medium">{member.name}</p>
                          <p className="text-xs text-muted-foreground">{member.role}</p>
                        </div>
                        <div className="ml-auto">
                          <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                            {member.taskCount} tasks
                          </span>
                        </div>
                      </div>
                    ))}

                    <Dialog>
                      <DialogTrigger asChild>
                        <Button className="w-full">
                          <UserPlus className="h-4 w-4 mr-2" />
                          Add Team Member
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Add Team Member</DialogTitle>
                          <DialogDescription>Add a new member to your event planning team.</DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                          <div className="grid gap-2">
                            <Label htmlFor="member-name">Full Name</Label>
                            <Input
                              id="member-name"
                              placeholder="Enter full name"
                              value={newTeamMember.name}
                              onChange={(e) => setNewTeamMember({ ...newTeamMember, name: e.target.value })}
                            />
                          </div>
                          <div className="grid gap-2">
                            <Label htmlFor="member-role">Role</Label>
                            <Input
                              id="member-role"
                              placeholder="Enter role (e.g., Marketing Lead)"
                              value={newTeamMember.role}
                              onChange={(e) => setNewTeamMember({ ...newTeamMember, role: e.target.value })}
                            />
                          </div>
                          <div className="grid gap-2">
                            <Label htmlFor="member-email">Email (Optional)</Label>
                            <Input
                              id="member-email"
                              placeholder="Enter email address"
                              value={newTeamMember.email}
                              onChange={(e) => setNewTeamMember({ ...newTeamMember, email: e.target.value })}
                            />
                          </div>
                        </div>
                        <DialogFooter>
                          <Button onClick={addTeamMember}>Add Team Member</Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Activity Log</CardTitle>
                  <CardDescription>Recent updates</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {activityLog.slice(0, 5).map((activity) => (
                      <div key={activity.id} className="flex gap-3">
                        <div className="rounded-full bg-primary/10 p-2 h-8 w-8 flex items-center justify-center">
                          <activity.icon className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm">{activity.message}</p>
                          <p className="text-xs text-muted-foreground">{activity.timestamp}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        {/* TIMELINE TAB */}
        <TabsContent value="timeline">
          <Card>
            <CardHeader>
              <CardTitle>Event Timeline</CardTitle>
              <CardDescription>Key milestones and deadlines</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-muted"></div>
                <div className="space-y-8 relative ml-9">
                  {milestones.map((milestone) => (
                    <div key={milestone.id} className="relative">
                      <div
                        className={`absolute -left-9 top-0 flex items-center justify-center w-6 h-6 rounded-full border cursor-pointer ${
                          milestone.completed ? "bg-primary border-primary" : "bg-background border-muted"
                        }`}
                        onClick={() => toggleMilestoneCompletion(milestone.id)}
                      >
                        {milestone.completed ? (
                          <CheckCircle className="h-3 w-3 text-primary-foreground" />
                        ) : (
                          <span className="h-2 w-2 rounded-full bg-muted-foreground"></span>
                        )}
                      </div>
                      <div className="flex flex-col md:flex-row md:items-center justify-between p-4 border rounded-md">
                        <div>
                          <h3 className="font-medium">{milestone.title}</h3>
                          <p className="text-sm text-muted-foreground">
                            {new Date(milestone.date).toLocaleDateString("en-US", {
                              weekday: "long",
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })}
                          </p>
                        </div>
                        <div className="flex items-center mt-2 md:mt-0">
                          <span
                            className={`px-2 py-1 rounded-full text-xs ${
                              milestone.completed ? "bg-green-100 text-green-800" : "bg-amber-100 text-amber-800"
                            }`}
                          >
                            {milestone.completed ? "Completed" : "Upcoming"}
                          </span>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="ml-2 h-8 w-8"
                            onClick={() => editMilestone(milestone)}
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <Dialog>
                <DialogTrigger asChild>
                  <Button className="mt-6">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Milestone
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Add Milestone</DialogTitle>
                    <DialogDescription>Add a new milestone to your event timeline.</DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid gap-2">
                      <Label htmlFor="milestone-title">Milestone Title</Label>
                      <Input
                        id="milestone-title"
                        placeholder="Enter milestone title"
                        value={newMilestone.title}
                        onChange={(e) => setNewMilestone({ ...newMilestone, title: e.target.value })}
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="milestone-date">Date</Label>
                      <Input
                        id="milestone-date"
                        type="date"
                        value={newMilestone.date}
                        onChange={(e) => setNewMilestone({ ...newMilestone, date: e.target.value })}
                      />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button onClick={addMilestone}>Add Milestone</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>
        </TabsContent>

        {/* BUDGET TAB */}
        <TabsContent value="budget">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="md:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Budget Management</CardTitle>
                  <CardDescription>Track expenses and manage your event budget</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="p-4 border rounded-md">
                        <h3 className="text-sm font-medium text-muted-foreground">Total Budget</h3>
                        <p className="text-2xl font-bold">${totalBudget.toLocaleString()}</p>
                      </div>
                      <div className="p-4 border rounded-md">
                        <h3 className="text-sm font-medium text-muted-foreground">Spent</h3>
                        <p className="text-2xl font-bold">${spentBudget.toLocaleString()}</p>
                        <p className="text-xs text-muted-foreground">
                          {Math.round((spentBudget / totalBudget) * 100)}% of budget
                        </p>
                      </div>
                      <div className="p-4 border rounded-md">
                        <h3 className="text-sm font-medium text-muted-foreground">Remaining</h3>
                        <p className="text-2xl font-bold">${(totalBudget - spentBudget).toLocaleString()}</p>
                        <p className="text-xs text-muted-foreground">
                          {Math.round(((totalBudget - spentBudget) / totalBudget) * 100)}% of budget
                        </p>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium mb-3">Budget Allocation</h3>
                      <div className="space-y-3">
                        {budgetCategories.map((category, index) => (
                          <div key={index} className="space-y-1">
                            <div className="flex justify-between text-sm">
                              <span>{category.name}</span>
                              <span>
                                ${category.spent.toLocaleString()} / ${category.allocated.toLocaleString()}
                              </span>
                            </div>
                            <Progress value={(category.spent / category.allocated) * 100} className="h-2" />
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-lg font-medium">Expense Tracking</h3>
                        <Button variant="outline" size="sm">
                          <Download className="h-4 w-4 mr-2" />
                          Export
                        </Button>
                      </div>
                      <div className="border rounded-md">
                        <div className="grid grid-cols-6 gap-4 p-3 border-b font-medium text-sm">
                          <div className="col-span-2">Item</div>
                          <div>Category</div>
                          <div>Amount</div>
                          <div>Date</div>
                          <div>Status</div>
                        </div>
                        {expenses.map((expense) => (
                          <div key={expense.id} className="grid grid-cols-6 gap-4 p-3 border-b text-sm">
                            <div className="col-span-2">{expense.item}</div>
                            <div>{expense.category}</div>
                            <div>${expense.amount.toLocaleString()}</div>
                            <div>{expense.date}</div>
                            <div>
                              <button
                                className={`px-2 py-1 rounded-full text-xs cursor-pointer ${
                                  expense.paid ? "bg-green-100 text-green-800" : "bg-amber-100 text-amber-800"
                                }`}
                                onClick={() => toggleExpensePaid(expense.id)}
                              >
                                {expense.paid ? "Paid" : "Pending"}
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>

                      <Dialog>
                        <DialogTrigger asChild>
                          <Button className="mt-4">
                            <Plus className="h-4 w-4 mr-2" />
                            Add Expense
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Add Expense</DialogTitle>
                            <DialogDescription>Add a new expense to your event budget.</DialogDescription>
                          </DialogHeader>
                          <div className="grid gap-4 py-4">
                            <div className="grid gap-2">
                              <Label htmlFor="expense-item">Expense Item</Label>
                              <Input
                                id="expense-item"
                                placeholder="Enter expense description"
                                value={newExpense.item}
                                onChange={(e) => setNewExpense({ ...newExpense, item: e.target.value })}
                              />
                            </div>
                            <div className="grid gap-2">
                              <Label htmlFor="expense-amount">Amount ($)</Label>
                              <Input
                                id="expense-amount"
                                type="number"
                                placeholder="Enter amount"
                                value={newExpense.amount}
                                onChange={(e) => setNewExpense({ ...newExpense, amount: e.target.value })}
                              />
                            </div>
                            <div className="grid gap-2">
                              <Label htmlFor="expense-category">Category</Label>
                              <Select
                                value={newExpense.category}
                                onValueChange={(value) => setNewExpense({ ...newExpense, category: value })}
                              >
                                <SelectTrigger id="expense-category">
                                  <SelectValue placeholder="Select category" />
                                </SelectTrigger>
                                <SelectContent>
                                  {budgetCategories.map((category) => (
                                    <SelectItem key={category.name} value={category.name}>
                                      {category.name}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </div>
                            <div className="grid gap-2">
                              <Label htmlFor="expense-date">Date</Label>
                              <Input
                                id="expense-date"
                                type="date"
                                value={newExpense.date}
                                onChange={(e) => setNewExpense({ ...newExpense, date: e.target.value })}
                              />
                            </div>
                            <div className="flex items-center gap-2">
                              <Checkbox
                                id="expense-paid"
                                checked={newExpense.paid}
                                onCheckedChange={(checked) => setNewExpense({ ...newExpense, paid: checked })}
                              />
                              <Label htmlFor="expense-paid">Mark as paid</Label>
                            </div>
                          </div>
                          <DialogFooter>
                            <Button onClick={addExpense}>Add Expense</Button>
                          </DialogFooter>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle>Financial Reporting</CardTitle>
                  <CardDescription>Budget analysis and ROI</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="p-4 border rounded-md">
                      <h3 className="text-sm font-medium mb-2">Budget Distribution</h3>
                      <div className="h-40 flex items-end justify-between gap-2">
                        {budgetCategories.map((category, index) => (
                          <div key={index} className="flex flex-col items-center">
                            <div
                              className="w-8 bg-primary/80 rounded-t-sm"
                              style={{
                                height: `${(category.allocated / totalBudget) * 100}%`,
                                opacity: 0.5 + ((index + 1) / budgetCategories.length) * 0.5,
                              }}
                            ></div>
                            <p className="text-xs mt-1 text-muted-foreground">{category.name.split(" ")[0]}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="p-4 border rounded-md">
                      <h3 className="text-sm font-medium mb-2">Expense Approval Workflow</h3>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center p-2 bg-muted rounded-md">
                          <span className="text-sm">Pending Approval</span>
                          <span className="text-sm font-medium">2</span>
                        </div>
                        <div className="flex justify-between items-center p-2 bg-muted rounded-md">
                          <span className="text-sm">Approved</span>
                          <span className="text-sm font-medium">3</span>
                        </div>
                        <div className="flex justify-between items-center p-2 bg-muted rounded-md">
                          <span className="text-sm">Rejected</span>
                          <span className="text-sm font-medium">0</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 border rounded-md">
                      <h3 className="text-sm font-medium mb-2">ROI Projection</h3>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm">Total Cost</span>
                          <span className="text-sm font-medium">${totalBudget.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm">Projected Revenue</span>
                          <span className="text-sm font-medium">$75,000</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm">Projected ROI</span>
                          <span className="text-sm font-medium">50%</span>
                        </div>
                      </div>
                    </div>

                    <Button className="w-full">
                      <BarChart className="h-4 w-4 mr-2" />
                      View Detailed Reports
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        {/* VENDORS TAB */}
        <TabsContent value="vendors">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="md:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Vendor Management</CardTitle>
                  <CardDescription>Manage vendors and track contracts</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {vendors.map((vendor) => (
                      <div key={vendor.id} className="border rounded-md overflow-hidden">
                        <div className="flex items-start justify-between p-4 border-b">
                          <div>
                            <h3 className="font-medium">{vendor.name}</h3>
                            <p className="text-sm text-muted-foreground">{vendor.service}</p>
                          </div>
                          <div className="flex gap-2">
                            <span
                              className={`px-2 py-1 rounded-full text-xs ${
                                vendor.contractStatus === "Signed"
                                  ? "bg-green-100 text-green-800"
                                  : vendor.contractStatus === "In Review"
                                    ? "bg-amber-100 text-amber-800"
                                    : "bg-red-100 text-red-800"
                              }`}
                            >
                              {vendor.contractStatus}
                            </span>
                            <Button variant="outline" size="sm" onClick={() => viewContract(vendor)}>
                              <FileText className="h-4 w-4 mr-2" />
                              Contract
                            </Button>
                          </div>
                        </div>
                        <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="text-sm font-medium mb-2">Contact Information</h4>
                            <div className="space-y-1 text-sm">
                              <p>Contact: {vendor.contact}</p>
                              <p>Phone: {vendor.phone}</p>
                              <p>Email: {vendor.email}</p>
                            </div>
                          </div>
                          <div>
                            <h4 className="text-sm font-medium mb-2">Payment Schedule</h4>
                            <div className="space-y-2">
                              {vendor.paymentSchedule.map((payment, index) => (
                                <div key={index} className="flex justify-between text-sm">
                                  <span>{payment.date}</span>
                                  <div className="flex items-center gap-2">
                                    <span
                                      className={`px-2 py-0.5 rounded-full text-xs ${
                                        payment.status === "Paid"
                                          ? "bg-green-100 text-green-800"
                                          : "bg-amber-100 text-amber-800"
                                      }`}
                                    >
                                      {payment.status}
                                    </span>
                                    <span>${payment.amount.toLocaleString()}</span>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                        <div className="p-4 border-t bg-muted/50">
                          <h4 className="text-sm font-medium mb-1">Notes</h4>
                          <p className="text-sm">{vendor.notes}</p>
                        </div>
                        <div className="p-4 border-t flex justify-end gap-2">
                          <Button variant="outline" size="sm" onClick={() => editVendor(vendor)}>
                            <Edit className="h-4 w-4 mr-2" />
                            Edit
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="text-destructive"
                            onClick={() => removeVendor(vendor.id)}
                          >
                            <Trash className="h-4 w-4 mr-2" />
                            Remove
                          </Button>
                        </div>
                      </div>
                    ))}

                    <Dialog>
                      <DialogTrigger asChild>
                        <Button className="mt-4">
                          <Plus className="h-4 w-4 mr-2" />
                          Add Vendor
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Add Vendor</DialogTitle>
                          <DialogDescription>Add a new vendor to your event.</DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                          <div className="grid gap-2">
                            <Label htmlFor="vendor-name">Vendor Name</Label>
                            <Input
                              id="vendor-name"
                              placeholder="Enter vendor name"
                              value={newVendor.name}
                              onChange={(e) => setNewVendor({ ...newVendor, name: e.target.value })}
                            />
                          </div>
                          <div className="grid gap-2">
                            <Label htmlFor="vendor-service">Service Type</Label>
                            <Select
                              value={newVendor.service}
                              onValueChange={(value) => setNewVendor({ ...newVendor, service: value })}
                            >
                              <SelectTrigger id="vendor-service">
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
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="grid gap-2">
                            <Label htmlFor="vendor-contact">Contact Person</Label>
                            <Input
                              id="vendor-contact"
                              placeholder="Enter contact name"
                              value={newVendor.contact}
                              onChange={(e) => setNewVendor({ ...newVendor, contact: e.target.value })}
                            />
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="grid gap-2">
                              <Label htmlFor="vendor-phone">Phone Number</Label>
                              <Input
                                id="vendor-phone"
                                placeholder="Enter phone number"
                                value={newVendor.phone}
                                onChange={(e) => setNewVendor({ ...newVendor, phone: e.target.value })}
                              />
                            </div>
                            <div className="grid gap-2">
                              <Label htmlFor="vendor-email">Email Address</Label>
                              <Input
                                id="vendor-email"
                                placeholder="Enter email address"
                                value={newVendor.email}
                                onChange={(e) => setNewVendor({ ...newVendor, email: e.target.value })}
                              />
                            </div>
                          </div>
                          <div className="grid gap-2">
                            <Label htmlFor="vendor-contract">Contract Status</Label>
                            <Select
                              value={newVendor.contractStatus}
                              onValueChange={(value) => setNewVendor({ ...newVendor, contractStatus: value })}
                            >
                              <SelectTrigger id="vendor-contract">
                                <SelectValue placeholder="Select contract status" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="Not Started">Not Started</SelectItem>
                                <SelectItem value="In Review">In Review</SelectItem>
                                <SelectItem value="Signed">Signed</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="grid gap-2">
                            <Label htmlFor="vendor-notes">Notes</Label>
                            <Textarea
                              id="vendor-notes"
                              placeholder="Enter any additional notes"
                              value={newVendor.notes}
                              onChange={(e) => setNewVendor({ ...newVendor, notes: e.target.value })}
                            />
                          </div>
                        </div>
                        <DialogFooter>
                          <Button onClick={addVendor}>Add Vendor</Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle>Vendor Comparison</CardTitle>
                  <CardDescription>Compare and select vendors</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 border rounded-md">
                      <h3 className="text-sm font-medium mb-2">AV Equipment Providers</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Sound Solutions</span>
                          <div className="flex items-center">
                            <span className="text-sm font-medium mr-2">$3,500</span>
                            <span className="px-2 py-0.5 bg-green-100 text-green-800 rounded-full text-xs">
                              Selected
                            </span>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Audio Experts</span>
                          <span className="text-sm font-medium">$4,200</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Tech Audio</span>
                          <span className="text-sm font-medium">$3,800</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 border rounded-md">
                      <h3 className="text-sm font-medium mb-2">Catering Options</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Gourmet Catering</span>
                          <div className="flex items-center">
                            <span className="text-sm font-medium mr-2">$10,000</span>
                            <span className="px-2 py-0.5 bg-green-100 text-green-800 rounded-full text-xs">
                              Selected
                            </span>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Delicious Bites</span>
                          <span className="text-sm font-medium">$12,500</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Tasty Creations</span>
                          <span className="text-sm font-medium">$9,500</span>
                        </div>
                      </div>
                    </div>

                    <Button className="w-full">
                      <Plus className="h-4 w-4 mr-2" />
                      Add Comparison
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Contract Status</CardTitle>
                  <CardDescription>Track vendor agreements</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-green-500"></div>
                        <span className="text-sm">Signed</span>
                      </div>
                      <span className="text-sm font-medium">3</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-amber-500"></div>
                        <span className="text-sm">In Review</span>
                      </div>
                      <span className="text-sm font-medium">1</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-red-500"></div>
                        <span className="text-sm">Not Started</span>
                      </div>
                      <span className="text-sm font-medium">0</span>
                    </div>
                    <div className="h-[150px] flex items-center justify-center">
                      <div className="relative h-32 w-32">
                        <div className="absolute inset-0 rounded-full border-8 border-green-200"></div>
                        <div
                          className="absolute inset-0 rounded-full border-8 border-transparent border-t-green-500"
                          style={{ transform: "rotate(270deg)" }}
                        ></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center">
                            <p className="text-2xl font-bold">75%</p>
                            <p className="text-xs text-muted-foreground">Complete</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        {/* ATTENDEES TAB */}
        <TabsContent value="attendees">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="md:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Attendee Management</CardTitle>
                  <CardDescription>Manage registrations and attendees</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex flex-col md:flex-row justify-between gap-4">
                      <div className="flex items-center gap-2">
                        <Input placeholder="Search attendees..." className="w-full md:w-[250px]" />
                        <Select defaultValue="all">
                          <SelectTrigger className="w-[150px]">
                            <SelectValue placeholder="Filter by status" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="all">All Status</SelectItem>
                            <SelectItem value="confirmed">Confirmed</SelectItem>
                            <SelectItem value="pending">Pending</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline">
                          <Download className="h-4 w-4 mr-2" />
                          Export
                        </Button>
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button>
                              <UserPlus className="h-4 w-4 mr-2" />
                              Add Attendee
                            </Button>
                          </DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle>Add Attendee</DialogTitle>
                              <DialogDescription>Add a new attendee to your event.</DialogDescription>
                            </DialogHeader>
                            <div className="grid gap-4 py-4">
                              <div className="grid gap-2">
                                <Label htmlFor="attendee-name">Full Name</Label>
                                <Input
                                  id="attendee-name"
                                  placeholder="Enter full name"
                                  value={newAttendee.name}
                                  onChange={(e) => setNewAttendee({ ...newAttendee, name: e.target.value })}
                                />
                              </div>
                              <div className="grid gap-2">
                                <Label htmlFor="attendee-email">Email Address</Label>
                                <Input
                                  id="attendee-email"
                                  placeholder="Enter email address"
                                  value={newAttendee.email}
                                  onChange={(e) => setNewAttendee({ ...newAttendee, email: e.target.value })}
                                />
                              </div>
                              <div className="grid gap-2">
                                <Label htmlFor="attendee-ticket">Ticket Type</Label>
                                <Select
                                  value={newAttendee.ticketType}
                                  onValueChange={(value) => setNewAttendee({ ...newAttendee, ticketType: value })}
                                >
                                  <SelectTrigger id="attendee-ticket">
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
                                <Label htmlFor="attendee-status">Status</Label>
                                <Select
                                  value={newAttendee.status}
                                  onValueChange={(value) => setNewAttendee({ ...newAttendee, status: value })}
                                >
                                  <SelectTrigger id="attendee-status">
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
                              <Button onClick={addAttendee}>Add Attendee</Button>
                            </DialogFooter>
                          </DialogContent>
                        </Dialog>
                      </div>
                    </div>

                    <div className="border rounded-md">
                      <div className="grid grid-cols-6 gap-4 p-3 border-b font-medium text-sm">
                        <div className="col-span-2">Name / Email</div>
                        <div>Ticket Type</div>
                        <div>Registration Date</div>
                        <div>Status</div>
                        <div>Actions</div>
                      </div>
                      {attendees.map((attendee) => (
                        <div key={attendee.id} className="grid grid-cols-6 gap-4 p-3 border-b text-sm">
                          <div className="col-span-2">
                            <p className="font-medium">{attendee.name}</p>
                            <p className="text-muted-foreground">{attendee.email}</p>
                          </div>
                          <div>{attendee.ticketType}</div>
                          <div>{attendee.registered}</div>
                          <div>
                            <span
                              className={`px-2 py-1 rounded-full text-xs ${
                                attendee.status === "Confirmed"
                                  ? "bg-green-100 text-green-800"
                                  : "bg-amber-100 text-amber-800"
                              }`}
                            >
                              {attendee.status}
                            </span>
                          </div>
                          <div className="flex gap-2">
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8"
                              onClick={() => editAttendee(attendee)}
                            >
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8 text-destructive"
                              onClick={() => removeAttendee(attendee.id)}
                            >
                              <Trash className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle>Registration Analytics</CardTitle>
                  <CardDescription>Attendee statistics</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="flex flex-col items-center">
                      <div className="relative h-32 w-32">
                        <div className="absolute inset-0 rounded-full border-8 border-muted"></div>
                        <div
                          className="absolute inset-0 rounded-full border-8 border-transparent border-t-primary"
                          style={{ transform: `rotate(${(attendees.length / 200) * 360}deg)` }}
                        ></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center">
                            <p className="text-2xl font-bold">{Math.round((attendees.length / 200) * 100)}%</p>
                            <p className="text-xs text-muted-foreground">Capacity</p>
                          </div>
                        </div>
                      </div>
                      <p className="mt-2 text-sm text-muted-foreground">{attendees.length} of 200 seats filled</p>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-sm font-medium">Ticket Types</h3>
                      <div className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span>VIP</span>
                          <span>
                            {attendees.filter((a) => a.ticketType === "VIP").length} (
                            {Math.round(
                              (attendees.filter((a) => a.ticketType === "VIP").length / attendees.length) * 100,
                            )}
                            %)
                          </span>
                        </div>
                        <Progress
                          value={(attendees.filter((a) => a.ticketType === "VIP").length / attendees.length) * 100}
                          className="h-2"
                        />
                      </div>
                      <div className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span>Standard</span>
                          <span>
                            {attendees.filter((a) => a.ticketType === "Standard").length} (
                            {Math.round(
                              (attendees.filter((a) => a.ticketType === "Standard").length / attendees.length) * 100,
                            )}
                            %)
                          </span>
                        </div>
                        <Progress
                          value={(attendees.filter((a) => a.ticketType === "Standard").length / attendees.length) * 100}
                          className="h-2"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-sm font-medium">Registration Trend</h3>
                      <div className="h-[100px] flex items-end justify-between gap-1">
                        {[15, 22, 30, 25, 18, 10].map((value, index) => (
                          <div key={index} className="flex flex-col items-center">
                            <div className="w-8 bg-primary/80 rounded-t-sm" style={{ height: `${value * 2}px` }}></div>
                            <p className="text-xs mt-1 text-muted-foreground">W{index + 1}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Button className="w-full">
                      <BarChart className="h-4 w-4 mr-2" />
                      View Detailed Analytics
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Check-in Management</CardTitle>
                  <CardDescription>Track attendee arrivals</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 border rounded-md">
                      <div className="flex justify-between mb-2">
                        <h3 className="text-sm font-medium">Check-in Status</h3>
                        <span className="text-sm font-medium">
                          {checkedInCount} / {attendees.length}
                        </span>
                      </div>
                      <Progress value={(checkedInCount / attendees.length) * 100} className="h-2" />
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-sm font-medium">Quick Check-in</h3>
                      <div className="flex gap-2">
                        <Input
                          placeholder="Enter attendee email or ticket #"
                          value={checkInEmail}
                          onChange={(e) => setCheckInEmail(e.target.value)}
                        />
                        <Button variant="outline" onClick={() => checkInAttendee(checkInEmail)}>
                          <CheckCircle className="h-4 w-4 mr-2" />
                          Check In
                        </Button>
                      </div>
                    </div>

                    <Button className="w-full">
                      <QrCode className="h-4 w-4 mr-2" />
                      QR Code Check-in
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        {/* ATTENDEE EXPERIENCE TAB */}
        <TabsContent value="attendee-experience">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="md:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Registration & Ticketing</CardTitle>
                  <CardDescription>Configure the attendee registration experience</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="p-4 border rounded-md">
                      <h3 className="text-lg font-medium mb-3">Registration Settings</h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Enable Registration</p>
                            <p className="text-sm text-muted-foreground">Allow attendees to register for this event</p>
                          </div>
                          <Switch
                            checked={registrationSettings.enableRegistration}
                            onCheckedChange={(checked) =>
                              setRegistrationSettings({ ...registrationSettings, enableRegistration: checked })
                            }
                          />
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Waitlist</p>
                            <p className="text-sm text-muted-foreground">Enable waitlist when event reaches capacity</p>
                          </div>
                          <Switch
                            checked={registrationSettings.enableWaitlist}
                            onCheckedChange={(checked) =>
                              setRegistrationSettings({ ...registrationSettings, enableWaitlist: checked })
                            }
                          />
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Collect Attendee Information</p>
                            <p className="text-sm text-muted-foreground">
                              Gather additional details during registration
                            </p>
                          </div>
                          <Switch
                            checked={registrationSettings.collectAttendeeInfo}
                            onCheckedChange={(checked) =>
                              setRegistrationSettings({ ...registrationSettings, collectAttendeeInfo: checked })
                            }
                          />
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Send Confirmation Emails</p>
                            <p className="text-sm text-muted-foreground">Automatically email ticket confirmations</p>
                          </div>
                          <Switch
                            checked={registrationSettings.sendConfirmationEmails}
                            onCheckedChange={(checked) =>
                              setRegistrationSettings({ ...registrationSettings, sendConfirmationEmails: checked })
                            }
                          />
                        </div>
                      </div>
                    </div>

                    <div className="p-4 border rounded-md">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-lg font-medium">Ticket Tiers</h3>
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button size="sm">
                              <Plus className="h-4 w-4 mr-2" />
                              Add Ticket Tier
                            </Button>
                          </DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle>Add Ticket Tier</DialogTitle>
                              <DialogDescription>Create a new ticket type for your event</DialogDescription>
                            </DialogHeader>
                            <div className="grid gap-4 py-4">
                              <div className="grid gap-2">
                                <Label htmlFor="ticket-name">Ticket Name</Label>
                                <Input id="ticket-name" placeholder="e.g., VIP, Early Bird, Standard" />
                              </div>
                              <div className="grid grid-cols-2 gap-4">
                                <div className="grid gap-2">
                                  <Label htmlFor="ticket-price">Price ($)</Label>
                                  <Input id="ticket-price" type="number" placeholder="0.00" />
                                </div>
                                <div className="grid gap-2">
                                  <Label htmlFor="ticket-quantity">Quantity Available</Label>
                                  <Input id="ticket-quantity" type="number" placeholder="100" />
                                </div>
                              </div>
                              <div className="grid grid-cols-2 gap-4">
                                <div className="grid gap-2">
                                  <Label htmlFor="ticket-start">Sales Start Date</Label>
                                  <Input id="ticket-start" type="date" />
                                </div>
                                <div className="grid gap-2">
                                  <Label htmlFor="ticket-end">Sales End Date</Label>
                                  <Input id="ticket-end" type="date" />
                                </div>
                              </div>
                              <div className="grid gap-2">
                                <Label htmlFor="ticket-description">Description</Label>
                                <Textarea
                                  id="ticket-description"
                                  placeholder="Describe what's included with this ticket"
                                />
                              </div>
                            </div>
                            <DialogFooter>
                              <Button
                                onClick={() =>
                                  toast({ title: "Ticket Added", description: "New ticket tier has been created" })
                                }
                              >
                                Add Ticket
                              </Button>
                            </DialogFooter>
                          </DialogContent>
                        </Dialog>
                      </div>
                      <div className="space-y-3">
                        {ticketTiers.map((ticket) => (
                          <div key={ticket.id} className="p-3 border rounded-md">
                            <div className="flex justify-between items-center mb-2">
                              <div>
                                <h4 className="font-medium">{ticket.name}</h4>
                                <p className="text-sm text-muted-foreground">{ticket.description}</p>
                              </div>
                              <div className="text-right">
                                <p className="font-bold">${ticket.price}</p>
                                <p className="text-xs text-muted-foreground">{ticket.quantity} available</p>
                              </div>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span className="text-muted-foreground">
                                Sales: {ticket.startDate} - {ticket.endDate}
                              </span>
                              <div className="flex gap-2">
                                <Button variant="ghost" size="icon" className="h-8 w-8">
                                  <Edit className="h-4 w-4" />
                                </Button>
                                <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive">
                                  <Trash className="h-4 w-4" />
                                </Button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="p-4 border rounded-md">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-lg font-medium">Promotional Codes</h3>
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button size="sm">
                              <Plus className="h-4 w-4 mr-2" />
                              Add Promo Code
                            </Button>
                          </DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle>Create Promotional Code</DialogTitle>
                              <DialogDescription>Set up a discount code for your event</DialogDescription>
                            </DialogHeader>
                            <div className="grid gap-4 py-4">
                              <div className="grid gap-2">
                                <Label htmlFor="promo-code">Code</Label>
                                <Input id="promo-code" placeholder="e.g., EARLYBIRD25" />
                              </div>
                              <div className="grid grid-cols-2 gap-4">
                                <div className="grid gap-2">
                                  <Label htmlFor="discount-type">Discount Type</Label>
                                  <Select defaultValue="percentage">
                                    <SelectTrigger id="discount-type">
                                      <SelectValue placeholder="Select type" />
                                    </SelectTrigger>
                                    <SelectContent>
                                      <SelectItem value="percentage">Percentage (%)</SelectItem>
                                      <SelectItem value="fixed">Fixed Amount ($)</SelectItem>
                                    </SelectContent>
                                  </Select>
                                </div>
                                <div className="grid gap-2">
                                  <Label htmlFor="discount-value">Discount Value</Label>
                                  <Input id="discount-value" type="number" placeholder="25" />
                                </div>
                              </div>
                              <div className="grid grid-cols-2 gap-4">
                                <div className="grid gap-2">
                                  <Label htmlFor="promo-start">Valid From</Label>
                                  <Input id="promo-start" type="date" />
                                </div>
                                <div className="grid gap-2">
                                  <Label htmlFor="promo-end">Valid Until</Label>
                                  <Input id="promo-end" type="date" />
                                </div>
                              </div>
                              <div className="grid gap-2">
                                <Label htmlFor="usage-limit">Usage Limit</Label>
                                <Input id="usage-limit" type="number" placeholder="50" />
                              </div>
                              <div className="grid gap-2">
                                <Label htmlFor="applicable-tickets">Applicable Tickets</Label>
                                <Select defaultValue="all">
                                  <SelectTrigger id="applicable-tickets">
                                    <SelectValue placeholder="Select tickets" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="all">All Tickets</SelectItem>
                                    <SelectItem value="standard">Standard Only</SelectItem>
                                    <SelectItem value="vip">VIP Only</SelectItem>
                                    <SelectItem value="early">Early Bird Only</SelectItem>
                                  </SelectContent>
                                </Select>
                              </div>
                            </div>
                            <DialogFooter>
                              <Button
                                onClick={() =>
                                  toast({
                                    title: "Promo Code Created",
                                    description: "Your promotional code has been created",
                                  })
                                }
                              >
                                Create Code
                              </Button>
                            </DialogFooter>
                          </DialogContent>
                        </Dialog>
                      </div>
                      <div className="space-y-3">
                        {promoCodes.map((promo) => (
                          <div key={promo.id} className="p-3 border rounded-md">
                            <div className="flex justify-between items-center mb-2">
                              <div>
                                <h4 className="font-medium">{promo.code}</h4>
                                <p className="text-sm text-muted-foreground">{promo.description}</p>
                              </div>
                              <div className="text-right">
                                <p className="font-bold">
                                  {promo.discountValue}
                                  {promo.discountType === "percentage" ? "%" : "$"} OFF
                                </p>
                                <p className="text-xs text-muted-foreground">{promo.usesRemaining} uses remaining</p>
                              </div>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span className="text-muted-foreground">
                                Valid: {promo.startDate} - {promo.endDate}
                              </span>
                              <div className="flex gap-2">
                                <Button variant="ghost" size="icon" className="h-8 w-8">
                                  <Edit className="h-4 w-4" />
                                </Button>
                                <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive">
                                  <Trash className="h-4 w-4" />
                                </Button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle>Custom Branding</CardTitle>
                  <CardDescription>Customize the attendee-facing event page</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid gap-2">
                      <Label htmlFor="event-logo">Event Logo</Label>
                      <div className="flex items-center gap-2">
                        <div className="h-16 w-16 rounded-md border flex items-center justify-center bg-muted">
                          <CalendarDays className="h-8 w-8 text-muted-foreground" />
                        </div>
                        <Button variant="outline" size="sm">
                          Upload Logo
                        </Button>
                      </div>
                    </div>

                    <div className="grid gap-2">
                      <Label htmlFor="event-banner">Event Banner</Label>
                      <div className="h-32 rounded-md border flex items-center justify-center bg-muted">
                        <Button variant="outline">Upload Banner Image</Button>
                      </div>
                    </div>

                    <div className="grid gap-2">
                      <Label htmlFor="color-scheme">Color Scheme</Label>
                      <div className="flex gap-2">
                        <div className="h-8 w-8 rounded-full bg-primary border cursor-pointer"></div>
                        <div className="h-8 w-8 rounded-full bg-blue-500 border cursor-pointer"></div>
                        <div className="h-8 w-8 rounded-full bg-green-500 border cursor-pointer"></div>
                        <div className="h-8 w-8 rounded-full bg-purple-500 border cursor-pointer"></div>
                        <div className="h-8 w-8 rounded-full bg-orange-500 border cursor-pointer"></div>
                        <div className="h-8 w-8 rounded-full bg-gray-200 border cursor-pointer flex items-center justify-center">
                          <Plus className="h-4 w-4" />
                        </div>
                      </div>
                    </div>

                    <div className="grid gap-2">
                      <Label htmlFor="custom-domain">Custom Domain</Label>
                      <div className="flex gap-2">
                        <Input id="custom-domain" placeholder="conference" />
                        <span className="flex items-center text-muted-foreground">.eventpro.com</span>
                      </div>
                      <p className="text-xs text-muted-foreground">Or use your own domain with CNAME records</p>
                    </div>

                    <Button
                      className="w-full"
                      onClick={() =>
                        toast({ title: "Branding Updated", description: "Your branding changes have been saved" })
                      }
                    >
                      Save Branding Settings
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Registration Preview</CardTitle>
                  <CardDescription>See how your event page looks to attendees</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="border rounded-md overflow-hidden">
                      <div className="h-32 bg-muted relative">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-muted-foreground">Event Banner</span>
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="text-xl font-bold">Annual Tech Conference</h3>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                          <CalendarDays className="h-4 w-4" />
                          <span>May 15-17, 2024</span>
                        </div>
                        <p className="text-sm mt-2">
                          Join us for three days of inspiring talks, workshops, and networking opportunities with
                          industry leaders.
                        </p>

                        <div className="mt-4 p-3 border rounded-md">
                          <div className="flex justify-between items-center">
                            <div>
                              <h4 className="font-medium">Standard Ticket</h4>
                              <p className="text-xs text-muted-foreground">Regular admission</p>
                            </div>
                            <div className="text-right">
                              <p className="font-bold">$199</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button variant="outline" className="flex-1">
                        Edit Page
                      </Button>
                      <Button className="flex-1" onClick={() => window.open("/events/1/preview", "_blank")}>
                        View Full Preview
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        {/* COMMUNICATIONS TAB */}
        <TabsContent value="communications">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="md:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Communication Center</CardTitle>
                  <CardDescription>Manage emails, notifications and surveys</CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="emails">
                    <TabsList className="mb-4">
                      <TabsTrigger value="emails">Email Campaigns</TabsTrigger>
                      <TabsTrigger value="notifications">Notifications</TabsTrigger>
                      <TabsTrigger value="surveys">Surveys & Feedback</TabsTrigger>
                    </TabsList>

                    <TabsContent value="emails">
                      <div className="space-y-4">
                        <div className="border rounded-md">
                          <div className="grid grid-cols-5 gap-4 p-3 border-b font-medium text-sm">
                            <div className="col-span-2">Subject</div>
                            <div>Recipients</div>
                            <div>Date</div>
                            <div>Status</div>
                          </div>
                          {communications
                            .filter((c) => c.type === "Email")
                            .map((comm) => (
                              <div key={comm.id} className="grid grid-cols-5 gap-4 p-3 border-b text-sm">
                                <div className="col-span-2 font-medium">{comm.subject}</div>
                                <div>{comm.recipients}</div>
                                <div>{comm.sentDate || comm.scheduledDate}</div>
                                <div>
                                  <span
                                    className={`px-2 py-1 rounded-full text-xs ${
                                      comm.status === "Sent"
                                        ? "bg-green-100 text-green-800"
                                        : "bg-amber-100 text-amber-800"
                                    }`}
                                  >
                                    {comm.status}
                                  </span>
                                </div>
                              </div>
                            ))}
                        </div>

                        <Dialog>
                          <DialogTrigger asChild>
                            <Button>
                              <Mail className="h-4 w-4 mr-2" />
                              Create Email Campaign
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-3xl">
                            <DialogHeader>
                              <DialogTitle>Create Email Campaign</DialogTitle>
                              <DialogDescription>
                                Create and schedule an email to send to your attendees.
                              </DialogDescription>
                            </DialogHeader>
                            <div className="grid gap-4 py-4">
                              <div className="grid gap-2">
                                <Label htmlFor="subject">Email Subject</Label>
                                <Input
                                  id="subject"
                                  placeholder="Enter email subject"
                                  value={newCampaign.subject}
                                  onChange={(e) => setNewCampaign({ ...newCampaign, subject: e.target.value })}
                                />
                              </div>
                              <div className="grid gap-2">
                                <Label htmlFor="content">Email Content</Label>
                                <Textarea
                                  id="content"
                                  placeholder="Enter email content"
                                  rows={8}
                                  value={newCampaign.content}
                                  onChange={(e) => setNewCampaign({ ...newCampaign, content: e.target.value })}
                                />
                              </div>
                              <div className="grid grid-cols-2 gap-4">
                                <div className="grid gap-2">
                                  <Label htmlFor="recipients">Recipients</Label>
                                  <Select
                                    value={newCampaign.recipients}
                                    onValueChange={(value) => setNewCampaign({ ...newCampaign, recipients: value })}
                                  >
                                    <SelectTrigger id="recipients">
                                      <SelectValue placeholder="Select recipients" />
                                    </SelectTrigger>
                                    <SelectContent>
                                      <SelectItem value="all">All Attendees</SelectItem>
                                      <SelectItem value="vip">VIP Attendees</SelectItem>
                                      <SelectItem value="standard">Standard Attendees</SelectItem>
                                      <SelectItem value="pending">Pending Registrations</SelectItem>
                                    </SelectContent>
                                  </Select>
                                </div>
                                <div className="grid gap-2">
                                  <Label htmlFor="scheduledDate">Schedule Date</Label>
                                  <Input
                                    id="scheduledDate"
                                    type="date"
                                    value={newCampaign.scheduledDate}
                                    onChange={(e) => setNewCampaign({ ...newCampaign, scheduledDate: e.target.value })}
                                  />
                                </div>
                              </div>
                            </div>
                            <DialogFooter>
                              <Button variant="outline">Save as Draft</Button>
                              <Button onClick={createEmailCampaign}>Schedule Email</Button>
                            </DialogFooter>
                          </DialogContent>
                        </Dialog>
                      </div>
                    </TabsContent>

                    <TabsContent value="notifications">
                      <div className="space-y-4">
                        <div className="p-4 border rounded-md">
                          <h3 className="text-sm font-medium mb-3">Automated Notifications</h3>
                          <div className="space-y-3">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <Bell className="h-4 w-4 text-muted-foreground" />
                                <span className="text-sm">Registration Confirmation</span>
                              </div>
                              <Switch
                                checked={notificationSettings.registrationConfirmation}
                                onCheckedChange={() => toggleNotificationSetting("registrationConfirmation")}
                              />
                            </div>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <Bell className="h-4 w-4 text-muted-foreground" />
                                <span className="text-sm">1 Week Reminder</span>
                              </div>
                              <Switch
                                checked={notificationSettings.oneWeekReminder}
                                onCheckedChange={() => toggleNotificationSetting("oneWeekReminder")}
                              />
                            </div>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <Bell className="h-4 w-4 text-muted-foreground" />
                                <span className="text-sm">1 Day Reminder</span>
                              </div>
                              <Switch
                                checked={notificationSettings.oneDayReminder}
                                onCheckedChange={() => toggleNotificationSetting("oneDayReminder")}
                              />
                            </div>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <Bell className="h-4 w-4 text-muted-foreground" />
                                <span className="text-sm">Post-Event Thank You</span>
                              </div>
                              <Switch
                                checked={notificationSettings.postEventThankYou}
                                onCheckedChange={() => toggleNotificationSetting("postEventThankYou")}
                              />
                            </div>
                          </div>
                        </div>

                        <div className="p-4 border rounded-md">
                          <h3 className="text-sm font-medium mb-3">Custom Notifications</h3>
                          <div className="space-y-4">
                            <div className="flex items-center justify-between p-3 bg-muted rounded-md">
                              <div>
                                <p className="font-medium">Schedule Change Alert</p>
                                <p className="text-xs text-muted-foreground">
                                  Notify attendees of any schedule changes
                                </p>
                              </div>
                              <Button variant="outline" size="sm" onClick={() => sendNotification("Schedule Change")}>
                                <Bell className="h-4 w-4 mr-2" />
                                Send
                              </Button>
                            </div>
                            <div className="flex items-center justify-between p-3 bg-muted rounded-md">
                              <div>
                                <p className="font-medium">Special Announcement</p>
                                <p className="text-xs text-muted-foreground">
                                  Send important announcements to all attendees
                                </p>
                              </div>
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => sendNotification("Special Announcement")}
                              >
                                <Bell className="h-4 w-4 mr-2" />
                                Send
                              </Button>
                            </div>
                            <Button className="w-full">
                              <Plus className="h-4 w-4 mr-2" />
                              Create Custom Notification
                            </Button>
                          </div>
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="surveys">
                      <div className="space-y-4">
                        <div className="border rounded-md">
                          <div className="grid grid-cols-4 gap-4 p-3 border-b font-medium text-sm">
                            <div className="col-span-2">Survey Name</div>
                            <div>Status</div>
                            <div>Responses</div>
                          </div>
                          {communications
                            .filter((c) => c.type === "Survey")
                            .map((survey) => (
                              <div key={survey.id} className="grid grid-cols-4 gap-4 p-3 border-b text-sm">
                                <div className="col-span-2 font-medium">{survey.subject}</div>
                                <div>
                                  <span className="px-2 py-1 rounded-full text-xs bg-amber-100 text-amber-800">
                                    {survey.status}
                                  </span>
                                </div>
                                <div>0 / {attendees.length}</div>
                              </div>
                            ))}
                        </div>

                        <Dialog>
                          <DialogTrigger asChild>
                            <Button>
                              <MessageSquare className="h-4 w-4 mr-2" />
                              Create New Survey
                            </Button>
                          </DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle>Create Survey</DialogTitle>
                              <DialogDescription>
                                Create a new survey to collect feedback from attendees.
                              </DialogDescription>
                            </DialogHeader>
                            <div className="grid gap-4 py-4">
                              <div className="grid gap-2">
                                <Label htmlFor="survey-name">Survey Name</Label>
                                <Input
                                  id="survey-name"
                                  placeholder="Enter survey name"
                                  value={newSurvey.name}
                                  onChange={(e) => setNewSurvey({ ...newSurvey, name: e.target.value })}
                                />
                              </div>
                              <div className="grid gap-2">
                                <Label htmlFor="survey-description">Description</Label>
                                <Textarea
                                  id="survey-description"
                                  placeholder="Enter survey description"
                                  value={newSurvey.description}
                                  onChange={(e) => setNewSurvey({ ...newSurvey, description: e.target.value })}
                                />
                              </div>
                              <div className="grid gap-2">
                                <Label htmlFor="survey-date">Schedule Date</Label>
                                <Input
                                  id="survey-date"
                                  type="date"
                                  value={newSurvey.scheduledDate}
                                  onChange={(e) => setNewSurvey({ ...newSurvey, scheduledDate: e.target.value })}
                                />
                              </div>
                            </div>
                            <DialogFooter>
                              <Button onClick={createSurvey}>Create Survey</Button>
                            </DialogFooter>
                          </DialogContent>
                        </Dialog>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle>Communication Analytics</CardTitle>
                  <CardDescription>Email and notification metrics</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="p-4 border rounded-md">
                      <h3 className="text-sm font-medium mb-2">Email Performance</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between text-sm">
                          <span>Open Rate</span>
                          <span className="font-medium">72%</span>
                        </div>
                        <Progress value={72} className="h-2" />
                        <div className="flex justify-between text-sm">
                          <span>Click Rate</span>
                          <span className="font-medium">45%</span>
                        </div>
                        <Progress value={45} className="h-2" />
                      </div>
                    </div>

                    <div className="p-4 border rounded-md">
                      <h3 className="text-sm font-medium mb-2">Recent Campaigns</h3>
                      <div className="space-y-2">
                        {communications
                          .filter((c) => c.type === "Email" && c.status === "Sent")
                          .map((email) => (
                            <div key={email.id} className="flex justify-between text-sm">
                              <span>{email.subject}</span>
                              <span className="font-medium">{email.openRate} open</span>
                            </div>
                          ))}
                      </div>
                    </div>

                    <div className="p-4 border rounded-md">
                      <h3 className="text-sm font-medium mb-2">Survey Response Rate</h3>
                      <div className="flex items-center justify-center py-4">
                        <div className="relative h-24 w-24">
                          <div className="absolute inset-0 rounded-full border-8 border-muted"></div>
                          <div
                            className="absolute inset-0 rounded-full border-8 border-transparent border-t-primary"
                            style={{ transform: "rotate(0deg)" }}
                          ></div>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center">
                              <p className="text-xl font-bold">0%</p>
                              <p className="text-xs text-muted-foreground">Response</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <Button className="w-full">
                      <LineChart className="h-4 w-4 mr-2" />
                      View Detailed Analytics
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Communication Templates</CardTitle>
                  <CardDescription>Reusable email templates</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 border rounded-md">
                      <div>
                        <p className="font-medium">Event Invitation</p>
                        <p className="text-xs text-muted-foreground">Basic invitation template</p>
                      </div>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Edit className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="flex items-center justify-between p-3 border rounded-md">
                      <div>
                        <p className="font-medium">Event Reminder</p>
                        <p className="text-xs text-muted-foreground">Pre-event reminder template</p>
                      </div>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Edit className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="flex items-center justify-between p-3 border rounded-md">
                      <div>
                        <p className="font-medium">Thank You</p>
                        <p className="text-xs text-muted-foreground">Post-event thank you template</p>
                      </div>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Edit className="h-4 w-4" />
                      </Button>
                    </div>
                    <Button className="w-full">
                      <Plus className="h-4 w-4 mr-2" />
                      Create Template
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      {/* Edit Task Dialog */}
      <Dialog open={editTaskDialogOpen} onOpenChange={setEditTaskDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Task</DialogTitle>
            <DialogDescription>Update task details</DialogDescription>
          </DialogHeader>
          {currentTask && (
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="edit-task-title">Task Description</Label>
                <Input
                  id="edit-task-title"
                  value={currentTask.title}
                  onChange={(e) => setCurrentTask({ ...currentTask, title: e.target.value })}
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="edit-task-date">Due Date</Label>
                  <Input
                    id="edit-task-date"
                    type="date"
                    value={currentTask.dueDate}
                    onChange={(e) => setCurrentTask({ ...currentTask, dueDate: e.target.value })}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="edit-task-assignee">Assign To</Label>
                  <Select
                    value={currentTask.assignedTo}
                    onValueChange={(value) => setCurrentTask({ ...currentTask, assignedTo: value })}
                  >
                    <SelectTrigger id="edit-task-assignee">
                      <SelectValue placeholder="Select team member" />
                    </SelectTrigger>
                    <SelectContent>
                      {teamMembers.map((member) => (
                        <SelectItem key={member.id} value={member.name}>
                          {member.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="edit-task-category">Category</Label>
                  <Select
                    value={currentTask.category}
                    onValueChange={(value) => setCurrentTask({ ...currentTask, category: value })}
                  >
                    <SelectTrigger id="edit-task-category">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Venue">Venue</SelectItem>
                      <SelectItem value="Food & Beverage">Food & Beverage</SelectItem>
                      <SelectItem value="Speakers">Speakers</SelectItem>
                      <SelectItem value="Marketing">Marketing</SelectItem>
                      <SelectItem value="Technology">Technology</SelectItem>
                      <SelectItem value="Logistics">Logistics</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox
                  id="edit-task-completed"
                  checked={currentTask.completed}
                  onCheckedChange={(checked) => setCurrentTask({ ...currentTask, completed: checked })}
                />
                <Label htmlFor="edit-task-completed">Mark as completed</Label>
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setEditTaskDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={saveEditedTask}>Save Changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Edit Vendor Dialog */}
      <Dialog open={editVendorDialogOpen} onOpenChange={setEditVendorDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Vendor</DialogTitle>
            <DialogDescription>Update vendor details</DialogDescription>
          </DialogHeader>
          {currentVendor && (
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="edit-vendor-name">Vendor Name</Label>
                <Input
                  id="edit-vendor-name"
                  value={currentVendor.name}
                  onChange={(e) => setCurrentVendor({ ...currentVendor, name: e.target.value })}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="edit-vendor-service">Service Type</Label>
                <Select
                  value={currentVendor.service}
                  onValueChange={(value) => setCurrentVendor({ ...currentVendor, service: value })}
                >
                  <SelectTrigger id="edit-vendor-service">
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
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="edit-vendor-contact">Contact Person</Label>
                  <Input
                    id="edit-vendor-contact"
                    value={currentVendor.contact}
                    onChange={(e) => setCurrentVendor({ ...currentVendor, contact: e.target.value })}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="edit-vendor-phone">Phone Number</Label>
                  <Input
                    id="edit-vendor-phone"
                    value={currentVendor.phone}
                    onChange={(e) => setCurrentVendor({ ...currentVendor, phone: e.target.value })}
                  />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="edit-vendor-email">Email Address</Label>
                <Input
                  id="edit-vendor-email"
                  value={currentVendor.email}
                  onChange={(e) => setCurrentVendor({ ...currentVendor, email: e.target.value })}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="edit-vendor-contract">Contract Status</Label>
                <Select
                  value={currentVendor.contractStatus}
                  onValueChange={(value) => setCurrentVendor({ ...currentVendor, contractStatus: value })}
                >
                  <SelectTrigger id="edit-vendor-contract">
                    <SelectValue placeholder="Select contract status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Not Started">Not Started</SelectItem>
                    <SelectItem value="In Review">In Review</SelectItem>
                    <SelectItem value="Signed">Signed</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="edit-vendor-notes">Notes</Label>
                <Textarea
                  id="edit-vendor-notes"
                  value={currentVendor.notes}
                  onChange={(e) => setCurrentVendor({ ...currentVendor, notes: e.target.value })}
                />
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setEditVendorDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={saveEditedVendor}>Save Changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Edit Attendee Dialog */}
      <Dialog open={editAttendeeDialogOpen} onOpenChange={setEditAttendeeDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Attendee</DialogTitle>
            <DialogDescription>Update attendee details</DialogDescription>
          </DialogHeader>
          {currentAttendee && (
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="edit-attendee-name">Full Name</Label>
                <Input
                  id="edit-attendee-name"
                  value={currentAttendee.name}
                  onChange={(e) => setCurrentAttendee({ ...currentAttendee, name: e.target.value })}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="edit-attendee-email">Email Address</Label>
                <Input
                  id="edit-attendee-email"
                  value={currentAttendee.email}
                  onChange={(e) => setCurrentAttendee({ ...currentAttendee, email: e.target.value })}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="edit-attendee-ticket">Ticket Type</Label>
                <Select
                  value={currentAttendee.ticketType}
                  onValueChange={(value) => setCurrentAttendee({ ...currentAttendee, ticketType: value })}
                >
                  <SelectTrigger id="edit-attendee-ticket">
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
                <Label htmlFor="edit-attendee-status">Status</Label>
                <Select
                  value={currentAttendee.status}
                  onValueChange={(value) => setCurrentAttendee({ ...currentAttendee, status: value })}
                >
                  <SelectTrigger id="edit-attendee-status">
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Confirmed">Confirmed</SelectItem>
                    <SelectItem value="Pending">Pending</SelectItem>
                    <SelectItem value="Cancelled">Cancelled</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox
                  id="edit-attendee-checkedin"
                  checked={currentAttendee.checkedIn}
                  onCheckedChange={(checked) => setCurrentAttendee({ ...currentAttendee, checkedIn: checked })}
                />
                <Label htmlFor="edit-attendee-checkedin">Checked In</Label>
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setEditAttendeeDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={saveEditedAttendee}>Save Changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Edit Milestone Dialog */}
      <Dialog open={editMilestoneDialogOpen} onOpenChange={setEditMilestoneDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Milestone</DialogTitle>
            <DialogDescription>Update milestone details</DialogDescription>
          </DialogHeader>
          {currentMilestone && (
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="edit-milestone-title">Milestone Title</Label>
                <Input
                  id="edit-milestone-title"
                  value={currentMilestone.title}
                  onChange={(e) => setCurrentMilestone({ ...currentMilestone, title: e.target.value })}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="edit-milestone-date">Date</Label>
                <Input
                  id="edit-milestone-date"
                  type="date"
                  value={currentMilestone.date}
                  onChange={(e) => setCurrentMilestone({ ...currentMilestone, date: e.target.value })}
                />
              </div>
              <div className="flex items-center gap-2">
                <Checkbox
                  id="edit-milestone-completed"
                  checked={currentMilestone.completed}
                  onCheckedChange={(checked) => setCurrentMilestone({ ...currentMilestone, completed: checked })}
                />
                <Label htmlFor="edit-milestone-completed">Mark as completed</Label>
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setEditMilestoneDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={saveEditedMilestone}>Save Changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* View Contract Dialog */}
      <Dialog open={viewContractDialogOpen} onOpenChange={setViewContractDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Contract Details</DialogTitle>
            <DialogDescription>
              {currentContract?.name} - {currentContract?.service}
            </DialogDescription>
          </DialogHeader>
          {currentContract && (
            <div className="grid gap-4 py-4">
              <div className="p-4 border rounded-md">
                <h3 className="text-sm font-medium mb-2">Contract Status</h3>
                <div className="flex items-center gap-2">
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      currentContract.contractStatus === "Signed"
                        ? "bg-green-100 text-green-800"
                        : currentContract.contractStatus === "In Review"
                          ? "bg-amber-100 text-amber-800"
                          : "bg-red-100 text-red-800"
                    }`}
                  >
                    {currentContract.contractStatus}
                  </span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() =>
                      updateContractStatus(
                        currentContract.id,
                        currentContract.contractStatus === "In Review"
                          ? "Signed"
                          : currentContract.contractStatus === "Not Started"
                            ? "In Review"
                            : "Signed",
                      )
                    }
                    disabled={currentContract.contractStatus === "Signed"}
                  >
                    {currentContract.contractStatus === "Signed"
                      ? "Signed"
                      : currentContract.contractStatus === "In Review"
                        ? "Mark as Signed"
                        : "Start Review"}
                  </Button>
                </div>
              </div>

              <div className="p-4 border rounded-md">
                <h3 className="text-sm font-medium mb-2">Contract File</h3>
                {currentContract.contractFile ? (
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <FileText className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{currentContract.contractFile}</span>
                    </div>
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  </div>
                ) : (
                  <div className="text-sm text-muted-foreground">No contract file uploaded</div>
                )}
              </div>

              <div className="p-4 border rounded-md">
                <h3 className="text-sm font-medium mb-2">Payment Schedule</h3>
                <div className="space-y-2">
                  {currentContract.paymentSchedule.map((payment, index) => (
                    <div key={index} className="flex justify-between text-sm">
                      <span>{payment.date}</span>
                      <div className="flex items-center gap-2">
                        <span
                          className={`px-2 py-0.5 rounded-full text-xs ${
                            payment.status === "Paid" ? "bg-green-100 text-green-800" : "bg-amber-100 text-amber-800"
                          }`}
                        >
                          {payment.status}
                        </span>
                        <span>${payment.amount.toLocaleString()}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setViewContractDialogOpen(false)}>
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </main>
  )
}

function QrCode(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="5" height="5" x="3" y="3" rx="1" />
      <rect width="5" height="5" x="16" y="3" rx="1" />
      <rect width="5" height="5" x="3" y="16" rx="1" />
      <path d="M21 16h-3a2 2 0 0 0-2 2v3" />
      <path d="M21 21v.01" />
      <path d="M12 7v3a2 2 0 0 1-2 2H7" />
      <path d="M3 12h.01" />
      <path d="M12 3h.01" />
      <path d="M12 16v.01" />
      <path d="M16 12h1" />
      <path d="M21 12v.01" />
      <path d="M12 21v-1" />
    </svg>
  )
}

