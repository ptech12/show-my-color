import React from 'react'

const ColorBox = ({ color, hexValue }) => {
  return (
    <>
        <section 
        style={{
            backgroundColor: color
        }}
        className='color-box'
        >    
        </section>
       
    </>
  )
}

export default ColorBox