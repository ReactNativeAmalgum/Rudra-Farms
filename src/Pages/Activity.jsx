import React from "react";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";
import "../Css/Activity.css";
import { ImageData } from "../Assets/images/Imagedata";

const ActivityImg = [ImageData.dart, ImageData.card, ImageData.caroom];

export default function Activity() {
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
          <h3>Rudra Farms Luxury Mountain Resort </h3>
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
          <div className="room-row-cont row">
            <div className="onlyImg-room-row-cont col-6">
              <Swiper
                centeredSlides={true}
                autoplay={{
                  delay: 9500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div className="activity-swiper-card-cont">
                    <img
                      src={ImageData.card}
                      alt="card"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="activity-swiper-card-cont">
                    <img
                      src={ImageData.caroom}
                      alt="card"
                    />
                  </div>
                </SwiperSlide>
              </Swiper>
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
      <section className="section2-exp-body-cont">
        <div className="container text-center">
          <div className="section2-room-row-cont row">
            <div
              style={{ paddingLeft: 80 }}
              className=" room-column-txt-alt order-2 order-md-1 room-row-cont col-6"
            >
              <a>Outdoor Activites</a>

              <p className="room-descp1">
                Lorem ipsum odor amet, consectetuer adipiscing elit. Penatibus
                augue erat sociosqu, nullam tempus dictum morbi. Dui eros amet
                facilisi; sollicitudin pulvinar egestas iaculis parturient. Et
                mattis ultrices sem iaculis eleifend adipiscing libero semper.
              </p>
            </div>
            <div className=" order-1 order-md-2 onlyImg-room-row-cont  col-6">
              <Swiper
                navigation={true}
                modules={[Navigation, Autoplay]}
                className="mySwiper"
                // autoplay={{
                //   delay: 3050, // Delay between slides in ms
                //   disableOnInteraction: false, // Autoplay will not be disabled after user interactions
                // }}
              >
                <SwiperSlide>
                  <div className="activity-swiper-card-cont">
                    <img
                      src="https://plus.unsplash.com/premium_photo-1685303469211-7fa57a7dd43c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8b3V0ZG9vciUyMGdhbWVzfGVufDB8fDB8fHww"
                      alt="Activity 1"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="activity-swiper-card-cont">
                    <img
                      src="https://plus.unsplash.com/premium_photo-1708558513102-c9c9f7d0b970?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8b3V0ZG9vciUyMGdhbWVzJTIwaW4lMjByZXNvcnR8ZW58MHx8MHx8fDA%3D"
                      alt="Activity 2"
                    />
                  </div>
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
