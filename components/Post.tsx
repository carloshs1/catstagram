import React from 'react'
import { useRecoilState } from 'recoil'
import { modalState } from '../atoms/modalAtom'
import { imageType } from '../utils/types'

const Post: React.FC<{ image: imageType; innerRef?: (node: any) => void }> = ({
 image,
 innerRef,
}) => {
 const { url } = image
 const [open, setOpen] = useRecoilState(modalState)
 return (
  <div
   ref={innerRef}
   className="cursor-pointer col-span-1 bg-white my-7 mx-2 sm:mx-3 border rounded-sm"
   onClick={() => setOpen({ id: image.id, type: 'image' })}
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
