import axios from 'axios'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect } from 'react'
import { useSetRecoilState } from 'recoil'
import { breedsState } from '../atoms/breedsAtom'
import Feed from '../components/Feed'
import Header from '../components/Header'
import Modal from '../components/Modal'
import { breedsType } from '../utils/types'

const Home: NextPage = () => {
 const setBreeds = useSetRecoilState(breedsState)
 useEffect(() => {
  const fetchBreeds = async () => {
   try {
    const { data } = await axios.get('/api/breeds')
    setBreeds(data.filter((breed: breedsType) => breed.image))
   } catch (err) {
    console.warn(err)
   }
  }
  fetchBreeds()
 }, [])
 return (
  <div className="bg-gray-50 h-screen overflow-y-scroll scrollbar-hide">
   <Head>
    <title>Catstagram</title>
    <link rel="icon" href="/favicon.ico" />
   </Head>

   {/* Header */}
   <Header />

   {/* Feed */}
   <Feed />

   {/* Modal */}
   <Modal />
  </div>
 )
}

export default Home
