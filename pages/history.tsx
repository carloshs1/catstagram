import {
 collection,
 DocumentData,
 getDocs,
 // onSnapshot,
 orderBy,
 query,
 QueryDocumentSnapshot,
 where,
} from 'firebase/firestore'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import HistoryItem from '../components/HistoryItem'
import { db } from '../firebase'

const history = () => {
 const { data: session } = useSession()
 const router = useRouter()
 const [state, setState] = useState<{
  loading: boolean
  items: QueryDocumentSnapshot<DocumentData>[]
 }>({
  loading: true,
  items: [],
 })
 const { loading, items } = state

 useEffect(() => {
  const userIsLoggedIn = () => {
   if (!session) {
    return router.push('/')
   }
  }
  userIsLoggedIn()
  const fetchDocs = async () => {
   const res = await getDocs(
    query(
     collection(db, 'history'),
     orderBy('timestamp', 'desc'),
     where('email', '==', `${session?.user?.email}`)
    )
   )
   setState({ loading: false, items: res.docs })
  }
  fetchDocs()
 }, [])

 return (
  <>
   <Header />
   <h1 className="my-4 ml-3 text-xl text-center w-full">Browsing History</h1>
   {loading ? (
    <div className="text-center w-full">Loading...</div>
   ) : (
    <div className="grid grid-cols-1 max-w-md md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto">
     {items &&
      [...Array.from(new Map(items.map((m) => [m.data().id, m])).values())].map(
       (item) => <HistoryItem key={item.data().id} url={item.data().url} />
      )}
     {!items.length && (
      <div className="col-span-1 py-3 text-center bg-white my-7 mx-2 sm:mx-3 border rounded-lg overflow-hidden">
       No items yet
      </div>
     )}
    </div>
   )}
  </>
 )
}

export default history
