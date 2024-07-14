import React from 'react'
import NewArrivals from '../components/newarrivals'
import Trending from '../components/trendings'

function Home() {
  return (
    <main className="flex-1 py-8 md:py-12">
      <div className="container">
        <NewArrivals />
        <Trending />
      </div>
    </main>
  )
}

export default Home