import React from 'react'
import { useRecoilValue } from 'recoil'
import { breedsState } from '../atoms/breedsAtom'
import { shuffleBreeds } from '../utils/functions'
import Story from './Story'

const Stories: React.FC = () => {
 const breeds = useRecoilValue(breedsState)
 return (
  <div className="flex space-x-2 mx-2 p-6 bg-white mt-8 border-gray-200 border rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black md:max-w-3xl">
   {shuffleBreeds(breeds.slice(0)).map((breed) => (
    <Story key={breed.id} breed={breed} />
   ))}
  </div>
 )
}

export default Stories
