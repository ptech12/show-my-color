import { useState } from "react";
import ColorBox from "./ColorBox";
import ColorInput from "./ColorInput";
import ColorOutput from "./ColorOutput";


function App() {
  const [color, setColor] = useState('')
  const [hexValue, setHexValue] = useState('')




  return (
    <div className="App">
      <ColorBox
        color={color}
        hexValue={hexValue}
      />
      <ColorInput
        color={color}
        setColor={setColor}
        setHexValue={setHexValue}
        />
      <ColorOutput 
        color={color}
        hexValue={hexValue}
      />
    </div>
  );
}

export default App;
