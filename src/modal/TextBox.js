import React from 'react'
import { useGlobalContext } from '../Context'

const TextBox = () => {
  const {page} = useGlobalContext()
  let h,d
  if(page==1){
    h = "Welcome"
    d = "Since this is your first job posting, let’s setup your company account."
  } else{

    h = "Whom are you hiring for?"
    d = "Choose any option below"

  }
  return (
    <div className='textbox'>
        <h2>{h}</h2>
        <p>{d}</p>
    </div>
  )
}

export default TextBox
