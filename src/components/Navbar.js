import React from "react";
import logo from "../logo.jpg";

//React fontawesome import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img className="logo" src={logo} alt="logo..." style={{width: "70px"}}></img></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <FontAwesomeIcon icon={faBars} style={{ color:"#fff"}} />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">ABOUT ME</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">HOW WORK</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">PORTFOLIO</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">CONTACT</a>
        </li>
        
      </ul>
    
    </div>
  </div>
</nav>
    )
}
