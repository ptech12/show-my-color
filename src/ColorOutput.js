import React from "react";

const ColorOutput = ({ color, hexValue }) => {
  return (
    <div className="color-output">
      <input
        type="text"
        name="color"
        id="color"
        value={color ? color : ""}
      />
      <button className="color copy-btn">
        Copy
      </button>

      <input
        type="text"
        name="hex"
        id="hex"
        value={hexValue ? hexValue : ""}
        />

        <button className="hex copy-btn">
          Copy
        </button>

    </div>
  );
};

export default ColorOutput;
