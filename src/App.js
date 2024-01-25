import { useState } from "react";
import ColorBox from "./ColorBox";
import ColorInput from "./ColorInput";


function App() {
  const [color, setColor] = useState('')
  return (
    <div className="App">
      <ColorBox
        color={color}
      />
      <ColorInput
        color={color}
        setColor={setColor}
      />
    </div>
  );
}

export default App;
