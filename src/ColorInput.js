import React from 'react'

const ColorInput = ({ color, setColor}) => {
  return (
    <input 
        type="text" 
        placeholder='Add Color name'
        className='color-input'
        value={color}
        onChange={e => setColor(e.target.value)}
    />
  )
}

export default ColorInput