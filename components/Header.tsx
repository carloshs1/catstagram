import React, { useEffect, useState } from 'react'
import { HomeIcon } from '@heroicons/react/24/solid'
import { breedsType } from '../utils/types'
import { mockBreeds } from '../utils/mock'

const Header: React.FC = () => {
 const [breeds, setBreeds] = useState<breedsType[]>([])
 useEffect(() => {
  const breeds = [...Array(20)].map((_, i) => ({
   ...mockBreeds[i],
  }))
  setBreeds(breeds)
 }, [])
 return (
  <div className="shadow-sm border-b bg-white sticky top-0 z-50">
   <div className="flex justify-between align-middle max-w-6xl lg:mx-auto">
    {/* left  */}
    <div className="cursor-pointer flex justify-center items-center">
     <h1 className="ml-3">Catstagram</h1>
    </div>

    {/* Middle  */}
    <div className="max-w-xs">
     <div className="mt-1 p-3 rounded-md">
      <select
       className="bg-gray-50 block w-full text-sm border-gray-300 focus:ring-black focus:border-black hover:border-gray-500 rounded-md"
       name="select"
       defaultValue=""
      >
       <option>Select Breed</option>
       {breeds &&
        breeds.map((breed) => (
         <option value={breed.name} key={breed.id}>
          {breed.name}
         </option>
        ))}
      </select>
     </div>
    </div>

    {/* Right  */}
    <div className="flex items-center justify-end space-x-4">
     <HomeIcon className="h-6 cursor-pointer hover:scale-125 transition duration-150 ease-out" />
     <img
      className="h-10 rounded-full cursor-pointer"
      src="https://cdn2.thecatapi.com/images/xnsqonbjW.jpg"
      alt="Profile Image"
     />
    </div>
   </div>
  </div>
 )
}

export default Header
