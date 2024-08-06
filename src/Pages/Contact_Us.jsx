import React, { useState } from "react";
import NavBar from "../Components/NavBar"; // Import NavBar if needed
import Footer from "../Components/Footer";
import "../Css/Contact.css";
import dash from "../Assets/dash.png";
import { GoDash } from "react-icons/go";

export default function Contact_Us() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");

  const sendBtn = () => {
    if (firstName && lastName) {
      alert("Logged In");
    } else {
      alert("Please fill the details");
    }
  };
  return (
    <>
      <section className="contact-body-cont">
        <NavBar />
        <div className="contact-title">
          <h1>Contact Us</h1>
        </div>
      </section>
      <section className="section1-body-cont">
        <div className="contact-span">
          <div className="contact-span-cont">
            <p>
              Need help with your online booking, have a question or need more
              information? Just drop us a line!
            </p>
          </div>
        </div>
      </section>
      <section className="section2-body-cont">
        <div className="container">
          <div className="section2-contact-row row">
            <div className="section2-contact-col col-6">
              <div className="img-cont">
                <GoDash />
                <h4 className="col-6-contact"> CONTACT US</h4>
              </div>
              <h3>Get In Touch</h3>
              <div className="section2-contact-col col-6-cont">
                <h4 className="col-6-for">For reservation please call/email</h4>
                <div className="col-6-for-cont">
                  <p className="">
                    Phone: <span>(+91) 9226655134 / (+91) 9975014298</span>
                  </p>
                  <p>
                    Email: <span>rudrafarmresort@gmail.com</span>
                  </p>
                </div>
              </div>
              <div className="row-location">
                <div className="col-6-cont">
                  <h4 className="col-6-for">Our Location</h4>
                  <div className="col-6-for-cont">
                    <p>
                      Old Mumbai - Pune Hwy, Vinegaon, karjat, Maharashtra
                      410202
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="contanct-speacial-width col-6">
              <div className="contact-col-6">
                <div className="form-cont">
                  <div className="form-first-last-cont">
                    <div className="form-first-span">
                      <span>First Name</span>
                      <input
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div className="form-first-span">
                      <span>Last Name</span>
                      <input
                        placeholder="Enter your first name"
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="form-cont">
                    <span>Email</span>
                    <input
                      className="email"
                      placeholder="Enter your email..."
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="form-cont">
                    <span>Phone number</span>
                    <input
                      className="phone"
                      placeholder="Enter your phone number..."
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                  <div className="form-cont">
                    <span>Message</span>
                    <textarea
                      rows={2} // Specifies the number of visible text lines
                      maxLength={150}
                      className="message"
                      placeholder="Enter your message..."
                      value={msg}
                      onChange={(e) => setMsg(e.target.value)}
                    />
                  </div>
                  <touchableHilight className="form-send" onClick={sendBtn}>
                    <span className="form-btn-span">Send</span>
                  </touchableHilight>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3775.148201692879!2d73.2667106!3d18.8805054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7e3f5c79e0df9%3A0xc65aecad9b919e45!2sRudra%20Farms%20And%20Resorts%20-%20Karjat%20Chowk!5e0!3m2!1sen!2sin!4v1722247310262!5m2!1sen!2sin"
          width={600}
          height={450}
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <section className="section3-faq">
        <div className="section3-faq-row">
          <div className="section3-faq-col-8">
            <div className="section3-faq-cont">
              <h3>See Our FAQ's</h3>
              <div className="section3-faq-para">
                <p>
                  The common questions we receive from our customers are all
                  covered in our FAQ section. Please take a look to get an
                  answer to your question right away.
                </p>
              </div>
            </div>
          </div>
          <div className="section3-faq-col-2">
            <div>
            <span>GO TO FAQ'S</span>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
