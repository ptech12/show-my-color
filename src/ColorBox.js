import React from 'react'

const ColorBox = ({ color, hexValue }) => {
  return (
    <section style={{
        backgroundColor: color
    }} className='color-box'
    >
        <p>
        {
            color ? (
                (color)
            ) : 'Empty Value'
        }
        </p>
        <p>
            { hexValue ? hexValue : null }
        </p>

        
    </section>
  )
}

export default ColorBox