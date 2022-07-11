import React from 'react'
import { useGlobalContext } from '../Context.js'
import CompanySize from './CompanySize.js'
import InputField from './InputField.js'
import Options from './Options.js'
import PrimaryButton from './PrimaryButton.js'
import RadioForm from './RadioForm.js'


const DetailForm = () => {

  const{userName,setUserName,page,SelectedRadio} = useGlobalContext()

  return (
    <form className='userform'>
        {page === 1 && (<InputField setValue={setUserName} value={userName} label={"What's Your Name"} placeholder ={"Your Name"}/>)}
        {page === 2 && (
          <>
              <Options />
              {SelectedRadio && 
                <>
                  <RadioForm />
                  <CompanySize/>
                </>}
          </>
        )}
        <PrimaryButton />
      
    </form>
  )
}

export default DetailForm
