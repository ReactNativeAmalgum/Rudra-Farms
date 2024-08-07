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
            <div className="section1-swipper-cont col-6">
              <Swiper
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div className="only-img-cont">
                    <img src="https://th.bing.com/th/id/R.7a9de18404fee58c268f44238c8e7031?rik=p659bV13iFrYVA&riu=http%3a%2f%2fupload.wikimedia.org%2fwikipedia%2fcommons%2f3%2f35%2fA_hut.jpg&ehk=f6nPK2M%2fuTyqbqnnwTZd6ur58KnCvDYUQ9aDjV0S6Us%3d&risl=&pid=ImgRaw&r=07" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="only-img-cont">
                    <img src="https://th.bing.com/th/id/R.7a9de18404fee58c268f44238c8e7031?rik=p659bV13iFrYVA&riu=http%3a%2f%2fupload.wikimedia.org%2fwikipedia%2fcommons%2f3%2f35%2fA_hut.jpg&ehk=f6nPK2M%2fuTyqbqnnwTZd6ur58KnCvDYUQ9aDjV0S6Us%3d&risl=&pid=ImgRaw&r=07" />
                  </div>
                </SwiperSlide>
              </Swiper>{" "}
            </div>
            <div className="rooom-column-txt  col-6">
              <a>Nabhananta Garden View</a>
              <div className="inner-bed-rooom-cont">
                <div className="bed-rooom-cont">
                  <IoBedOutline />2 beds
                </div>
                <div className="bed-rooom-cont">
                  <MdBathroom />2 bathrooms
                </div>
              </div>
              <p className="rooom-descp1">
                Unwind in our luxurious garden suite, designed for a seamless
                indoor-outdoor experience. Large windows bathe the space in
                natural light and showcase the breathtaking panorama.
              </p>
              <div>
                <a className="rooom-details" href="/rooms/room-details">
                  Room details
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="room-bar" />
      <section className="section1-rooom-body-cont alt-section">
        <div className="container text-center">
          <div className="rooom-row-cont alt  row">
            <div className="col-6  rooom-column-txt">
              <div className="alt-right-col-cont">
                <a>Nabhananta Garden View</a>
                <div className="inner-bed-rooom-cont">
                  <div className="bed-rooom-cont">
                    <IoBedOutline />2 beds
                  </div>
                  <div className="bed-rooom-cont">
                    <MdBathroom />2 bathrooms
                  </div>
                </div>
                <p className="rooom-descp1">
                  Unwind in our luxurious garden suite, designed for a seamless
                  indoor-outdoor experience. Large windows bathe the space in
                  natural light and showcase the breathtaking panorama.
                </p>
                <div className="rooom-details-cont">
                  <a className="rooom-details">Room details</a>
                </div>
              </div>
            </div>
            <div className="rooom-row-cont-alt col-6">
              <Swiper
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div className="only-img-cont-alt">
                    <img src="https://th.bing.com/th/id/R.7a9de18404fee58c268f44238c8e7031?rik=p659bV13iFrYVA&riu=http%3a%2f%2fupload.wikimedia.org%2fwikipedia%2fcommons%2f3%2f35%2fA_hut.jpg&ehk=f6nPK2M%2fuTyqbqnnwTZd6ur58KnCvDYUQ9aDjV0S6Us%3d&risl=&pid=ImgRaw&r=07" />
                  </div>{" "}
                </SwiperSlide>
                <SwiperSlide>
                  <div className="only-img-cont-alt">
                    <img src="https://th.bing.com/th/id/R.7a9de18404fee58c268f44238c8e7031?rik=p659bV13iFrYVA&riu=http%3a%2f%2fupload.wikimedia.org%2fwikipedia%2fcommons%2f3%2f35%2fA_hut.jpg&ehk=f6nPK2M%2fuTyqbqnnwTZd6ur58KnCvDYUQ9aDjV0S6Us%3d&risl=&pid=ImgRaw&r=07" />
                  </div>{" "}
                </SwiperSlide>
              </Swiper>{" "}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
