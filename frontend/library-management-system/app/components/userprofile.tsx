import React from 'react'
import Link from "next/link"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import Nav from '@/app/components/nav'
export default function UserProfile({data}) {
    console.log(data)
    function CalendarIcon(props) {
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
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  )
}
    function MapPinIcon(props) {
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
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
        )
      }
      
      
      function PhoneIcon(props) {
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
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
        )
      }
      
      
      function XIcon(props) {
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
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        )
      }
      
  return (
    <>
    
    <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-6 p-6 md:p-10">
      <div className="grid gap-6">
        <div className="bg-background rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Currently Borrowed</h2>
            <Link href="#" className="text-primary hover:underline" prefetch={false}>
              View Borrowing History
            </Link>
          </div>
          <div className="mt-4 grid gap-4">
            <div className="flex items-center gap-4">
              <img src="/placeholder.svg" alt="Book Cover" width={64} height={96} className="rounded-md" />
              <div>
                <h3 className="font-medium">The Great Gatsby</h3>
                <p className="text-muted-foreground text-sm">F. Scott Fitzgerald</p>
                <p className="text-muted-foreground text-sm">Due: 2023-06-30</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <img src="/placeholder.svg" alt="Book Cover" width={64} height={96} className="rounded-md" />
              <div>
                <h3 className="font-medium">To Kill a Mockingbird</h3>
                <p className="text-muted-foreground text-sm">Harper Lee</p>
                <p className="text-muted-foreground text-sm">Due: 2023-07-15</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <img src="/placeholder.svg" alt="Book Cover" width={64} height={96} className="rounded-md" />
              <div>
                <h3 className="font-medium">1984</h3>
                <p className="text-muted-foreground text-sm">George Orwell</p>
                <p className="text-muted-foreground text-sm">Due: 2023-08-01</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-background rounded-lg shadow-sm p-6">
        <div className="flex items-center gap-4">
          <Avatar className="h-16 w-16">
            <AvatarImage src="/placeholder-user.jpg" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div>
            <h2 className="text-xl font-semibold">John Doe</h2>
            <p className="text-muted-foreground text-sm">johndoe@example.com</p>
          </div>
        </div>
        <Separator className="my-6" />
        <div className="grid gap-4">
          <div className="flex items-center gap-2">
            <CalendarIcon className="h-5 w-5 text-muted-foreground" />
            <div>
              <p className="text-muted-foreground text-sm">Joined</p>
              <p className="font-medium">2021-05-12</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <MapPinIcon className="h-5 w-5 text-muted-foreground" />
            <div>
              <p className="text-muted-foreground text-sm">Address</p>
              <p className="font-medium">123 Main St, Anytown USA</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <PhoneIcon className="h-5 w-5 text-muted-foreground" />
            <div>
              <p className="text-muted-foreground text-sm">Contact</p>
              <p className="font-medium">(555) 555-5555</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

