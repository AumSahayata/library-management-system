import React from 'react'
import Link from 'next/link'

export default function NewArrivals() {
  return (
    <section>
      <div className="flex items-center justify-between mb-4 md:mb-6">
        <h2 className="text-2xl font-bold">Trending Books</h2>
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
            <h3 className="text-sm font-medium group-hover:text-primary">The Kite Runner</h3>
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
            <h3 className="text-sm font-medium group-hover:text-primary">The Alchemist</h3>
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
            <h3 className="text-sm font-medium group-hover:text-primary">The Hunger Games</h3>
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
            <h3 className="text-sm font-medium group-hover:text-primary">The Book Thief</h3>
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
            <h3 className="text-sm font-medium group-hover:text-primary">The Fault in Our Stars</h3>
          </div>
        </Link>
      </div>
    </section>
  )
}
