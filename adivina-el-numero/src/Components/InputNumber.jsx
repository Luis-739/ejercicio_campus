import React from 'react'

export default function InputNumber ({ value, onChange, disabled, inputRef }) {
  return (
    <div className='input-form'>
      <label htmlFor='guess' className='label'>Tu número</label>
      <input
        id='guess'
        ref={inputRef}
        className='input'
        type='number'
        min='1'
        max='100'
        inputMode='numeric'
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder='1–100'
        disabled={disabled}
        autoComplete='off'
      />
    </div>
  )
}


