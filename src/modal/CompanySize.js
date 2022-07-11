import React from 'react'

function CompanySize() {
  const handleSize = (e) => {
    e.stopPropagation();
    e.preventDefault(e);
    console.log("Clicked");
  }
  return (
    <div className='companysize'>
        <label>Number of employees in your company</label>
        <div className="sizebuttons">
            <button onClick={handleSize}>1-10</button>
            <button onClick={handleSize}>10-50</button>
            <button onClick={handleSize}>50-200</button>
            <button onClick={handleSize}>200-500</button>
            <button onClick={handleSize}>500+</button>
        </div>
      
    </div>
  )
}

export default CompanySize
