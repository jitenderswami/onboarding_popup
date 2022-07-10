import React from 'react'
import Back from './Back'
import DetailForm from './DetailForm'
import Header from './Header'
import './modal.css'

function Modal() {
  return (
    <div className='overlay'>
        <div className="modal">
            <Back />
           <Header/>
           <DetailForm/>
        </div>
    </div>
  )
}

export default Modal
