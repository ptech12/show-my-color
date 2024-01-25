import React from 'react'

const ColorBox = ({ color }) => {
  return (
    <div style={{
        backgroundColor: color
    }} className='color-box'
    >

        {
            color ? (
                (color)
            ) : 'Empty Value'
        }
    </div>
  )
}

export default ColorBox