import React from 'react'
import { useGlobalContext } from '../Context'
import Back from './Back'
import DetailForm from './DetailForm'
import Header from './Header'
import './modal.css'

function Modal() {
  const {page} = useGlobalContext()
  return (
    <div className='overlay'>
        <div className="modal">
          {page ===2 && <Back />}
           <Header/>
           <DetailForm/>
        </div>
    </div>
  )
}

export default Modal
