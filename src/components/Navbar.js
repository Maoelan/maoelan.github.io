import { Link } from "react-router-dom";
import "./NavbarStyle.css";

import React from 'react'

const Navbar = () => {
  return (
      <div class="Header">
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
      </div>
  )
}

export default Navbar