import React from 'react'
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import ManageAccounts from '@/app/components/manageaccounts'
import getSession from '@/app/utils/getSession'
import { logoutaction } from '@/app/actions/authactions'

const getUserData = async () => {
    try {
        console.log('test')
      const authToken = getSession()?.value;
      if (!authToken) {
        logoutaction();
        return null;
      }
  
      const response = await fetch(
        `${process.env.BASE_URL}/api/auth/users`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );
      const data = await response.json();
  
      return data;
    } catch (error) {
      console.log(error);
    //   toast.error("Some error occured!! Please refresh.");
    }
  };

export default async function AdminDashboard() {
 const response = await getUserData()
 console.log(response)
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
          <ManageAccounts  users={response.users} librarians={response.librarians}/>
        </div>
      )
}
