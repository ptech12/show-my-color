import {useState} from "react";

const ColorOutput = ({ color, hexValue }) => {
  // clipboard copy
  const [text, setText] = useState(color);
  const [hex, setHex] = useState(hexValue)
  // setting input handler
  const handleColor = () => {
    setText(color)
  };
  const handleHex = () => {
    setHex(hexValue)
  }
  const copyColor = async () => {
    await navigator.clipboard.writeText(text);
    console.log("copied", text);
  };
  const copyHex = async () => {
    await navigator.clipboard.writeText(hex);
    console.log("copied", hex);
  };
  return (
    <div className="color-output">
      <label
        style={{
          display: "block",
          position: "relative",
          right: "80px",
          marginBottom: "5px",
        }}
        htmlFor="color"
      >
        Color Name
      </label>

      <input
        type="text"
        name="color"
        id="color"
        value={color ? color : ""}
        onChange={() => handleColor()}
      />
      <button onClick={copyColor} className="color copy-btn">
        Copy
      </button>
      <label
        style={{
          display: "block",
          position: "relative",
          right: "80px",
          marginBottom: "5px",
        }}
        htmlFor="color"
      >
        Hex Value
      </label>

      <input
        type="text"
        name="hex"
        id="hex"
        value={hexValue ? hexValue : ""}
        onChange={handleHex}
      />

      <button onClick={copyHex} className="hex copy-btn">
        Copy
      </button>
    </div>
  );
};

export default ColorOutput;
