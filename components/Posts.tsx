import React, { useEffect, useState } from 'react'
import { mockImages } from '../utils/mock'
import { imageType } from '../utils/types'
import Post from './Post'

const Posts: React.FC = () => {
 const [images, setImages] = useState<imageType[]>([])
 useEffect(() => {
  const images = [...Array(20)].map((_, i) => mockImages[i])
  setImages(images)
 }, [])
 return (
  <div className="grid grid-cols-1 max-w-md md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto">
   {images && images.map((image) => <Post key={image.id} image={image} />)}
  </div>
 )
}

export default Posts
