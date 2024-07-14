import React from 'react'
import Link from "next/link"

const API_KEY = "AIzaSyD2-rIHZIVtE5n9JKmQT_xhqp7VZo91gWY"

export const getBooks = async (author: string, title: string) => {
    try {
        let url
        if (title && author === undefined) {
            url = `https://www.googleapis.com/books/v1/volumes?q=${title}&key=${API_KEY}`
        } else {
            url = `https://www.googleapis.com/books/v1/volumes?q=${title}+inauthor:${author}&key=${API_KEY}`
        }
        console.log(url)

        const response = await fetch(url)
        const data = await response.json()
        return data
    } catch (error) {
        console.error("Error fetching books:", error)
        return { items: [] }
    }
}

export default async function Books({ author, title }: { author: string, title: string }) {
    const data = await getBooks(author, title)
    const books = data.items || []

    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {books.map((book: any) => (
                    <div key={book.id} className="bg-card rounded-lg overflow-hidden shadow-lg">
                        <Link href={book.volumeInfo.previewLink} className="block" prefetch={false}>
                            <img
                                src={book.volumeInfo.imageLinks?.thumbnail || '/placeholder.svg'}
                                alt="Book Cover"
                                width={300}
                                height={400}
                                className="w-full h-[400px] object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold mb-1">{book.volumeInfo.title}</h3>
                                <p className="text-muted-foreground">{book.volumeInfo.authors?.join(', ')}</p>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}
