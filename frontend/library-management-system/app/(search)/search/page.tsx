import React from 'react'
import Books from '@/app/components/books';
import SearchBar from '@/app/components/searchbar';
export default function SearchPage({
    searchParams,
  }: {
    searchParams: { [key: string]: string | undefined };
  } ) {
    console.log(searchParams)
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Search Library</h1>
    <SearchBar/>
      </div>
      <Books  author={searchParams['author']} title={searchParams['title']}/>
    </div>
    
  )
}
