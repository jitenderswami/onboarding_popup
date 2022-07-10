import React from 'react'
import { useGlobalContext } from '../Context'

function PrimaryButton() {
  const {page,setPage} = useGlobalContext()
  let btext

  if(page==1){btext="Continue"}else{btext="Continue to post a job"}

  const handleButton = (e) =>{
    e.stopPropagation();
    e.preventDefault(e);
    setPage(2) 
  }
  return (
        <button  className='primarybutton' onClick={handleButton}> {btext}</button>
  )
}

export default PrimaryButton
