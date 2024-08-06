import React from "react";
import { GoDash } from "react-icons/go";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import NavBar from "../../Components/NavBar";
import Footer from "../../Components/Footer";
import "./service.css";

export default function Services() {
  return (
    <>
      <section className="about-body-cont">
        <NavBar />
        <div className="about-title">
          <h1>Activities</h1>
        </div>
      </section>



      <section className="service-section2">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="swiper-cont">
                <Swiper
                  navigation={true}
                  modules={[Navigation, Pagination]}
                  className="mySwiper"
                  pagination={{ clickable: true }}
                  slidesPerView={1}
                  breakpoints={{
                    1440: {
                      slidesPerView: 1,
                      spaceBetween: 100,
                    },
                  }}
                >
                  <SwiperSlide>
                    <div className="service-swiper-card-cont">
                      <img
                        src="https://plus.unsplash.com/premium_photo-1685303469211-7fa57a7dd43c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8b3V0ZG9vciUyMGdhbWVzfGVufDB8fDB8fHww"
                        alt="Activity 1"
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="service-swiper-card-cont">
                      <img
                        src="https://plus.unsplash.com/premium_photo-1708558513102-c9c9f7d0b970?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8b3V0ZG9vciUyMGdhbWVzJTIwaW4lMjByZXNvcnR8ZW58MHx8MHx8fDA%3D"
                        alt="Activity 2"
                      />
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>

            <div className="col-md-6">
              <div className="service-desp">
                <div className="d-flex align-items-center mb-3">
                  <GoDash />
                  <h3 className="ms-2">Outdoor (games)</h3>
                </div>
                <p className="">
                  Lorem ipsum odor amet, consectetuer adipiscing elit. Enim
                  laoreet vitae habitasse pulvinar quisque nisi consectetur est
                  per. Tincidunt torquent finibus maecenas neque vehicula ante
                  per egestas in.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="service-bar" />
      <section className="special-mb service-section2">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div
                style={{ paddingLeft: "50px" }}
                className=" speacial-padding service-desp"
              >
                <div className="d-flex align-items-center mb-3">
                <GoDash />
                <h3 className="ms-2">Indoor (games)</h3>
              </div>
                <p className="">
                  Lorem ipsum odor amet, consectetuer adipiscing elit. Enim
                  laoreet vitae habitasse pulvinar quisque nisi consectetur est
                  per. Tincidunt torquent finibus maecenas neque vehicula ante
                  per egestas in.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="swiper-cont">
              <Swiper
                navigation={true}
                modules={[Navigation, Pagination]}
                className="mySwiper"
                pagination={{ clickable: true }}
                slidesPerView={1}
                breakpoints={{
                  1440: {
                    slidesPerView: 1,
                    spaceBetween: 100,
                  },
                }}
              >
                <SwiperSlide>
                  <div className="service-swiper-card-cont">
                      <img
                        src="https://plus.unsplash.com/premium_photo-1685303469211-7fa57a7dd43c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8b3V0ZG9vciUyMGdhbWVzfGVufDB8fDB8fHww"
                        alt="Activity 1"
                      />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="service-swiper-card-cont">
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
        </div>
      </section>

      <Footer />
    </>
  );
}
