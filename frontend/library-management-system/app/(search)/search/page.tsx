"use client";

import React from 'react'
import Books from '@/app/components/books';
import SearchBar from '@/app/components/searchbar';
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { useState } from "react";

const  SearchPage =( {
    div,
  input,
  searchValue,
}: {
  div: string;
  input: string;
  searchValue?: string | null;
}) => {
  const router = useRouter();
  const [query, setQuery] = useState(searchValue ? searchValue : "");
  const handleSearchChange = (e) => {
    if (e.key === "Enter") {
      if(query==='') return;
      router.push(`/search?q=${query}`);
    }
  };
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Search Library</h1>
    <SearchBar/>
      </div>
      <Books></Books>
    </div>
    
  )
}

export default SearchPage;