import { useState } from "react";
import { Link } from "react-router-dom";
import "./menu.css";

const Menu = () => {
  const [showMenu, setMenu] = useState(false);

  return (
    <>
      {showMenu ? (
        <button
          className="fixed left-10 top-6 z-50 flex cursor-pointer items-center text-4xl text-white"
          onClick={() => setMenu(!showMenu)}
        >
          X
        </button>
      ) : (
        <svg
          onClick={() => setMenu(!showMenu)}
          className="fixed  left-10 top-6 z-30 flex cursor-pointer items-center"
          fill="#2563EB"
          viewBox="0 0 100 80"
          width="40"
          height="40"
        >
          <rect width="100" height="10"></rect>
          <rect y="30" width="100" height="10"></rect>
          <rect y="60" width="100" height="10"></rect>
        </svg>
      )}

      <div
        className={`fixed left-0 top-0 z-0  h-full w-[18vw] bg-black/30 pl-24 pt-40 text-white  duration-500 ease-in-out ${
          showMenu ? "-translate-x-96" : "translate-x-left"
        }`}
      >
        <h3 className="mt-20 text-4xl font-semibold text-white hover:text-blue-600">
          <Link to="/About">WHAT IS DOTORIAL?</Link>
        </h3>
        {/* <h3 className="mt-20 text-4xl font-semibold text-white hover:text-blue-600">
          <Link to="/About">ABOUT US</Link>
        </h3> */}
        <h3 className="mt-20 text-4xl font-semibold text-white hover:text-blue-600">
          <Link to="/Login">LOG IN</Link>
        </h3>
      </div>
    </>
  );
};

export default Menu;
