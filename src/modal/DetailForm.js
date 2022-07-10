import React from 'react'
import CompanySize from './CompanySize'
import InputField from './InputField'
import Options from './Options'
import PrimaryButton from './PrimaryButton'

const DetailForm = () => {
  return (
    <form className='userform'>
        <InputField label={"What's Your Name"} placeholder ={"Your Name"}/>
        
        <Options />

        <>
          <InputField label={"Your company name"} placeholder ={"Example: apna"}/>
          <InputField label={"Company Website"} placeholder={"Example: www.companyname.com"}/>
        </>
        <>
          <InputField label={"Clients you normally hire for"} placeholder={"Example: Swiggy, Zomato, Flipkart"}/>
          <InputField label={"Your consultancy name"} placeholder={"Example: Abc consultancy"}/>
          <InputField label={"Consultancy website"} placeholder={"Example: www.abc.com "}/>
        </>

        <CompanySize/>
        
        <PrimaryButton />
      
    </form>
  )
}

export default DetailForm
