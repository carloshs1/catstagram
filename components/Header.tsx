import React, { useEffect, useState } from 'react'
import { HomeIcon } from '@heroicons/react/24/solid'
import { breedsType } from '../utils/types'
import { mockBreeds } from '../utils/mock'
import { useSession, signIn, signOut } from 'next-auth/react'

const Header: React.FC = () => {
 const { data: session } = useSession()
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
    <div className="flex items-center justify-end space-x-4 mr-3">
     <HomeIcon className="h-6 cursor-pointer hover:scale-125 transition duration-150 ease-out" />

     {session ? (
      <img
       onClick={() => signOut()}
       className="h-10 w-10 rounded-full cursor-pointer hover:scale-105 transition duration-100 ease-out"
       src={session?.user?.image || ''}
       alt="Profile Image"
      />
     ) : (
      <button onClick={() => signIn()}>Sign In</button>
     )}
    </div>
   </div>
  </div>
 )
}

export default Header
