import colorNames from "colornames"

const ColorInput = ({ color, setColor, setHexValue}) => {
  return (
    <input 
        type="text" 
        placeholder='Add Color name'
        className='color-input'
        value={color}
        onChange={e => {
            setColor(e.target.value)
            setHexValue(colorNames(e.target.value))
        }}
    />
  )
}

export default ColorInput