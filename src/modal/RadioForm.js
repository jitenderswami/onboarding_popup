import React from 'react'
import { useGlobalContext } from '../Context.js'
import InputField from './InputField.js'

function RadioForm() {
  const{SelectedRadio,
    companyName,setCompanyName,
    hireForName,setHireForName,
    consultancyName,setconsultancyName} = useGlobalContext()


  return (
    <>
        {SelectedRadio === "My Own Company" && (
            <>
           <InputField value={companyName} setValue={setCompanyName} label={"Your company name"} placeholder ={"Example: apna"}/>
           <InputField label={"Company Website"} placeholder={"Example: www.companyname.com"}/>
           </>

        )}
        {SelectedRadio === "My clients" && (
          <>
          <InputField value={hireForName} setValue={setHireForName} label={"Clients you normally hire for"} placeholder={"Example: Swiggy, Zomato, Flipkart"}/>
          <InputField value={consultancyName} setValue={setconsultancyName} label={"Your consultancy name"} placeholder={"Example: Abc consultancy"}/>
          <InputField label={"Consultancy website"} placeholder={"Example: www.abc.com "}/>
          </>
        )}
    </>
  )
}

export default RadioForm
