import React from "react";
import logo from "../Assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import bed from '../Assets/bed.png'
import '../Css/NavBar.css'

export default function NavBar() {
  return (
    <div className="row main-row fullwidth">
      <div className="column-wrap left-header-col-10">
        <div className="navbar-log-navlinks-cont">
          <img src={logo} alt="logo" className="navbar-logo" />
          <div className="navbar-routes-cont">
            <ul className="navbar-routes">
              <div>
                <NavLink to="/">
                  <li>Home</li>
                </NavLink>
              </div>

              <div>
                <NavLink to={"/about"}>
                  <li>About Us</li>
                </NavLink>
              </div>
              <div>
                <NavLink to="/rooms">
                  <li>Rooms</li>
                </NavLink>
              </div>
              <div>
                <NavLink to={"/contact"}>
                  <li>Contact Us</li>
                </NavLink>
              </div>
              <div>
                <NavLink to={"/service"}>
                  <li>Service</li>
                </NavLink>
              </div>

              <div>
                <NavLink to={"/experience"}>
                  <li>Experience</li>
                </NavLink>
              </div>
              <div>
                <NavLink to={"/faq"}>
                  <li>FAQ's</li>
                </NavLink>
              </div>
              <div>
                <NavLink to={"/blogs"}>
                  <li>Blogs</li>
                </NavLink>
              </div>
            </ul>
          </div>
        </div>
      </div>
      <div className="column-wrap right-header-col-2">
        <div className="column-wrap right-header-col-4-cont">
        <img  src={bed} alt ={bed}/>
          <h1> Book Now</h1>
        </div>
      </div>
    </div>
  );
}
