import React from 'react'
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { FilePenIcon, TrashIcon, PlusIcon } from 'lucide-react';
import Link from 'next/link'


export default function ManageAccounts() {
  return (
    <main className="flex-1 p-4 sm:p-6">
        <Tabs defaultValue="users">
          <div className="flex items-center">
            <TabsList>
              <TabsTrigger value="users" className="text-base">
                Users
              </TabsTrigger>
              <TabsTrigger value="librarians" className="text-base">
                Librarians
              </TabsTrigger>
            </TabsList>
            <div className="ml-auto flex items-center gap-2">
              <Link href="/signup">
                <Button size="sm" className="py-5 h-8 gap-1 text-base">
                  <PlusIcon className="h-3.5 w-3.5" />
                  <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">Create Account</span>
                </Button>
              </Link>
              
            </div>
          </div>
          <TabsContent value="users">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Users</CardTitle>
                <CardDescription className="text-base">Manage user and librarian accounts.</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="text-base">Name</TableHead>
                      <TableHead className="text-base">Email</TableHead>
                      <TableHead className="text-base">Role</TableHead>
                      <TableHead className="text-base">Joined</TableHead>
                      <TableHead>
                        <span className="sr-only">Actions</span>
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium text-base">John Doe</TableCell>
                      <TableCell className="text-base">john@example.com</TableCell>
                      <TableCell className="text-base">User</TableCell>
                      <TableCell className="text-base">2023-04-01</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Button className="hover:bg-neutral-900 hover:text-primary-foreground" variant="ghost" size="icon">
                            <FilePenIcon className="h-4 w-4" />
                            <span className="sr-only">Edit</span>
                          </Button>
                          <Button className="hover:bg-red-500 hover:text-primary-foreground" variant="ghost" size="icon">
                            <TrashIcon className="h-4 w-4" />
                            <span className="sr-only">Delete</span>
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium text-base">Jane Smith</TableCell>
                      <TableCell className="text-base">jane@example.com</TableCell>
                      <TableCell className="text-base">User</TableCell>
                      <TableCell className="text-base">2023-05-15</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Button className="hover:bg-neutral-900 hover:text-primary-foreground" variant="ghost" size="icon">
                            <FilePenIcon className="h-4 w-4" />
                            <span className="sr-only">Edit</span>
                          </Button>
                          <Button className="hover:bg-red-500 hover:text-primary-foreground" variant="ghost" size="icon">
                            <TrashIcon className="h-4 w-4" />
                            <span className="sr-only">Delete</span>
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium text-base">Michael Johnson</TableCell>
                      <TableCell className="text-base">michael@example.com</TableCell>
                      <TableCell className="text-base">User</TableCell>
                      <TableCell className="text-base">2023-06-30</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Button className="hover:bg-neutral-900 hover:text-primary-foreground" variant="ghost" size="icon">
                            <FilePenIcon className="h-4 w-4" />
                            <span className="sr-only">Edit</span>
                          </Button>
                          <Button className="hover:bg-red-500 hover:text-primary-foreground" variant="ghost" size="icon">
                            <TrashIcon className="h-4 w-4" />
                            <span className="sr-only">Delete</span>
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="librarians">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Librarians</CardTitle>
                <CardDescription className="text-base">Manage librarian accounts for the library.</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="text-base">Name</TableHead>
                      <TableHead className="text-base">Email</TableHead>
                      <TableHead className="text-base">Role</TableHead>
                      <TableHead className="text-base">Joined</TableHead>
                      <TableHead>
                        <span className="sr-only">Actions</span>
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium text-base">Sarah Lee</TableCell>
                      <TableCell className="text-base">sarah@example.com</TableCell>
                      <TableCell className="text-base">Librarian</TableCell>
                      <TableCell className="text-base">2022-09-01</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Button className="hover:bg-neutral-900 hover:text-primary-foreground" variant="ghost" size="icon">
                            <FilePenIcon className="h-4 w-4" />
                            <span className="sr-only">Edit</span>
                          </Button>
                          <Button className="hover:bg-red-500 hover:text-primary-foreground" variant="ghost" size="icon">
                            <TrashIcon className="h-4 w-4" />
                            <span className="sr-only">Delete</span>
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium text-base">David Kim</TableCell>
                      <TableCell className="text-base">david@example.com</TableCell>
                      <TableCell className="text-base">Librarian</TableCell>
                      <TableCell className="text-base">2023-01-15</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Button className="hover:bg-neutral-900 hover:text-primary-foreground" variant="ghost" size="icon">
                            <FilePenIcon className="h-4 w-4" />
                            <span className="sr-only">Edit</span>
                          </Button>
                          <Button className="hover:bg-red-500 hover:text-primary-foreground" variant="ghost" size="icon">
                            <TrashIcon className="h-4 w-4" />
                            <span className="sr-only">Delete</span>
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium text-base">Emily Chen</TableCell>
                      <TableCell className="text-base">emily@example.com</TableCell>
                      <TableCell className="text-base">Librarian</TableCell>
                      <TableCell className="text-base">2023-03-01</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Button className="hover:bg-neutral-900 hover:text-primary-foreground" variant="ghost" size="icon">
                            <FilePenIcon className="h-4 w-4" />
                            <span className="sr-only">Edit</span>
                          </Button>
                          <Button className="hover:bg-red-500 hover:text-primary-foreground" variant="ghost" size="icon">
                            <TrashIcon className="h-4 w-4" />
                            <span className="sr-only">Delete</span>
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
  )
}
