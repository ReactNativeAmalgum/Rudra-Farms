import React, { useState } from "react";
import NavBar from "../Components/NavBar";
import "../Css/roomdetails.css";
import Footer from "../Components/Footer";
import { FaHotTubPerson, FaPeopleGroup } from "react-icons/fa6";

import { IoBedOutline } from "react-icons/io5";
import { MdBathroom, MdOutlineBathtub } from "react-icons/md";
import { TbAirConditioning } from "react-icons/tb";
import {
  PiDesk,
  PiTelevisionSimple,
  PiTelevisionSimpleLight,
} from "react-icons/pi";
import { BiSolidCabinet } from "react-icons/bi";
import { FaWifi } from "react-icons/fa";
import { RiSofaLine } from "react-icons/ri";
import { GoDash } from "react-icons/go";

export default function RoomDetails() {
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
      <section className="rd-section1-body-cont">
        <NavBar />
      </section>
      {/*Gallery */}
      <section className="rd-section2-body-cont">
        <div className="  container">
          <div className="row">
            <div className="row-cont">
              <div className="col-6">
                <div className="col-cont-left">
                  <div className="img-wrapper">
                    <img
                      src="https://malharmachi.com/wp-content/uploads/2024/07/DSC09134-HDR_cmp-1920x650.jpg"
                      alt="Big img"
                    />
                    <div className="img-overlay"></div>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="col-cont-right">
                  <div className="col-con-right-cont">
                    <div className="row">
                      <div className="col-cont-right-row ">
                        <div className="col-6">
                          <div className="collage-cont ">
                            <div className="collage-img-wrapper">
                              <img
                                src="https://malharmachi.com/wp-content/uploads/2024/07/DSC08721-HDR_cmp-500x500.jpg"
                                alt="right row-1 col-1"
                              />
                              <div className="img-overlay"></div>
                            </div>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="collage-cont ">
                            <div className="collage-img-wrapper">
                              <img
                                src="https://malharmachi.com/wp-content/uploads/2024/07/DSC08663_cmp-1-500x500.jpg"
                                alt="right row-1 col-1"
                              />
                              <div className="img-overlay"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-cont-right-row ">
                        <div className="col-6">
                          <div className="collage-cont ">
                            <div className="collage-img-wrapper">
                              <img
                                src="https://malharmachi.com/wp-content/uploads/2024/07/DSC08721-HDR_cmp-500x500.jpg"
                                alt="right row-1 col-1"
                              />
                              <div className="img-overlay"></div>
                            </div>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="collage-cont ">
                            <div className="collage-img-wrapper">
                              <img
                                src="https://malharmachi.com/wp-content/uploads/2024/07/DSC08663_cmp-1-500x500.jpg"
                                alt="right row-1 col-1"
                              />
                              <div className="img-overlay"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Mid section*/}
      <section className=" cont container">
        <section className="row decp">
          <div className="rd-descp-fac-rule-cont">
            <div className="col-7">
              <div className="all-section-col">
                <div className="rd-section3-descp-body-cont">
                  <div className="room-column-txt room-row-cont ">
                    <a>Nabhananta Garden View</a>
                    <div className="inner-bed-room-cont">
                      <div className="bed-room-cont">
                        <IoBedOutline />2 beds
                      </div>
                      <div className="bed-room-cont">
                        <MdBathroom />2 bathrooms
                      </div>
                    </div>
                    <p className="room-descp1">
                      Unwind in our luxurious garden suite, designed for a
                      seamless indoor-outdoor experience. Large windows bathe
                      the space in natural light and showcase the breathtaking
                      panorama.
                    </p>
                  </div>
                </div>
                <div className="rd-section4-facility-body-cont">
                  <h3 className="heading-title">Room Facilities</h3>
                  <div className="container">
                    <div className="row">
                      <div className="facilty-row-cont shift-row">
                        <div className=" col-6">
                          <div className="facility-col">
                            <FaPeopleGroup /> <span>2 Guests</span>
                          </div>
                        </div>
                        <div className=" col-6">
                          <div className="facility-col">
                            <TbAirConditioning />
                            <span> Air Conditionar</span>
                          </div>
                        </div>
                      </div>
                      <div className="facilty-row-cont shift-row">
                        <div className="col-6">
                          <div className="facility-col">
                            <PiTelevisionSimple />
                            <span> T.V</span>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="facility-col">
                            <BiSolidCabinet /> <span> Wardrop</span>
                          </div>
                        </div>
                      </div>
                      <div className="facilty-row-cont shift-row">
                        <div className="col-6">
                          <div className="facility-col">
                            <PiDesk /> <span>Side Table</span>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="facility-col">
                            <FaHotTubPerson /> <span>Geezer</span>
                          </div>
                        </div>
                      </div>
                      <div className="facilty-row-cont shift-row">
                        <div className="col-6">
                          <div className="facility-col">
                            <MdOutlineBathtub /> <span> Bathtub</span>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="facility-col">
                            <FaWifi /> <span> Wifi</span>
                          </div>
                        </div>
                      </div>
                      <div className="facilty-row-cont shift-row ">
                        <div className="col-6">
                          <div className="facility-col">
                            <RiSofaLine /> <span>Sofa</span>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="facility-col "></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="rd-section5-rules-body-cont">
                  <h3 className="heading-title">Room Rules</h3>
                  <div className="re-sectoin5-rules-cont">
                    <p>- Check-in: 10.30 PM</p>
                    <p>- 10.30 PM</p>
                    <p>
                      - Photo ID for all guests above 18 years of age is
                      mandatory at check-in. We only accept Aadhar cards and
                      Signature.
                    </p>
                    <p>- Adult supervision is mandatory for kids.</p>
                    <p>- No pets allowed (Only on private booking).</p>
                    <p>- Alcohol & Smoking are allowed</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="form-col-cont col-5">
              <div className="form-col">
                <div className="div-en-form-cont">
                  <h3 className="heading-title"> Query Form</h3>
                  <div className="rd-form-cont">
                    <div className="rd-form-first-last-cont">
                      <div className="rd-form-first-span">
                        <span>First Name</span>
                        <input
                          type="text"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                          placeholder="Enter your first name"
                        />
                      </div>
                      <div className="rd-form-first-span">
                        <span>Last Name</span>
                        <input
                          type="text"
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                          placeholder="Enter your last name"
                        />
                      </div>
                    </div>
                    <div className="rd-form-first-last-cont">
                      <div className="rd-form-first-span">
                        <span>Email</span>
                        <input
                          type="text"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                          placeholder="Enter your email"
                        />
                      </div>
                      <div className="rd-form-first-span">
                        <span>Phone no.</span>
                        <input
                          type="text"
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                          placeholder="Enter your phone no"
                        />
                      </div>
                    </div>
                    <div className="form-cont">
                      <span className="form-cont-msg">Message</span>
                      <textarea
                        rows={2} // Specifies the number of visible text lines
                        maxLength={150}
                        className="message"
                        placeholder="Enter your message..."
                        value={msg}
                        onChange={(e) => setMsg(e.target.value)}
                      />
                    </div>
                    <div className="rd-send-btn-cont">
                      <touchableHilight
                        className="rd-form-send"
                        onClick={sendBtn}
                      >
                        <span>Send</span>
                      </touchableHilight>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
      <section className="rd-section6-otherrooms-body-cont">
        <div className="rd-section6-cont container">
          <div className="rd-section6-row-cont row">
            <div className="heading-title rd-section6-col-left-cont  col-4">
              <h3>Other Rooms</h3>
              <div className="rd-section6-img-cont">
                <div className="rd-other-img-cont">
                  <img
                    src="https://malharmachi.com/wp-content/uploads/2024/07/DSC09294-HDR_cmp-1920x650.jpg"
                    alt="right row-1 col-1"
                  />
                </div>
              </div>
            </div>
            <div className="col-8 d-flex align-items-center justify-content-center">
              <div className="rd-column-txt rd-row-cont">
                <a>Nabhananta Garden View</a>
                <div className="other-rd-gap">
                  <div className="other-rd-gap inner-bed-rd-cont">
                    <div className="bed-rd-cont">
                      <IoBedOutline />2 beds
                    </div>
                    <div className="bed-rd-cont">
                      <MdBathroom />2 bathrooms
                    </div>
                  </div>
                  <p className="rd-descp1">
                    Unwind in our luxurious garden suite, designed for a
                    seamless indoor-outdoor experience. Large windows bathe the
                    space in natural light and showcase the breathtaking
                    panorama.
                  </p>
                </div>
                <div>
                  <a className="rd-details" href="/rooms/room-details">
                    Room details
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
