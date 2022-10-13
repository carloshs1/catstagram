import React from 'react'
import { HomeIcon, QueueListIcon } from '@heroicons/react/24/solid'
import { useSession, signIn, signOut } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { breedsState } from '../atoms/breedsAtom'
import { fetchImagesState } from '../atoms/fetchImagesAtom'

const Header: React.FC = () => {
 const { data: session } = useSession()
 const router = useRouter()
 const breeds = useRecoilValue(breedsState)

 const setFetchImagesParams = useSetRecoilState(fetchImagesState)

 const handleChange = (e: any) => {
  setFetchImagesParams({ pageNumber: 0, query: e.target.value })
 }

 return (
  <div className="shadow-sm border-b bg-white sticky top-0 z-50 px-1 sm:px-3">
   <div className="flex justify-between align-middle max-w-6xl lg:mx-auto min-h-[70px]">
    {/* left  */}
    <div
     className="cursor-pointer flex justify-center items-center space-x-4"
     onClick={() => router.push('/')}
    >
     <img
      src="https://api.thecatapi.com/favicon.ico"
      alt="Catstagram logo"
      className="h-6 object-cover cursor-pointer hover:scale-125 transition duration-150 ease-out"
     />
     <h1 className="hidden sm:inline-grid">Catstagram</h1>
    </div>

    {/* Middle  */}
    {router.pathname === '/' && (
     <div className="max-w-xs">
      <div className="mt-1 p-3 rounded-md">
       <select
        className="bg-gray-50 block w-full text-sm border-gray-300 focus:ring-black focus:border-black hover:border-gray-500 rounded-md"
        name="select"
        defaultValue=""
        onChange={handleChange}
       >
        <option value="">Select Breed</option>
        {breeds &&
         breeds.map((breed) => (
          <option value={breed.id} key={breed.id}>
           {breed.name}
          </option>
         ))}
       </select>
      </div>
     </div>
    )}

    {/* Right  */}
    <div className="flex items-center justify-end space-x-4">
     <HomeIcon
      className="h-6 hidden sm:inline-grid cursor-pointer hover:scale-125 transition duration-150 ease-out"
      onClick={() => router.push('/')}
     />
     {session && (
      <QueueListIcon
       className="h-6 cursor-pointer hover:scale-125 transition duration-150 ease-out"
       onClick={() => router.push('/history')}
      />
     )}

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
