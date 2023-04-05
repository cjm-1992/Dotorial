import { useEffect } from 'react';
import './App.css';
import './index.css';
import Landing from './pages/publicPages/Landing';
import Login from './pages/publicPages/Login';
import Register from './pages/publicPages/Register';
import About from './pages/publicPages/About';
import { Route, Routes } from "react-router-dom";

function App() {

  return (
    <Routes>
      <Route path = "/" element= {<Landing/>} />
      <Route path = "/Login" element= {<Login/>} />
      <Route path = "/Register" element = {<Register/>} />
      <Route path = "/About" element = {<About/>} />
    </Routes>
  );
}

export default App;
