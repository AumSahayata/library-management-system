import React from 'react'
import Link from "next/link"
const API_KEY = "AIzaSyD2-rIHZIVtE5n9JKmQT_xhqp7VZo91gWY"
const getBooks = async (author,title) => {
    try {
        const responses = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${title}+inauthor:${author}&key=${API_KEY}`)
        const data = responses.json()
        return data
    } catch (error) {
        
    }
}

export default async function Books({author,title}) {
   const data = await getBooks(author,title)
   console.log(data)
  return (
    <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div className="bg-card rounded-lg overflow-hidden shadow-lg">
          <Link href="#" className="block" prefetch={false}>
            <img
              src="/placeholder.svg"
              alt="Book Cover"
              width={300}
              height={400}
              className="w-full h-[400px] object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-1">The Great Gatsby</h3>
              <p className="text-muted-foreground">F. Scott Fitzgerald</p>
            </div>
          </Link>
        </div>
        <div className="bg-card rounded-lg overflow-hidden shadow-lg">
          <Link href="#" className="block" prefetch={false}>
            <img
              src="/placeholder.svg"
              alt="Book Cover"
              width={300}
              height={400}
              className="w-full h-[400px] object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-1">To Kill a Mockingbird</h3>
              <p className="text-muted-foreground">Harper Lee</p>
            </div>
          </Link>
        </div>
        <div className="bg-card rounded-lg overflow-hidden shadow-lg">
          <Link href="#" className="block" prefetch={false}>
            <img
              src="/placeholder.svg"
              alt="Book Cover"
              width={300}
              height={400}
              className="w-full h-[400px] object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-1">To Kill a Mockingbird</h3>
              <p className="text-muted-foreground">Harper Lee</p>
            </div>
          </Link>
        </div>
        <div className="bg-card rounded-lg overflow-hidden shadow-lg">
          <Link href="#" className="block" prefetch={false}>
            <img
              src="/placeholder.svg"
              alt="Book Cover"
              width={300}
              height={400}
              className="w-full h-[400px] object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-1">1984</h3>
              <p className="text-muted-foreground">George Orwell</p>
            </div>
          </Link>
        </div>
        </div>
    </div>
  )
}
