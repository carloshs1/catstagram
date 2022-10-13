import React from 'react'
import { useSetRecoilState } from 'recoil'
import { modalState } from '../atoms/modalAtom'
import { imageType } from '../utils/types'
import { db } from '../firebase'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { useSession } from 'next-auth/react'

const Post: React.FC<{ image: imageType; innerRef?: (node: any) => void }> = ({
 image,
 innerRef,
}) => {
 const { data: session } = useSession()
 const { url } = image
 const setOpen = useSetRecoilState(modalState)
 const handleClick = async () => {
  if (session) {
   const imageRef = await addDoc(collection(db, 'history'), {
    name: session?.user?.name,
    email: session?.user?.email,
    profileImg: session?.user?.image,
    id: image.id,
    type: 'image',
    timestamp: serverTimestamp(),
   })
   console.warn({ imageRef })
  }
  setOpen({ id: image.id, type: 'image' })
 }
 return (
  <div
   ref={innerRef}
   className="cursor-pointer col-span-1 bg-white my-7 mx-2 sm:mx-3 border rounded-lg overflow-hidden"
   onClick={handleClick}
  >
   <img
    className="object-cover w-full h-[400px]"
    src={url}
    alt="A wonderful cat"
   />
  </div>
 )
}

export default Post
