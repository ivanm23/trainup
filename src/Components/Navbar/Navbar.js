import React, { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "./trainup-logo-plavi-p.png";

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };
  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);
  return (
    <nav>
      <img src={logo} className="logo"></img>
      {(toggleMenu || screenWidth > 500) && (
        <ul className="list">
          <li className="items">Treneri</li>
          <li className="items">Blog</li>
          <li className="items">O nama</li>
          <li className="items">Postani trener</li>
          <li className="items">Prijavi se</li>
        </ul>
      )}
      <img src={logo} className="mobile-logo"></img>
      <a onClick={toggleNav} className="menu-btn">
        <i className="fa fa-bars" />
      </a>
    </nav>
  );
}
