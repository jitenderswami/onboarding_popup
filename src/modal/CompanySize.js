import React from 'react'
import { useGlobalContext } from '../Context';

function CompanySize() {
  const {setCompanySize,companySize} = useGlobalContext()

  const companySizeList  = [
  
                    { id:1,
                      size:"1-10"
                    },
                    { id:2,
                      size:"10-50"
                    },
                    { id:3,
                      size:"50-200"
                    },
                    { id:4,
                      size:"200-500"
                    },
                    { id:5,
                      size:"500+"
                    },

  ]


  const handleSize = (e) => {
    e.stopPropagation();
    e.preventDefault(e);
    setCompanySize(e.target.value)
  }
  return (
    <div className='companysize'>
        <label>Number of employees in your company<span className='optional'>(optional)</span></label>
        <div className="sizebuttons">

          {companySizeList.map((button) => {

               return <button key={button.id} className= {`button${companySize === button.size ? "active" : ""}`} value={button.size} onClick={handleSize}>{button.size}</button>
          })}

        </div>
      
    </div>
  )
}

export default CompanySize
