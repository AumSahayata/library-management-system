import React from 'react'
import Link from 'next/link'

export default function Trending() {
  return (
    <section className="mb-8 md:mb-12">
      <div className="flex items-center justify-between mb-4 md:mb-6">
        <h2 className="text-2xl font-bold">New Arrivals</h2>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
        <Link href="#" className="group" prefetch={false}>
          <div className="shadow-md aspect-[2/3] rounded-lg overflow-hidden">
            <img
              src="/placeholder.svg"
              alt="Book Cover"
              width={200}
              height={300}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform"
            />
          </div>
          <div className="mt-2 text-center">
            <h3 className="text-sm font-medium group-hover:text-primary">The Great Gatsby</h3>
          </div>
        </Link>
        <Link href="#" className="group" prefetch={false}>
          <div className="shadow-md aspect-[2/3] rounded-lg overflow-hidden">
            <img
              src="/placeholder.svg"
              alt="Book Cover"
              width={200}
              height={300}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform"
            />
          </div>
          <div className="mt-2 text-center">
            <h3 className="text-sm font-medium group-hover:text-primary">To Kill a Mockingbird</h3>
          </div>
        </Link>
        <Link href="#" className="group" prefetch={false}>
          <div className="shadow-md aspect-[2/3] rounded-lg overflow-hidden">
            <img
              src="/placeholder.svg"
              alt="Book Cover"
              width={200}
              height={300}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform"
            />
          </div>
          <div className="mt-2 text-center">
            <h3 className="text-sm font-medium group-hover:text-primary">1984</h3>
          </div>
        </Link>
        <Link href="#" className="group" prefetch={false}>
          <div className="shadow-md aspect-[2/3] rounded-lg overflow-hidden">
            <img
              src="/placeholder.svg"
              alt="Book Cover"
              width={200}
              height={300}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform"
            />
          </div>
          <div className="mt-2 text-center">
            <h3 className="text-sm font-medium group-hover:text-primary">Pride and Prejudice</h3>
          </div>
        </Link>
        <Link href="#" className="group" prefetch={false}>
          <div className="shadow-md aspect-[2/3] rounded-lg overflow-hidden">
            <img
              src="/placeholder.svg"
              alt="Book Cover"
              width={200}
              height={300}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform"
            />
          </div>
          <div className="mt-2 text-center">
            <h3 className="text-sm font-medium group-hover:text-primary">The Catcher in the Rye</h3>
          </div>
        </Link>
      </div>
    </section>
  )
}
