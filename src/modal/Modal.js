import React from 'react'
import { useGlobalContext } from '../Context.js'
import Back from './Back.js'
import DetailForm from './DetailForm.js'
import Header from './Header.js'
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
