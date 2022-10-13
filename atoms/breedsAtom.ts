import { atom } from 'recoil'
import { breedsType } from '../utils/types'

export const breedsState = atom<breedsType[]>({
 key: 'breedsState',
 default: [],
})
