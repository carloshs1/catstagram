import type { NextPage } from 'next'
import Head from 'next/head'
import { useRecoilValue } from 'recoil'
import { modalState } from '../atoms/modalAtom'
import Feed from '../components/Feed'
import Header from '../components/Header'

const Home: NextPage = () => {
 const modal = useRecoilValue(modalState)
 console.warn({ modal })
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
  </div>
 )
}

export default Home
