import { atom } from 'recoil'

export const modalState = atom<{
 id: string | null
 type: 'breed' | 'image' | null
}>({
 key: 'modalState',
 default: {
  id: null,
  type: null,
 },
})
