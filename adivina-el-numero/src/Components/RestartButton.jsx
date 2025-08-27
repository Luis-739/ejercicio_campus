import React from 'react'

export default function RestartButton ({ onClick }) {
  // type="button" importante para que no envíe el form si está dentro de él
  return (
    <button className='btn' type='button' onClick={onClick}>
      Reiniciar
    </button>
  )
}
