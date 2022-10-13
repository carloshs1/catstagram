import { atom } from 'recoil'

export const fetchImagesState = atom<{
 query: string
 pageNumber: number
}>({
 key: 'fetchImagesState',
 default: {
  query: '',
  pageNumber: 0,
 },
})
