import React, { useEffect } from 'react'
import { useGlobalContext } from '../Context.js'

function RadioButton({plan,handleClick}) {

  const {radio,
    SelectedRadio,
    setCompanyName,
    setHireForName,
    setconsultancyName} = useGlobalContext()


  useEffect(()=>{

    if(SelectedRadio === 1){

      setHireForName("")
      setconsultancyName("")


    } else if(SelectedRadio === 2){
        setCompanyName("")


    }
  },[SelectedRadio])

  return (
    <div className ={`tile${SelectedRadio === plan.id ? "active" : ""}`}>

      <div  className={'tile-content'}>
        <label className='radio-overlay'>
          <input onChange={() => handleClick(plan)} checked={plan.id === SelectedRadio} type="radio" name="hiriingfor" />
            <div className='radio-detail'>
              <div className="icon">
                <img src={plan.logo} alt="logo" />
                <p>{plan.heading}</p>
              </div>
              <p className='icon-des'>{plan.des}</p>
            </div>

        </label>
      </div>
    </div>

  )
}

export default RadioButton
