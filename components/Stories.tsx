import React, { useEffect, useState } from 'react'
import { shuffleBreeds } from '../utils/functions'
import { mockBreeds } from '../utils/mock'
import { breedsType } from '../utils/types'
import Story from './Story'

const Stories: React.FC = () => {
 const [breeds, setBreeds] = useState<breedsType[]>([])
 useEffect(() => {
  const breeds = [...Array(20)].map((_, i) => ({
   ...mockBreeds[i],
  }))
  setBreeds(breeds)
 }, [])
 return (
  <div className="flex space-x-2 mx-2 p-6 bg-white mt-8 border-gray-200 border rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black md:max-w-3xl">
   {breeds &&
    shuffleBreeds(breeds).map((breed) => (
     <Story key={breed.id} breed={breed} />
    ))}
  </div>
 )
}

export default Stories
