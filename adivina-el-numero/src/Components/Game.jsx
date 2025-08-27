import React, { useEffect, useRef, useState } from 'react'
import InputNumber from './InputNumber.jsx'
import Message from './Message.jsx'
import RestartButton from './RestartButton.jsx'

const genSecret = () => Math.floor(Math.random() * 100) + 1

export default function Game () {
  const [secret, setSecret] = useState(() => genSecret())
  const [guess, setGuess] = useState('')
  const [status, setStatus] = useState('') // '' | 'info' | 'ok' | 'warn'
  const [message, setMessage] = useState('')
  const [attempts, setAttempts] = useState(0)
  const inputRef = useRef(null)

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    const num = parseInt(guess, 10)

    // limpiar el input inmediatamente para permitir nueva entrada
    setGuess('')

    if (Number.isNaN(num)) {
      setStatus('warn')
      setMessage('Por favor ingresa un número válido')
      if (inputRef.current) inputRef.current.focus()
      return
    }

    if (num < 1 || num > 100) {
      setStatus('warn')
      setMessage('El número debe estar entre 1 y 100')
      if (inputRef.current) inputRef.current.focus()
      return
    }

    setAttempts(prev => prev + 1)

    if (num === secret) {
      setStatus('ok')
      setMessage(`¡Correcto! El número era ${secret}`)
    } else if (num < secret) {
      setStatus('info')
      setMessage('El número es mayor')
    } else {
      setStatus('info')
      setMessage('El número es menor')
    }

    if (inputRef.current) inputRef.current.focus()
  }

  const restart = () => {
    setSecret(genSecret())
    setGuess('')
    setStatus('')
    setMessage('')
    setAttempts(0)
    if (inputRef.current) inputRef.current.focus()
  }

  return (
    <div className='card'>
      <form className='row' onSubmit={handleSubmit}>
        <InputNumber
          value={guess}
          onChange={setGuess}
          disabled={status === 'ok'}
          inputRef={inputRef}
        />
        <button className='btn primary' type='submit' disabled={status === 'ok'}>
          Probar
        </button>
        <RestartButton onClick={restart} />
      </form>

      <Message status={status} text={message} attempts={attempts} />

      {status === 'ok' && (
        <div className='celebration'>
          <img src='/explosion.gif' alt='explosion' className='explosion' />
          <h2 className='congrats'>🎉 Felicidades, ¡adivinaste! 🎉</h2>
        </div>
      )}
    </div>
  )
}
