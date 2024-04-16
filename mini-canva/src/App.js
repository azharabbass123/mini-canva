import TextEditor from './textEditer';
import ImageEditor from './imageEditer';
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
function App() {
  return (
      // <div className="heading">Mini Canva
      // </div>
      <Router>
      <div>
        <nav className='navbar'>
          <ul>
            <li>
              <Link className='nav-item active' to="/text">Text Editor</Link>
            </li>
            <li>
              <Link className='nav-item' to="/image">Image Editor</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/text" element={<TextEditor />} />
          <Route path="/image" element={<ImageEditor />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
