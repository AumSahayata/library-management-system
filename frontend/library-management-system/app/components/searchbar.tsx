import React from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { SearchIcon } from 'lucide-react';

export default function SearchBar() {
  return (
        <div className="flex gap-4">
            <Input type="search" placeholder="Author (e.g: Dan Brown)" className="flex-2 max-w-xs" />
            <Input type="search" placeholder="Title (e.g: Da Vinci Code)" className="flex-2 max-w-xs" />
            <Button className="bg-neutral-900 border-solid border-2 border-primary-foreground text-primary-foreground hover:bg-neutral-900/80 focus:ring-primary"><SearchIcon></SearchIcon></Button>
        </div>
  )
}
