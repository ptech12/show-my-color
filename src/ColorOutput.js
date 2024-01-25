import React from "react";

const ColorOutput = ({ color, hexValue }) => {
  return (
    <div className="color-output">
      <label
        style={{
          display: "block",
          position: "relative",
          right: "80px",
          marginBottom: '5px'
        }}
        htmlFor="color"
      >
        Color Name
      </label>

      <input type="text" name="color" id="color" value={color ? color : ""} />
      <button className="color copy-btn">Copy</button>
      <label
        style={{
          display: "block",
          position: "relative",
          right: "80px",
          marginBottom: '5px'
        }}
        htmlFor="color"
      >
        Hex Value
      </label>

      <input 
        type="text" 
        name="hex" 
        id="hex" 
        value={hexValue ? hexValue : ""} />

      <button className="hex copy-btn">Copy</button>
    </div>
  );
};

export default ColorOutput;
