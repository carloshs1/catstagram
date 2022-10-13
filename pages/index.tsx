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

const Home: NextPage<{ data: breedsType[] }> = ({ data }) => {
 const setBreeds = useSetRecoilState(breedsState)
 useEffect(() => {
  const fetchBreeds = async () => {
   try {
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

export const getServerSideProps = async () => {
 const { data } = await axios.get('https://api.thecatapi.com/v1/breeds', {
  headers: {
   'Content-type': 'application/json',
   'x-api-key':
    'live_YjJgRJ2MhOPTkpQzcU19Bk0PHN4bbtvLbzFA2zw6PKZpqyMDFBisnCVT4jHwVe3z',
  },
 })
 return {
  props: {
   data,
  },
 }
}

export default Home
