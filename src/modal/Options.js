import React from 'react'
import RadioButton from './RadioButton'
import owncompany from "../logos/owncompany.svg"
import clients from "../logos/clients.svg"

function Options() {
  const des1 = "I’m an owner/employee of a business or a company/enterprise."
  const des2 = "I’m a consultant working for staffing or manpower consultancy."
  return (
    <div className='options'>
        <RadioButton logo={owncompany} heading={"My Own Company"} des={des1}/>
        <RadioButton logo={clients} heading={"My clients"} des={des2}/> 
    </div>
  )
}

export default Options
