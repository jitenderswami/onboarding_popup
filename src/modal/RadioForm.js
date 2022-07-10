import React from 'react'
import { useGlobalContext } from '../Context'
import InputField from './InputField'

function RadioForm() {
  const{SelectedRadio} = useGlobalContext()
  return (
    <>
        {SelectedRadio === "My Own Company" && (
            <>
           <InputField label={"Your company name"} placeholder ={"Example: apna"}/>
           <InputField label={"Company Website"} placeholder={"Example: www.companyname.com"}/>
           </>

        )}
        {SelectedRadio === "My clients" && (
          <>
          <InputField label={"Clients you normally hire for"} placeholder={"Example: Swiggy, Zomato, Flipkart"}/>
          <InputField label={"Your consultancy name"} placeholder={"Example: Abc consultancy"}/>
          <InputField label={"Consultancy website"} placeholder={"Example: www.abc.com "}/>
          </>
        )}
    </>
  )
}

export default RadioForm
