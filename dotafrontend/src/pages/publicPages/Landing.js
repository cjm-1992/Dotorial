import React from "react";
import "./landing.css";
import Logo from "../../imgs/logos/logo1.png";
import Menu from "../../components/menu/menu.jsx";
import {Link} from "react-router-dom";

function Landing() {
  return (
    
    <div>
      <div class="-my-20 flex h-screen w-full items-center justify-center">
        <img class="w-100 h-32" src={Logo} />
      </div>
      <div class=" -my-96 flex items-center justify-center">
        <button className="bg-slate-500/10 px-4 py-2 font-bold text-white hover:bg-slate-600">
          <Link to="/About">WHAT IS DOTORIAL?</Link>
        </button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button className="bg-slate-500/10 px-4 py-2 font-bold text-white hover:bg-slate-600">
        <Link to="/Login">LOG IN &nbsp;&nbsp; ➤</Link>
        </button>
        <Menu/>
      </div>
     
    </div>
  );
}

export default Landing;
