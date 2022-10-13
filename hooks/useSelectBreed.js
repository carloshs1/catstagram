import axios from 'axios'
import { useEffect, useState } from 'react'

export default function useSelectBreed(query, pageNumber) {
 const [loading, setLoading] = useState(true)
 const [error, setError] = useState(false)
 const [images, setImages] = useState([])
 const [hasMore, setHasMore] = useState(false)
 useEffect(() => {
  setImages([])
 }, [query])

 useEffect(() => {
  setLoading(true)
  setError(false)
  let cancel
  axios({
   method: 'GET',
   url: 'https://api.thecatapi.com/v1/images/search',
   params: { breed_id: query, page: pageNumber, limit: 5, order: 'asc' },
   headers: {
    'Content-type': 'application/json',
    'x-api-key':
     'live_YjJgRJ2MhOPTkpQzcU19Bk0PHN4bbtvLbzFA2zw6PKZpqyMDFBisnCVT4jHwVe3z',
   },
   cancelToken: new axios.CancelToken((c) => (cancel = c)),
  })
   .then((res) => {
    const { 'pagination-count': count } = res.headers
    setImages((previousImages) => {
     return [...new Set([...previousImages, ...res.data])]
    })
    setHasMore(Boolean(+count > images.length))
    setLoading(false)
   })
   .catch((e) => {
    if (axios.isCancel(e)) return
    setError(true)
   })
  return () => cancel()
 }, [query, pageNumber])
 return { loading, error, images, hasMore }
}
