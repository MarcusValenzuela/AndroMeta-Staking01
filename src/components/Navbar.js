import React from "react";
import image from "./images/logo.png";
import {Button} from "./Button";
import "./Navbar.css";

function Navbar() {
 

 

  return (
    <>
      <div className="navbar">
        <div className="navbar-container">
          <img src={image} alt="" className="androLogo" />
        </div>
        <Button buttonStyle="btn--outline">CONNECT WALLET</Button>
      </div>
    </>
  );
}

export default Navbar;
