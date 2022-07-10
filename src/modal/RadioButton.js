import React from 'react'
import { useGlobalContext } from '../Context'

function RadioButton({logo,heading,des}) {

  const {setSelectedRadio} = useGlobalContext()

  const handleClick = (e) =>{
    console.log(e.target);
    // setSelectedRadio(e.target)
  }


  return (
    <div onClick={handleClick} className='tile'>
      <div className='tile-content'>
      <input type="radio" name="hiriingfor" id={heading} />
          <div className='radio-detail'>
            <div className="icon">
              <img src={logo} alt="logo" />
              <p>{heading}</p>
            </div>
            <p className='icon-des'>{des}</p>
          </div>
        </div>
    </div>

  )
}

export default RadioButton
