import React from 'react'
import RadioButton from './RadioButton.js'
import owncompany from "../logos/owncompany.svg"
import clients from "../logos/clients.svg"
import Try from '../Try.js'
import { useGlobalContext } from '../Context.js'

function Options() {

  const {radio,
    setSelectedRadio,
    setCompanyName,
    setHireForName,
    setconsultancyName} = useGlobalContext()

  const planData = [

    {
      id: 1,
      logo: owncompany,
      heading: "My Own Company",
      des: `I’m an owner/employee of a business or a company/enterprise.`
    },
    {
      id: 2,
      logo: clients,
      heading: "My clients",
      des: `I’m an owner/employee of a business or a company/enterprise.`
    }

  ]


  const handleClick = (plan) =>{

  
    if(plan.id === 1){

      setHireForName("")
      setconsultancyName("")


    } else if(plan.id === 2){
        setCompanyName("")


    }

    setSelectedRadio(plan.id)

  }


  return (
    <div className='options'>

      {planData.map((plan) => {
        return (
          <RadioButton handleClick={handleClick} key = {plan.id} plan = {plan} />
        )
      
      })}

    </div>
  )
}

export default Options
