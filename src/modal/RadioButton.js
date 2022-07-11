import React from 'react'
import { useGlobalContext } from '../Context.js'

function RadioButton({plan,handleClick}) {

  const {radio,selectedRadio} = useGlobalContext()

  return (
    <div className='tile'>
      <div  className='tile-content'>
        <label onClick={() => handleClick(plan)} className='radio-overlay'>
          <input  type="radio" name="hiriingfor" />
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
