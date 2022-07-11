import React from 'react'
import { useGlobalContext } from '../Context';

function CompanySize() {
  const {setCompanySize} = useGlobalContext()


  const handleSize = (e) => {
    e.stopPropagation();
    e.preventDefault(e);
    setCompanySize(e.target.value)
    console.log(e.target.value)
    
  }
  return (
    <div className='companysize'>
        <label>Number of employees in your company</label>
        <div className="sizebuttons">
            <button value={"1-10"} onClick={handleSize}>1-10</button>
            <button value={"10-50"} onClick={handleSize}>10-50</button>
            <button value={"50-200"} onClick={handleSize}>50-200</button>
            <button value={"200-500"} onClick={handleSize}>200-500</button>
            <button value={"500+"} onClick={handleSize}>500+</button>
        </div>
      
    </div>
  )
}

export default CompanySize
