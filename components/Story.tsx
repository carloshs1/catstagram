import React from 'react'
import { useSetRecoilState } from 'recoil'
import { modalState } from '../atoms/modalAtom'
import { breedsType } from '../utils/types'
import { db } from '../firebase'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { useSession } from 'next-auth/react'

const Story: React.FC<{ breed: breedsType }> = ({ breed }) => {
 const { data: session } = useSession()
 const {
  name,
  image: { url, id },
 } = breed
 const setOpen = useSetRecoilState(modalState)
 const handleClick = async () => {
  if (session) {
   const imageRef = await addDoc(collection(db, 'history'), {
    name: session?.user?.name,
    email: session?.user?.email,
    profileImg: session?.user?.image,
    id,
    type: 'breed',
    timestamp: serverTimestamp(),
   })
   console.warn({ imageRef })
  }
  setOpen({ id, type: 'breed' })
 }
 return (
  <div>
   <img
    className="h-14 w-14 rounded-full p-[1.5px] border-red-500 border-2 object-cover hover:scale-110 transition transform duration-200 ease-out cursor-pointer"
    src={url}
    alt={name}
    onClick={handleClick}
   />
   <p className="text-xs w-14 truncate text-center">{name}</p>
  </div>
 )
}

export default Story
