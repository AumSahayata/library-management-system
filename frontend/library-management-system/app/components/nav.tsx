import React from 'react'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BookIcon } from 'lucide-react';
import { Input } from "@/components/ui/input"
import { SearchIcon } from 'lucide-react';

const Navbar = () => {
  return (
    <>
    <header className="bg-neutral-900 text-primary-foreground py-4 px-6 flex items-center justify-between">
    <div className="flex items-center gap-6">
      <Link href="/" className="text-xl font-bold flex items-center gap-2" prefetch={false}>
        <BookIcon className="h-6 w-6" />
        Library
      </Link>
    </div>
    <div className="flex items-center gap-4">
      <Link href="/sign-up">
        <Button className="bg-neutral-900 border-solid border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/90 hover:text-neutral-900 focus:ring-primary">Sign In</Button>
      </Link>
    </div>
  </header>
        <main className="flex-1">
        <section className="bg-neutral-900 py-20 px-6 text-primary-foreground">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-5xl font-bold">Unlock the World of Books</h1>
            <p className="text-xl">Explore our vast collection of books and find your perfect match.</p>
            <div className="flex justify-center gap-4">
              <Input type="search" placeholder="Author (e.g: Dan Brown)" className="flex-2 max-w-xs" />
              <Input type="search" placeholder="Title (e.g: Da Vinci Code)" className="flex-2 max-w-xs" />
              <Button className="bg-neutral-900 border-solid border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/90 hover:text-neutral-900 focus:ring-primary"><SearchIcon></SearchIcon></Button>
            </div>
          </div>
        </section>
        </main>
        </>
  )
}

export default Navbar