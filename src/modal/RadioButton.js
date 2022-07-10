import React from 'react'

function RadioButton({logo,heading,des}) {
  return (
    <div className='tile'>
      <div className='tile-content'>
      <input type="radio" name="hiriingfor" id="" />
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
