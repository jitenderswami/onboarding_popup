import React from 'react'
import { useGlobalContext } from '../Context.js'
import CompanySize from './CompanySize.js'
import InputField from './InputField.js'
import Options from './Options.js'
import PrimaryButton from './PrimaryButton.js'
import RadioForm from './RadioForm.js'


const DetailForm = () => {

  const{userName,setUserName,
    page,SelectedRadio,finalobject} = useGlobalContext()

  return (
    <form className='userform'>
        {page === 1 && (<InputField setValue={setUserName} value={userName} label={"What is your full name?"} placeholder ={"Example: Ramadugu Rakesh Kumar"}/>)}
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

        { page <= 2 && <PrimaryButton /> }

        {page >= 3 && <>Form Submitted!</>}
      
    </form>
  )
}

export default DetailForm
