import React, { Fragment, useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { modalState } from '../atoms/modalAtom'
import { Dialog, Transition } from '@headlessui/react'
import axios from 'axios'

const Modal: React.FC = () => {
 const [modalOpen, setModalOpen] = useRecoilState(modalState)
 const [modalInfo, setModalInfo] = useState({
  title: null,
  url: null,
  description: null,
 })
 const { id, type } = modalOpen
 const { title, url, description } = modalInfo
 useEffect(() => {
  const getCat = async () => {
   try {
    const { data } = await axios.get(`/api/modal/${id}/image`)
    console.warn({ data })
    setModalInfo({
     url: data.url,
     title: type === 'breed' ? data.breeds[0].name : '',
     description: type === 'breed' ? data.breeds[0].description : '',
    })
   } catch (err) {
    console.warn({ err })
   }
  }
  if (id) getCat()
 }, [modalOpen])

 return (
  <Transition.Root show={Boolean(id)} as={Fragment}>
   <Dialog
    as="div"
    className="fixed x-10 inset-0 overflow-y-auto"
    onClose={() => {
     setModalOpen({
      id: null,
      type: null,
     })
     setTimeout(
      () =>
       setModalInfo({
        title: null,
        url: null,
        description: null,
       }),
      200
     )
    }}
   >
    <div className="flex items-end justify-center min-h-[800px] sm:min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
     <Transition.Child
      as={Fragment}
      enter="ease out duration-300"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="ease-in duration-200"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
     >
      <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
     </Transition.Child>
     <span
      className="hidden sm:inline-block sm:align-middle sm:h-screen"
      aria-hidden="true"
     >
      &#8203;
     </span>
     <Transition.Child
      as={Fragment}
      enter="ease out duration-300"
      enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
      enterTo="opacity-100 translate-y-0 sm:scale-100"
      leave="ease-in duration-200"
      leaveFrom="opacity-100 translate-y-0 sm:scale-100"
      leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
     >
      <div className="max-h-[600px] inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-y-scroll scrollbar-thin scrollbar-thumb-black shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-md md:max-w-xl sm:w-full sm:p-6">
       {title && <h1 className="text-center">{title}</h1>}
       <img
        className="object-cover w-full h-[400px] my-3"
        src={url ? url : ''}
        alt={title ? title : ''}
       />
       {description ? (
        <p>{description}</p>
       ) : (
        <p>No information available at the moment, we are working on it :)</p>
       )}
      </div>
     </Transition.Child>
    </div>
   </Dialog>
  </Transition.Root>
 )
}

export default Modal
