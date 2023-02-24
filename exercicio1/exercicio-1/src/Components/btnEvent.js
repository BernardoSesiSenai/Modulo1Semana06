import React from 'react'

const ButtonAlert = () => {

  const handleClick = () => {
    alert('Você clicou no botão :)')
  }

  return (
    <button onClick={handleClick}>
      Clique aqui
    </button>
  )
}

export default ButtonAlert