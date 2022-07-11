import React from 'react'


function InputField({value,setValue,label,placeholder}) {


  return (
    <div className='inputfield'>
        <label htmlFor='input'>{label}</label>
        <input value={value} onChange={e => (setValue(e.target.value))} placeholder={placeholder} type="text" name="" id="input" />

      
    </div>
  )
}

export default InputField
