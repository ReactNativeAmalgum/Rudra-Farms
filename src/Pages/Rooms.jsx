import React from "react";
import Footer from "../Components/Footer";
import "../Css/Room.css";
import { IoBedOutline } from "react-icons/io5";
import { MdBathroom } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import { useNavigate } from "react-router";
import NavBar from "../Components/NavBar";
import room from "../Components/RoomData";
import { Link } from "react-router-dom";

export default function Room() {
  const navigate = useNavigate();
  const submitBtn = () => {
    navigate("/rooms/room-details");
  };
  return (
    <>
      <section className="rooom-body-cont">
        <NavBar />
        <div className="rooom-title">
          <h1>Rooms - select your room</h1>
        </div>
      </section>
      <section className="section1-rooom-body-cont">
        <div className="container text-center">
          <div className="rooom-row-cont row">
            {room.map((v, i) => (
              <>
                <div className="section1-swipper-cont col-6">
                  <Swiper
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper"
                  >
                    {v.image1.map((r, e) => (
                      <SwiperSlide>
                        <div className="only-img-cont">
                          <img src={r} alt="image 1" />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
                <div className="rooom-column-txt  col-6">
                  <a>{v.heading1}</a>
                  <div className="inner-bed-rooom-cont">
                    <div className="bed-rooom-cont">
                      <IoBedOutline />2 beds
                    </div>
                    <div className="bed-rooom-cont">
                      <MdBathroom />2 bathrooms
                    </div>
                  </div>
                  <p className="rooom-descp1">{v.roomdetail}</p>
                  <div>
                    <Link
                      className="rooom-details"
                      to={`/rooms/room-details/${v.id}`}
                    >
                      Room details
                    </Link>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </section>
    
      <Footer />
    </>
  );
}
