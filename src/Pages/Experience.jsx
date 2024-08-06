import React from "react";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import "../Css/Experience.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";

export default function Experience() {
  return (
    <>
      <section className="exp-body-cont">
        <NavBar />
        <div className="exp-title">
          <h1>Activity</h1>
        </div>
      </section>
      <section className="section1-exp-body-cont">
        <div className="exp-description">
          <h3>Get One With Nature at</h3>
          <h3>Malhar Machi Luxury Mountain Resort </h3>
          <p>
            The standard chunk of Lorem Ipsum used since the 1500s is reproduced
            below for those interested. Sections 1.10.32 and 1.10.33 from "de
            Finibus Bonorum et Malorum" by Cicero are also reproduced in their
            exact original form, accompanied by English versions from the 1914
            translation by H. Rackham.
          </p>
        </div>
      </section>
      <section className="section1-exp-body-cont">
        <div className="container text-center">
          <div className="  room-row-cont row">
            <div className="onlyImg room-row-cont col-6">
              <Swiper
                navigation={true}
                modules={[Navigation, Autoplay]}
                autoplay={{
                  delay: 3000, // Delay between slides in ms
                  disableOnInteraction: false, // Autoplay will not be disabled after user interactions
                }}
                className="mySwiper"
              >
                <SwiperSlide>
                  <img src="https://malharmachi.com/wp-content/uploads/2023/03/AY_01476cmp-682x1024.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://malharmachi.com/wp-content/uploads/2023/03/DSC09230cmp-1024x577.jpg" />
                </SwiperSlide>
              </Swiper>{" "}
            </div>
            <div className="room-column-txt room-row-cont col-6">
              <a>Indore Activities</a>

              <p className="room-descp1">
                Lorem ipsum odor amet, consectetuer adipiscing elit. Penatibus
                augue erat sociosqu, nullam tempus dictum morbi. Dui eros amet
                facilisi; sollicitudin pulvinar egestas iaculis parturient. Et
                mattis ultrices sem iaculis eleifend adipiscing libero semper.
              </p>

            </div>
          </div>
        </div>
      </section>
      <section className="section1-exp-body-cont">
        <div className="container text-center">
          <div className="room-row-cont row">
            <div style={{paddingLeft:80}} className="  room-column-txt-alt room-row-cont col-6">
              <a>Outdoor Activites</a>

              <p className="room-descp1">
                Lorem ipsum odor amet, consectetuer adipiscing elit. Penatibus
                augue erat sociosqu, nullam tempus dictum morbi. Dui eros amet
                facilisi; sollicitudin pulvinar egestas iaculis parturient. Et
                mattis ultrices sem iaculis eleifend adipiscing libero semper.
              </p>

            </div>
            <div className="onlyImg room-row-cont col-6">
              <Swiper
                navigation={true}
                modules={[Navigation, Autoplay]}
                className="mySwiper"
                autoplay={{
                  delay: 3050, // Delay between slides in ms
                  disableOnInteraction: false, // Autoplay will not be disabled after user interactions
                }}
              >
                <SwiperSlide>
                  <img src="https://malharmachi.com/wp-content/uploads/2023/03/AY_01476cmp-682x1024.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://malharmachi.com/wp-content/uploads/2023/03/DSC09230cmp-1024x577.jpg" />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
