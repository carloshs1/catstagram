import React from 'react'
import { useRecoilState } from 'recoil'
import { modalState } from '../atoms/modalAtom'
import { breedsType } from '../utils/types'

const Story: React.FC<{ breed: breedsType }> = ({ breed }) => {
 // console.warn(breed)
 // if (!breed.image) return null
 const {
  name,
  image: { url, id },
 } = breed
 const [open, setOpen] = useRecoilState(modalState)
 return (
  <div>
   <img
    className="h-14 w-14 rounded-full p-[1.5px] border-red-500 border-2 object-cover hover:scale-110 transition transform duration-200 ease-out cursor-pointer"
    src={url}
    alt={name}
    onClick={() => setOpen({ id, type: 'breed' })}
   />
   <p className="text-xs w-14 truncate text-center">{name}</p>
  </div>
 )
}

export default Story
