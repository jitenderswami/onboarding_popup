import React from 'react'

function InputField({label,placeholder}) {
  return (
    <div className='inputfield'>
        <label htmlFor='input'>{label}</label>
        <input placeholder={placeholder} type="text" name="" id="input" />

      
    </div>
  )
}

export default InputField
