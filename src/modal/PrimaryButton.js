import React from 'react'
import { useGlobalContext } from '../Context.js'

function PrimaryButton() {
  const {page,setPage,buttonDisabled,finalobject} = useGlobalContext()
  
  let btext

  if(page===1){btext="Continue"}else{btext="Continue to post a job"}

  const handleButton = (e) =>{
    e.stopPropagation();
    e.preventDefault(e);
    setPage(page => page+1) 
  }
  return (
        <button  disabled={buttonDisabled} className='primarybutton' onClick={handleButton}> {btext}</button>
  )
}

export default PrimaryButton
