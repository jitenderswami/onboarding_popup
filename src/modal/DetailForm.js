import React from 'react'
import { useGlobalContext } from '../Context'
import CompanySize from './CompanySize'
import InputField from './InputField'
import Options from './Options'
import PrimaryButton from './PrimaryButton'
import RadioForm from './RadioForm'


const DetailForm = () => {
  const{page,setPage,SelectedRadio,setSelectedRadio} = useGlobalContext()

  return (
    <form className='userform'>
        {page === 1 && (<InputField label={"What's Your Name"} placeholder ={"Your Name"}/>)}
        {page == 2 && (
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
