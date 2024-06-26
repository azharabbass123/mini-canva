import React, { useRef, useEffect, useState } from 'react';
import './textEditerStyles.css'

const TextEditor = () => {
  const canvasRef = useRef(null);
  const [text, setText] = useState("Enter your text");
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
    <div className='textCanva-container'>
      <div className='text-controls-container'>
        
          <input className='input-text' type="text" value={text} onChange={handleTextChange} />
        
        <label>
          Font Style:
          <select value={fontStyle} className='font-style' onChange={handleFontStyleChange}>
            <option value="Arial">Arial</option>
            <option value="Verdana">Verdana</option>
            <option value="Helvetica">Helvetica</option>
          </select>
        </label>
        <label>
          Font Size:
          <input className='font-size' type="number" value= {fontSize} onChange={handleFontSizeChange} />
        </label>
        <label>
          Change color:
          <input className='text-color' type="color" value={color} onChange={handleColorChange} />
        </label>
      </div>
      <canvas id="text-canvas" className='myCanvas' ref={canvasRef} width={400} height={300} />
    </div>
  );
};

export default TextEditor;