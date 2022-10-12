import React from 'react'
import Posts from './Posts'
import Stories from './Stories'

const Feed: React.FC = () => {
 return (
  <main className="grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto">
   <section className="col-span-1 md:col-span-3 flex justify-center">
    {/* Stories */}
    <Stories />
   </section>

   <section className="col-span-1 md:col-span-2 xl:col-span-3">
    {/* Posts  */}
    <Posts />
   </section>
  </main>
 )
}

export default Feed
