import React from 'react'
import Game from './components/Game.jsx'
import './App.css'

export default function App () {
  return (
    <div className='app'>
      <h1 className='title'>Adivina el Número</h1>
      <p className='subtitle'>
        Piensa en un número del <b>1</b> al <b>100</b>. ¡Intenta adivinarlo!
      </p>
      <Game />
      <footer className='footer'>Hecho con React + Vite</footer>
    </div>
  )
}
