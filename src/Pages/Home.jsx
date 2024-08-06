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
import { Image } from "antd";
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
    }, 3000); // Change image every 2 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      <section className="home-body-cont">

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
        <NavBar />

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
          <span className="spa-span">
            We have been in this business for two years and we started this
            resort one year ago.
          </span>
          <div className="spa-h3-cont">
            <h3 className="spa-h3"></h3>
            <div className="home-num-cont numbers">
              <div className="num-events">
                <h3>10,000+</h3>
                <span> CUSTOMERS</span>
              </div>
              <div className="num-events">
                <h3>30+</h3>
                <span> Events</span>
              </div>
              <div className="num-events">
                <h3>80+</h3>
                <span> CORPORATE CLIENTS</span>
              </div>
            </div>
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
            // autoplay={{
            //   delay: 1000, // Delay between slides in ms
            //   disableOnInteraction: false, // Autoplay will not be disabled after user interactions
            // }}
            breakpoints={{
              1440: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 2,
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
            // autoplay={{
            //   delay: 1000, // Delay between slides in ms
            //   disableOnInteraction: false, // Autoplay will not be disabled after user interactions
            // }}
            breakpoints={{
              1440: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 1,
                // spaceBetween:10
              },
              425: {
                slidesPerView: 1,
              },
              375: {
                slidesPerView: 1,
              },
              320: {
                slidePrevView: 1,
              },
            }}
          >
            <SwiperSlide>
              <div className="acc-swiper-card-cont">
                <div className="acc-wiper-card-cont-img">
                  <img src="https://th.bing.com/th/id/OIP.gwpwKbGX8ghYsw-EBkfF0wHaEK?w=310&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7" />
                  <div className="acc-swiper-card-text">
                    <h3 className="acc-swiper-card-text-h">Caroom Board </h3>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="acc-swiper-card-cont">
                <div className="acc-wiper-card-cont-img">
                  <img src="https://thumbs.dreamstime.com/b/ludo-board-game-group-friends-playing-155323062.jpg" />
                  <div className="acc-swiper-card-text">
                    <h3 className="acc-swiper-card-text-h">Ludo</h3>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="acc-swiper-card-cont">
                <div className="acc-wiper-card-cont-img">
                  <img src="https://th.bing.com/th/id/OIP.ERgE4tqWAOjG9sP4nuCGUQAAAA?w=157&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7" />
                  <div className="acc-swiper-card-text">
                    <h3 className="acc-swiper-card-text-h">Chess</h3>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="acc-swiper-card-cont">
                <div className="acc-wiper-card-cont-img">
                  <img src="https://th.bing.com/th/id/OIP.itRZRraXbDYsqS36LqL7gwHaHa?w=179&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7" />
                  <div className="acc-swiper-card-text">
                    <h3 className="acc-swiper-card-text-h">UNO</h3>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="acc-swiper-card-cont">
                <div className="acc-wiper-card-cont-img">
                  <img src="https://th.bing.com/th/id/OIP.YQOgOWbjO2YdODIu82PU0gHaFW?w=253&h=182&c=7&r=0&o=5&dpr=1.1&pid=1.7" />
                  <div className="acc-swiper-card-text">
                    <h3 className="acc-swiper-card-text-h">Dart Board</h3>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="acc-swiper-card-cont">
                <div className="acc-wiper-card-cont-img">
                  <img src="https://www.thefitness.blog/wp-content/uploads/2020/12/The-Best-Indoor-and-Outdoor-Table-Tennis-Ping-Pong-Tables-2020.jpg" />
                  <div className="acc-swiper-card-text">
                    <h3 className="acc-swiper-card-text-h">Table Tennis</h3>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="exp-description-2">
          <span className="exp-span">OUR RESORT GALLERY</span>
          <div className="exp-h3-cont">
            <p>
              Welcome to our resort gallery! Browse our gallery and let us
              inspire you to book your next unforgettable getaway.
            </p>
            <div className="exp-gallery-cont">
              <div className="exp-gallery-inner-cont container">
                {/* <div> */}
                <div className="gallery-row-cont row">
                  <div className="gallery-img-col col">
                    <div className="gallery-img-cont">
                      <Image src="https://visavawaterpark.in/images/galleryImages/visavaGallery/visavaGaller38.jpg" />

                      {/* <div className="img-overlay"></div> */}
                    </div>
                  </div>
                  <div className="gallery-img-col col">
                    <div className="gallery-img-cont">
                      <Image src="https://visavawaterpark.in/images/galleryImages/visavaGallery/visavaGaller38.jpg" />
                      {/* <div className="img-overlay"></div> */}
                    </div>{" "}
                  </div>
                  <div className="gallery-img-col col">
                    <div className="gallery-img-cont">
                      <Image src="https://visavawaterpark.in/images/galleryImages/visavaGallery/visavaGaller38.jpg" />
                      {/* <div className="img-overlay"></div> */}
                    </div>{" "}
                  </div>
                </div>

                {/* </div> */}
              </div>
              <div className="exp-gallery-inner-cont container">
                {/* <div> */}
                <div className="gallery-row-cont row">
                  <div className="gallery-img-col col">
                    <div className="gallery-img-cont">
                      <Image src="https://visavawaterpark.in/images/galleryImages/visavaGallery/visavaGaller38.jpg" />
                      {/* <div className="img-overlay"></div> */}
                    </div>
                  </div>
                  <div className="gallery-img-col col">
                    <div className="gallery-img-cont">
                      <Image src="https://visavawaterpark.in/images/galleryImages/visavaGallery/visavaGaller38.jpg" />
                      {/* <div className="img-overlay"></div> */}
                    </div>{" "}
                  </div>
                  <div className="gallery-img-col col">
                    <div className="gallery-img-cont">
                      <Image src="https://visavawaterpark.in/images/galleryImages/visavaGallery/visavaGaller38.jpg" />
                      {/* <div className="img-overlay"></div> */}
                    </div>{" "}
                  </div>
                </div>

                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
