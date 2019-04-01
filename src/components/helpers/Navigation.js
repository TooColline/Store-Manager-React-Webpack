import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => (
  <div className="row row-wide">
  <div className="banner">
            <a href="/" className="logo">Store Manager</a>
            <nav>
                <ul className="nav">
                    <li><NavLink to="/" id="link">Home</NavLink></li>
                    <li><NavLink to="/login" id="link">Login</NavLink></li>
                    <li><NavLink to="/signup" id="link">Signup</NavLink></li>
                </ul>
            </nav>
        </div>
  </div>
);

export default Navigation;