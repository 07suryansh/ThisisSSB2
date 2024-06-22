import React, { useState,useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./nav.css";
export default function Navbar() {
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
  // const [menu_class, setMenuClass] = useState("nav-right-section hidden");
  const [menu_class, setMenuClass] = useState("nav-right-section");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger-bar clicked");
      // setMenuClass("nav-right-section visible");
    } else {
      setBurgerClass("burger-bar unclicked");
      // setMenuClass("nav-right-section hidden");
    }
    setIsMenuClicked(!isMenuClicked);
  };
  
  return (
    <div>
      <div className="navbar">
        <div className="nav-left-section">
          <span href="/" className="navbar-text">
          Suryansh Singh Bisen
          </span>
        </div>
        {/* <div className="burger-menu" onClick={updateMenu}>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
        </div> */}
        <div className={menu_class}>
          <NavLink to="/" draggable="false" onClick={updateMenu} className='links'>
            Home
          </NavLink>
          <NavLink to="/projects" draggable="false" onClick={updateMenu}>
            Projects
          </NavLink>
          <NavLink to="/skills" draggable="false" onClick={updateMenu}>
            Skills
          </NavLink>
          <NavLink to="/about" draggable="false" onClick={updateMenu}>
            Designs
          </NavLink>
          <NavLink to="/contact" draggable="false" onClick={updateMenu}>
            Contact
          </NavLink>
        </div>
      </div>
    </div>
  );
}
