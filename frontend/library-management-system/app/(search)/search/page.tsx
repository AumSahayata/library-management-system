import React from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { SearchIcon } from 'lucide-react';
import { Label } from "@/components/ui/label"
import Books from '@/app/components/books';
export default function SearchPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Search Library</h1>
        <div className="flex gap-4">
        <Input type="search" placeholder="Author (e.g: Dan Brown)" className="flex-2 max-w-xs" />
            <Input type="search" placeholder="Title (e.g: Da Vinci Code)" className="flex-2 max-w-xs" />
            <Button className="bg-neutral-900 border-solid border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/90 hover:text-neutral-900 focus:ring-primary"><SearchIcon></SearchIcon></Button>
        </div>
      </div>
      <Books></Books>
    </div>
    
  )
}
