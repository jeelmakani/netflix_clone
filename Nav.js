import React, { useEffect, useState } from "react";
import Netflix__logo from "./Netflix__logo.png";
import "./Nav.css";
import png from "./pngegg.png";

function Nav() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img className="nav__logo" src={Netflix__logo} alt="Netflix logo" />
      <img className="nav2__logo" src={png} alt="Netflix logo" />
    </div>
  );
}

export default Nav;
