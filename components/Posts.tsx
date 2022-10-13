import React from 'react'
import { useRecoilValue } from 'recoil'
import { fetchImagesState } from '../atoms/fetchImagesAtom'
import { imageType } from '../utils/types'
import Post from './Post'
import useSelectBreed from '../hooks/useSelectBreed'

const Posts: React.FC = () => {
 const fetchImagesParams = useRecoilValue(fetchImagesState)
 const { query, pageNumber } = fetchImagesParams
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
 console.warn(images)
 return (
  <div className="grid grid-cols-1 max-w-md md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto">
   {images && images.map((image) => <Post key={image.id} image={image} />)}
   <div>{loading && 'Loading...'}</div>
   <div>{error && 'Error'}</div>
  </div>
 )
}

export default Posts
