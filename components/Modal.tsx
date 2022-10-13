import React from 'react'
import { useRecoilState } from 'recoil'
import { modalState } from '../atoms/modalAtom'

const Modal: React.FC = () => {
 const [modalData, setModalData] = useRecoilState(modalState)

 return (
  <div>
   <h1>Modal</h1>
   {modalData.id && <p>The modal is open</p>}
  </div>
 )
}

export default Modal
