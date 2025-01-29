import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useState } from 'react';
import './App.css'

import Users from './Users';

import Updateuser from './Updateuser';
import Createuser from './Createuser';
function App() {
  const[count,setCount]=useState(0)
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Users</Link>
            </li>
            <li>
              <Link to="/Createuser">Createuser</Link>
            </li>
            <li>
              <Link to="/Updateuser">Updateuser</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Users/>} />
          <Route path="/Createuser" element={<Createuser/>} />
          <Route path="/Updateuser" element={<Updateuser/> } />
         
        </Routes>
      </div>
      </Router>
  );
}

export default App;