import React from 'react'
import { imageType } from '../utils/types'

const Post: React.FC<{ image: imageType }> = ({ image }) => {
 const { url } = image
 return (
  <div className="col-span-1 bg-white my-7 mx-2 sm:mx-3 border rounded-sm">
   <img
    className="object-cover w-full h-[400px]"
    src={url}
    alt="A wonderful cat"
   />
  </div>
 )
}

export default Post
