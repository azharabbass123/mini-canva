import TextEditor from './textEditer';
import ImageEditor from './imageEditer';
import React, {useState} from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
function App() {
  const [click, setClick] = useState(false);
  return (
      // <div className="heading">Mini Canva
      // </div>
      <Router>
      <div>
        <nav className='navbar'>
          <ul>
            <li>
              <Link className={click ? 'nav-item' : 'nav-item active'} onClick={() => {setClick(false)}} to="/text">Text Editor</Link>
            </li>
            <li>
              <Link className={click ?'nav-item active' : 'nav-item'} onClick={() =>{setClick(true)}} to="/image">Image Editor</Link>
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
