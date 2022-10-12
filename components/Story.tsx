import React from 'react'
import { breedsType } from '../utils/types'

const Story: React.FC<{ breed: breedsType }> = ({ breed }) => {
 const {
  name,
  image: { url },
 } = breed
 return (
  <div>
   <img
    className="h-14 w-14 rounded-full p-[1.5px] border-red-500 border-2 object-cover hover:scale-110 transition transform duration-200 ease-out cursor-pointer"
    src={url}
    alt={name}
   />
   <p className="text-xs w-14 truncate text-center">{name}</p>
  </div>
 )
}

export default Story
