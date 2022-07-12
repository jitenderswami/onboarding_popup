import React from 'react'
import { useGlobalContext } from '../../Context';
import { companySizeList } from '../util/data';

function CompanySize() {
  const {setCompanySize,companySize} = useGlobalContext()


  const handleSize = (e) => {
    e.stopPropagation();
    e.preventDefault(e);
    setCompanySize(e.target.value)
  }
  return (
    <div className='companysize'>
        <label>Number of employees in your company<span className='optional'>{` (optional)`}</span></label>
        <div className="sizebuttons">

          {companySizeList.map((button) => {

               return <button key={button.id} className= {`button${companySize === button.size ? "active" : ""}`} value={button.size} onClick={handleSize}>{button.size}</button>
          })}

        </div>
      
    </div>
  )
}

export default CompanySize
