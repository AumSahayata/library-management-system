import React from 'react'
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import ManageAccounts from '@/app/components/manageaccounts'

export default function AdminDashboard() {
    return (
        <div className="flex flex-col min-h-screen bg-muted/40">
          <header className="bg-background px-6 py-6 border-b">
            <div className="container mx-auto flex items-center justify-between">
              <div className="flex items-center gap-6">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="icon" className="overflow-hidden rounded-full">
                  <div className="rounded-full bg-primary w-12 h-12 flex items-center justify-center text-primary-foreground font-bold text-xl">
                  A
                </div>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Admin</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Logout</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
                <div>
                  <h1 className="text-2xl font-bold">Welcome back, Admin!</h1>
                  <p className="text-muted-foreground text-base">
                    Here's a quick overview of your library management dashboard.
                  </p>
                </div>
              </div>
            </div>
          </header>
          <ManageAccounts/>
        </div>
      )
}
