import React from "react";

import {
  FaFacebook,
  FaYoutube,
  FaWhatsapp,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaFacebookF,
  FaPhone,
  FaMapPin,
} from "react-icons/fa";
import { CgMail } from "react-icons/cg";

import { Link } from "react-router-dom";

import "../Css/Footer.css";
import logo from "../Assets/logo.png";

export default function Footer() {
  return (
    <>
      <section className="bottom-bar-cont">
        <div className="bar" />
        <div className="container">
          <div className="footer-row">
            <div className="footer-col-6">
              <h3>Abouts</h3>
              <p>
              We have been in this business for two years and we started this resort one year ago.
              </p>
            </div>
            <div className="footer-nav-cont  col-2">
              <h3>General</h3>
              <p className="footer-nav-cont" >About Us</p>
              <p>Rooms</p>
              <p>Services</p>
              <p>Experience</p>
              <p>FAQ's</p>
            </div>
            <div className="footer-nav-cont col-2">
              <h3>Connect</h3>
              <div className="social">
                <FaFacebookF className="icon" /> <p>Facebook</p>
              </div>
              <div className="social">
                <FaInstagram className="icon" /> <p>Instagram</p>
              </div>
              <div className="social">
                <FaWhatsapp className="icon" /> <p>WhatsApp</p>
              </div>
            </div>
            <div className="footer-nav-cont col-2">
             <div className="speacial-h3">
             <h3>Contact Us</h3>
             </div>
              <div className="social">
                <CgMail className="icon" /> <p>rudra@gmail.com</p>
              </div>
              <div className="social">
                <FaPhone className="icon" /> <p>+91 4483330033</p>
              </div>
              <div className="social">
                <FaMapPin className="icon" /> <p>301, Shree Kridhna Digital, Andher - 73</p>
              </div>
            </div>
          </div>
        </div>

      </section>
    <section>
    <div className="copywright">
          <p>2024 ©️ Rudra Holiday Resorts | All rights reserved | with ❤️ and a lof of ☕ #SKDM</p>
        </div>
    </section>
    </>
  );
}
