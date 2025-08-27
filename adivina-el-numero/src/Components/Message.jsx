import React from 'react'

export default function Message ({ status, text, attempts }) {
  const tone = status === 'ok' ? 'ok' : status === 'warn' ? 'warn' : 'info'

  return (
    <div className={`message ${tone}`} role='status' aria-live='polite'>
      {text ? (
        <>
          <p className='message-text'>{text}</p>
          <small className='hint'>
            {status !== 'ok' ? 'Sigue intentando…' : `¡Lo lograste en ${attempts} ${attempts === 1 ? 'intento' : 'intentos'}!`}
          </small>
        </>
      ) : (
        <p className='message-text'>Escribe un número y presiona Enter</p>
      )}
    </div>
  )
}
