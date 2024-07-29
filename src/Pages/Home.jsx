import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import './styles.css';
// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import "../Css/Home.css";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "https://i.pinimg.com/originals/11/4c/e9/114ce94d782662858157cbe701ed5ab3.jpg",
    "https://vasthukamarchitects.com/images/gallery/2/a19.jpg",
    "https://i.pinimg.com/originals/35/10/08/3510088efcf6644b5a44bc45a014e525.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 2 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      <section className="home-body-cont">
        <NavBar />
        <div className="image-slider">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`farm-img${index}`}
              className={`slider-image ${
                index === currentIndex ? "active" : ""
              }`}
            />
          ))}
        </div>
        <div className="title">
          <span>STAY AMID NATURE</span>
          <h2>Welcome to Rudra Farms</h2>
          <p>A Luxury Mountain Resort</p>
        </div>
      </section>
      <section className="home-about-cont">
        <div className="description">
          <span>ESCAPE TO PARADISE</span>
          <h3>
            Welcome to Rudra Farms Mountain Resorts, Your Gateway to Paradise
          </h3>
          <p>
            The standard chunk of Lorem Ipsum used since the 1500s is reproduced
            below for those interested. Sections 1.10.32 and 1.10.33 from "de
            Finibus Bonorum et Malorum" by Cicero are also reproduced in their
            exact original form, accompanied by English versions from the 1914
            translation by H. Rackham.
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <p>
            The standard chunk of Lorem Ipsum used since the 1500s is reproduced
            below for those interested. Sections 1.10.32 and 1.10.33 from "de
            Finibus Bonorum et Malorum" by Cicero are also reproduced in their
            exact original form, accompanied by English versions from the 1914
            translation by H. Rackham.
          </p>
        </div>
        <div className="image-cont">
          <figure className="wp-caption">
            <img
              className="soar"
              src="https://malharmachi.com/wp-content/uploads/2024/04/Snapinsta.app_319578938_1575813586189464_4865937107531480514_n_1080-1024x1024.jpg"
              alt="zipline"
            />
            <figcaption>Soar Above the Mountains</figcaption>
          </figure>
          <figure className="wp-caption">
            <img
              className="middle-img"
              src="https://malharmachi.com/wp-content/uploads/2024/04/DSC1647cmp-1024x684.jpg"
              alt="bench"
            />
            <figcaption>Peace in Nature's Oasis</figcaption>
          </figure>

          <figure className="wp-caption">
            <img
              className="tie"
              src="https://malharmachi.com/wp-content/uploads/2023/03/wedding-new-768x576.jpg"
              alt="marriage"
            />
            <figcaption>Tie the Knot in Style</figcaption>
          </figure>
        </div>
      </section>
      <section className="home-spa-cont">
        <div className="spa-description">
          <span className="spa-span">RELAX AND RUJUVENATE</span>
          <div className="spa-h3-cont">
            <h3 className="spa-h3">
              Spa and Massage at the Serene Rudra Farms Luxury Mountain Resort
            </h3>
            <div className="btn-cont">
              <span>FIND OUT MORE</span>
            </div>
          </div>
        </div>
      </section>
      <section className="home-acco-cont">
        <div className="acco-description">
          <span className="acco-span">ACCOMMDATION</span>
          <div className="acco-h3-cont">
            <h3 className="acco-h3">Elevate Your Stay in Scenic Natue</h3>
            <p>
              Elevate your stay in scenic nature. Stay in best honeymoon resort
              near Mumbai & Pune. Rooms & Cottages at punes only Mountain View
              resort.
            </p>
          </div>
        </div>
        <div className="acc-swiper-cont">
          <Swiper
            navigation={true}
            modules={[Navigation, Pagination, Autoplay]} // Include Autoplay here
            className="mySwiper"
            pagination={{ clickable: true }}
            autoplay={{
              delay: 1000, // Delay between slides in ms
              disableOnInteraction: false, // Autoplay will not be disabled after user interactions
            }}
            slidesPerView={3}
            breakpoints={{
              1440: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
            }}
          >
            <SwiperSlide>
              <div className="acc-swiper-card-cont">
                <div className="acc-wiper-card-cont-img">
                  <img src="https://malharmachi.com/wp-content/uploads/2023/03/DSC1478-HDRcmp-570x600.jpg" />
                  <div className="acc-swiper-card-text">
                    <h3 className="acc-swiper-card-text-h">
                      Maharaja Family Bedroom
                    </h3>
                    <span className="acc-swiper-card-text-s">
                      4 beds / 2 bathroom
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="acc-swiper-card-cont">
                <div className="acc-wiper-card-cont-img">
                  <img src="https://malharmachi.com/wp-content/uploads/2023/03/DSC02189cmp-570x600.jpg" />
                  <div className="acc-swiper-card-text">
                    <h3 className="acc-swiper-card-text-h">
                      Maharaja Family Bedroom
                    </h3>
                    <span className="acc-swiper-card-text-s">
                      4 beds / 2 bathroom
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="acc-swiper-card-cont">
                <div className="acc-wiper-card-cont-img">
                  <img src="https://malharmachi.com/wp-content/uploads/2023/03/DSC1394-HDRcmp-570x600.jpg" />
                  <div className="acc-swiper-card-text">
                    <h3 className="acc-swiper-card-text-h">
                      Maharaja Family Bedroom
                    </h3>
                    <span className="acc-swiper-card-text-s">
                      4 beds / 2 bathroom
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="acc-swiper-card-cont">
                <div className="acc-wiper-card-cont-img">
                  <img src="https://malharmachi.com/wp-content/uploads/2023/03/DSC1524-HDRcmp-570x600.jpg" />
                  <div className="acc-swiper-card-text">
                    <h3 className="acc-swiper-card-text-h">
                      Maharaja Family Bedroom
                    </h3>
                    <span className="acc-swiper-card-text-s">
                      4 beds / 2 bathroom
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="acc-swiper-card-cont">
                <div className="acc-wiper-card-cont-img">
                  <img src="https://malharmachi.com/wp-content/uploads/2023/03/DSC02189cmp-570x600.jpg" />
                  <div className="acc-swiper-card-text">
                    <h3 className="acc-swiper-card-text-h">
                      Maharaja Family Bedroom
                    </h3>
                    <span className="acc-swiper-card-text-s">
                      4 beds / 2 bathroom
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <a className="">
          <span>BOOK NOW</span>
        </a>
      </section>
      <section className="home-exp-cont">
        <div className="exp-description">
          <span className="exp-span">EXPERIENCES & ACTIVITIES</span>
          <div className="exp-h3-cont">
            <h3 className="exp-h3">Indulge Your Playful Side</h3>
            <p>
              Premium resorts near pune with 10+ activities inside the FarmHoule
              Luxury Mountain Resort.
            </p>
          </div>
        </div>
        <div className="acc-swiper-cont">
          <Swiper
            navigation={true}
            modules={[Navigation, Pagination, Autoplay]} // Include Autoplay here
            className="mySwiper"
            pagination={{ clickable: true }}
            autoplay={{
              delay: 1000, // Delay between slides in ms
              disableOnInteraction: false, // Autoplay will not be disabled after user interactions
            }}
            slidesPerView={3}
            breakpoints={{
              1440: {
                slidesPerView: 3,
                spaceBetween: 100,
              },
            }}
          >
            <SwiperSlide>
              <div className="acc-swiper-card-cont">
                <div className="acc-wiper-card-cont-img">
                  <img src="https://malharmachi.com/wp-content/uploads/2023/03/DSC1478-HDRcmp-570x600.jpg" />
                  <div className="acc-swiper-card-text">
                    <h3 className="acc-swiper-card-text-h">
                      Maharaja Family Bedroom
                    </h3>
                    <span className="acc-swiper-card-text-s">
                      4 beds / 2 bathroom
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="acc-swiper-card-cont">
                <div className="acc-wiper-card-cont-img">
                  <img src="https://malharmachi.com/wp-content/uploads/2023/03/DSC02189cmp-570x600.jpg" />
                  <div className="acc-swiper-card-text">
                    <h3 className="acc-swiper-card-text-h">
                      Maharaja Family Bedroom
                    </h3>
                    <span className="acc-swiper-card-text-s">
                      4 beds / 2 bathroom
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="acc-swiper-card-cont">
                <div className="acc-wiper-card-cont-img">
                  <img src="https://malharmachi.com/wp-content/uploads/2023/03/DSC1394-HDRcmp-570x600.jpg" />
                  <div className="acc-swiper-card-text">
                    <h3 className="acc-swiper-card-text-h">
                      Maharaja Family Bedroom
                    </h3>
                    <span className="acc-swiper-card-text-s">
                      4 beds / 2 bathroom
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="acc-swiper-card-cont">
                <div className="acc-wiper-card-cont-img">
                  <img src="https://malharmachi.com/wp-content/uploads/2023/03/DSC1524-HDRcmp-570x600.jpg" />
                  <div className="acc-swiper-card-text">
                    <h3 className="acc-swiper-card-text-h">
                      Maharaja Family Bedroom
                    </h3>
                    <span className="acc-swiper-card-text-s">
                      4 beds / 2 bathroom
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="acc-swiper-card-cont">
                <div className="acc-wiper-card-cont-img">
                  <img src="https://malharmachi.com/wp-content/uploads/2023/03/DSC02189cmp-570x600.jpg" />
                  <div className="acc-swiper-card-text">
                    <h3 className="acc-swiper-card-text-h">
                      Maharaja Family Bedroom
                    </h3>
                    <span className="acc-swiper-card-text-s">
                      4 beds / 2 bathroom
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="exp-description-2">
          <span className="exp-span">
            READ MORE ABOUT OUR RESORT THROUGH OUR BLOGS
          </span>
          <div className="exp-h3-cont">
            <h3 className="exp-h3">
              Experience the Pinnacle of Relaxation and Escape to Malhar Machi
              Luxury Mountain Resort
            </h3>
            <div className="exp-p-cont">
              <a className="exp-p-cont-a">
              Luxury Resort in Pune
              </a>
              <a>Resort near Mulshi lake Pune</a>
              <a>Resort near Pune for Weekende</a>
              <a>Resort near Pune for Weekend</a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
