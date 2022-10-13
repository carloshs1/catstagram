import React from 'react'

const HistoryItem: React.FC<{ url: string }> = ({ url }) => {
 return (
  <div className="cursor-pointer col-span-1 bg-white my-7 mx-2 sm:mx-3 border rounded-lg overflow-hidden">
   <img
    className="object-cover w-full h-[400px]"
    src={url}
    alt="A wonderful cat"
   />
  </div>
 )
}

export default HistoryItem
