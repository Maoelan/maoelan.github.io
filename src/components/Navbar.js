import { Link } from "react-router-dom";
import "./NavbarStyle.css";
import React from 'react';
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  return (
      <div class="header">
          <Link to="/">
              <h1>Portofolio</h1>
          </Link>
          <ul className="nav-menu">
              <li>
                  <Link to="/">Home</Link>
              </li>
              <li>
                  <Link to="/project">Project</Link>
              </li>
              <li>
                  <Link to="/certificate">Certificate</Link>
              </li>
              <li>
                  <Link to="/about">About</Link>
              </li>
              <li>
                  <Link to="/contact">Contact</Link>
              </li>
          </ul>
          <div className="hamburger">
              <FaBars size={20} style={{ color: "#fff" }}/>
          </div>
      </div>
  )
}

export default Navbar