"use client"
import React, { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation";
import { SearchIcon } from 'lucide-react';



export default function SearchBar() {
    const router = useRouter();
    const [titleQuery,settitleQuery] = useState("")
    const [authorQuery,setauthorQuery] = useState("")
    const handleSearchChange = (e) => {
          if(titleQuery===''&& authorQuery==='') return;
          if(titleQuery && authorQuery==='') router.push(`/search?title=${titleQuery}`);
          else if(titleQuery==='' && authorQuery) router.push(`/search?author=${authorQuery}`);
          else router.push(`/search?author=${authorQuery}&title=${titleQuery}`);

      };
  return (
        <div className="flex gap-4">
            <Input 
            value = {authorQuery}
            onChange={(e) => setauthorQuery(e.target.value)} 
            type="search" placeholder="Author (e.g: Dan Brown)" className="flex-2 max-w-xs text-neutral-900 focus:text-neutral-900" />
            <Input 
            type="search" 
            value = {titleQuery}
            onChange={(e) => settitleQuery(e.target.value)} 
            placeholder="Title (e.g: Da Vinci Code)" className="flex-2 max-w-xs text-neutral-900 focus:text-neutral-900" />
            <Button onClick={handleSearchChange} className="bg-neutral-900 border-solid border-2 border-primary-foreground text-primary-foreground hover:bg-neutral-900/80 focus:ring-primary"><SearchIcon></SearchIcon></Button>
        </div>
  )
}
