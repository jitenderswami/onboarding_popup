import React from 'react'
import { useGlobalContext } from '../Context.js'
import InputField from './InputField.js'

function RadioForm() {
  const{SelectedRadio,
    companyWebsite,setCompanyWebsite,
    companyName,setCompanyName,
    hireForName,setHireForName,
    consultancyName,setconsultancyName,
    consultancyWebsite,setConsultancyWebsite} = useGlobalContext()


  return (
    <>
        {SelectedRadio === 1 && (
            <>
           <InputField value={companyName} setValue={setCompanyName} label={"Your company name"} placeholder ={"Example: apna"}/>
           <InputField value={companyWebsite} setValue={setCompanyWebsite} label={"Company Website"} placeholder={"Example: www.companyname.com"}/>
           </>

        )}
        {SelectedRadio === 2 && (
          <>
          <InputField value={hireForName} setValue={setHireForName} label={"Clients you normally hire for"} placeholder={"Example: Swiggy, Zomato, Flipkart"}/>
          <InputField value={consultancyName} setValue={setconsultancyName} label={"Your consultancy name"} placeholder={"Example: Abc consultancy"}/>
          <InputField value={consultancyWebsite} setValue={setConsultancyWebsite} label={"Consultancy website"} placeholder={"Example: www.abc.com "}/>
          </>
        )}
    </>
  )
}

export default RadioForm
