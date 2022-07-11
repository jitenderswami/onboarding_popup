import React from 'react'
import { useGlobalContext } from '../Context.js'

function RadioButton({logo,heading,des}) {

  const {setSelectedRadio,
    setCompanyName,
    setHireForName,
    setconsultancyName} = useGlobalContext()

  const handleClick = (e) =>{
    // console.log(e.target);
    if(e.target.id === "My Own Company"){

      setHireForName("")
      setconsultancyName("")


    } else if(e.target.id === "My clients"){
        setCompanyName("")


    }

    setSelectedRadio(e.target.id)

  }


  return (
    <div className='tile'>
      <div className='tile-content'>
      <input onClick={handleClick} type="radio" name="hiriingfor" id={heading} />
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
