import React from 'react'

function CompanySize() {
  return (
    <div className='companysize'>
        <label>Number of employees in your company</label>
        <div className="sizebuttons">
            <button>1-10</button>
            <button>10-50</button>
            <button>50-200</button>
            <button>200-500</button>
            <button>500+</button>
        </div>
      
    </div>
  )
}

export default CompanySize
