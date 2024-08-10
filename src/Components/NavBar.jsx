import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../Assets/logo.png";
import "../Css/NavBar.css";
import menu from "../Assets/menu.png";

export default function NavBar() {
  const [navToggle, setNavbarToggle] = useState(false);

  const changeHandle = () => {
    setNavbarToggle(!navToggle);
  };
  return (
    <nav className="navbar-cont navbar navbar-expand-lg">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        onClick={changeHandle}
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <img
        src={logo}
        alt={"logo"}
        style={{ width: 80, borderRadius: "50%", height: 80, marginLeft: 10 }}
      />

      <div
        class={`collapse navbar-collapse ${
          navToggle === true ? "navbar-is-active" : ""
        }`}
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav navbar-routes">
          <li className="nav-item active">
            <NavLink className="nav-link" to="/" exact>
              Home <span className="sr-only">(current)</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/about">
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/rooms">
              Rooms
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/contact">
              Contact
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/activity">
              Activity
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/signin">
              SignIn/SignUp
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
