import React, { useRef, useEffect, useState } from 'react';

const TextEditor = () => {
  const canvasRef = useRef(null);
  const [text, setText] = useState("Sample Text");
  const [fontStyle, setFontStyle] = useState("Arial");
  const [fontSize, setFontSize] = useState(24);
  const [color, setColor] = useState("#000000");

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = `${fontSize}px ${fontStyle}`;
    ctx.fillStyle = color;
    ctx.fillText(text, 20, 50);
  }, [text, fontStyle, fontSize, color]);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleFontStyleChange = (e) => {
    setFontStyle(e.target.value);
  };

  const handleFontSizeChange = (e) => {
    setFontSize(parseInt(e.target.value));
  };

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  return (
    <div>
      <canvas ref={canvasRef} width={800} height={600} />
      <div>
        <label>
          Text:
          <input type="text" value={text} onChange={handleTextChange} />
        </label>
        <label>
          Font Style:
          <select value={fontStyle} onChange={handleFontStyleChange}>
            <option value="Arial">Arial</option>
            <option value="Verdana">Verdana</option>
            <option value="Helvetica">Helvetica</option>
            {/* Add more font options */}
          </select>
        </label>
        <label>
          Font Size:
          <input type="number" value={fontSize} onChange={handleFontSizeChange} />
        </label>
        <label>
          Color:
          <input type="color" value={color} onChange={handleColorChange} />
        </label>
      </div>
    </div>
  );
};

export default TextEditor;