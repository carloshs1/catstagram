import React, { useCallback, useRef } from 'react'
import { useRecoilState } from 'recoil'
import { fetchImagesState } from '../atoms/fetchImagesAtom'
import { imageType } from '../utils/types'
import Post from './Post'
import useSelectBreed from '../hooks/useSelectBreed'

const Posts: React.FC = () => {
 const [fetchImagesParams, setFetchImagesParams] =
  useRecoilState(fetchImagesState)
 const { query, pageNumber } = fetchImagesParams
 const observer: any = useRef()
 const {
  loading,
  error,
  images,
  hasMore,
 }: {
  loading: boolean
  error: boolean
  images: imageType[]
  hasMore: boolean
 } = useSelectBreed(query, pageNumber)

 const lastImageRef = useCallback(
  (node: any) => {
   if (loading) return
   if (observer.current) observer.current.disconnect()
   observer.current = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting && hasMore) {
     setFetchImagesParams((prevState) => ({
      ...prevState,
      pageNumber: prevState.pageNumber + 1,
     }))
    }
   })
   if (node) observer.current.observe(node)
  },
  [loading, hasMore]
 )
 return (
  <div className="grid grid-cols-1 max-w-md md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto">
   {images &&
    images.map((image, index) => {
     if (images.length === index + 1) {
      return <Post innerRef={lastImageRef} key={image.id} image={image} />
     } else {
      return <Post key={image.id} image={image} />
     }
    })}
   <div className="text-center col-span-1 bg-white my-7 mx-2 sm:mx-3 border rounded-sm">
    {loading && 'Loading...'}
   </div>
   <div className="text-center col-span-1 bg-white my-7 mx-2 sm:mx-3 border rounded-sm">
    {error && 'Error'}
   </div>
  </div>
 )
}

export default Posts
