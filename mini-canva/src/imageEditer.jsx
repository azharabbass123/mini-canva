import React, { useRef, useEffect, useState } from 'react';
import './App.css'

const ImageEditor = () => {
  const canvasRef = useRef(null);
  const [images, setImages] = useState([]);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [rotationAngle, setRotationAngle] = useState(0);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    images.forEach((image, index) => {
      const { img, x, y, width, height } = image;
      
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotationAngle * Math.PI / 180);
      ctx.scale(scale, scale);
      ctx.drawImage(img, -width / 2, -height / 2, width, height);
      ctx.restore();
      
      if (index === selectedImageIndex) {
        // Draw selection border
        ctx.strokeStyle = "blue";
        ctx.lineWidth = 2;
        ctx.strokeRect(x - width / 2, y - height / 2, width, height);
      }
    });
  }, [images, rotationAngle, scale, selectedImageIndex]);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    
    reader.onload = (event) => {
      const img = new Image();
      img.onload = () => {
        setImages([...images, { img, x: 400, y: 300, width: img.width, height: img.height }]);
      };
      img.src = event.target.result;
    };
    
    reader.readAsDataURL(file);
  };

  const handleRotate = () => {
    setRotationAngle(rotationAngle + 90);
  };

  const handleResize = (factor) => {
    setScale(scale * factor);
  };

  const handleSelectImage = (index) => {
    setSelectedImageIndex(index);
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      <canvas id="myCanvas" ref={canvasRef} width={500} height={400} onClick={() => handleSelectImage(null)} />
      <div>
        <button onClick={handleRotate}>Rotate</button>
        <button onClick={() => handleResize(1.1)}>Zoom In</button>
        <button onClick={() => handleResize(0.9)}>Zoom Out</button>
        {/* Add more buttons for other functionalities like adjusting multiple images, cropping, etc. */}
      </div>
    </div>
  );
};

export default ImageEditor;