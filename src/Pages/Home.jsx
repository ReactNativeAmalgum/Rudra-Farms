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
import { ImageData } from "../Assets/images/Imagedata";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [ImageData.banner1, ImageData.banner2, ImageData.banner3];

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
            autoplay={{
              delay: 1000, // Delay between slides in ms
              disableOnInteraction: false, // Autoplay will not be disabled after user interactions
            }}
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
                  <img src="https://www.home-designing.com/wp-content/uploads/2018/10/luxury-kids-bedroom-dustry-rose-black-and-white-pink-with-desk.jpg" />
                  <div className="acc-swiper-card-text">
                    <h3 className="acc-swiper-card-text-h">Delux Bedroom</h3>
                    <span className="acc-swiper-card-text-s">
                      1 bed / 1 bathroom
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="acc-swiper-card-cont">
                <div className="acc-wiper-card-cont-img">
                  <img src="https://www.home-designing.com/wp-content/uploads/2018/10/luxury-bedroom-furniture-set-turquoise-large-window-polka-dot-wall-art.jpg" />
                  <div className="acc-swiper-card-text">
                    <h3 className="acc-swiper-card-text-h">Delux Bedroom</h3>
                    <span className="acc-swiper-card-text-s">
                      1 bed / 1 bathroom
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="acc-swiper-card-cont">
                <div className="acc-wiper-card-cont-img">
                  <img src="https://www.home-designing.com/wp-content/uploads/2018/10/Luxury-Bedroom-Navy-Blue-Decorating-Ideas-Oversized-Headboard.jpg" />
                  <div className="acc-swiper-card-text">
                    <h3 className="acc-swiper-card-text-h">Delux Bedroom</h3>
                    <span className="acc-swiper-card-text-s">
                      1 bed / 1 bathroom
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="acc-swiper-card-cont">
                <div className="acc-wiper-card-cont-img">
                  <img src="https://www.home-designing.com/wp-content/uploads/2018/10/luxury-master-suite-grey-with-large-closet-and-seating-area.jpg" />
                  <div className="acc-swiper-card-text">
                    <h3 className="acc-swiper-card-text-h">Delux Bedroom</h3>
                    <span className="acc-swiper-card-text-s">
                      1 bed / 1 bathroom
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="acc-swiper-card-cont">
                <div className="acc-wiper-card-cont-img">
                  <img src="https://www.home-designing.com/wp-content/uploads/2018/10/luxury-kids-bedroom-dustry-rose-black-and-white-pink-with-desk.jpg" />
                  <div className="acc-swiper-card-text">
                    <h3 className="acc-swiper-card-text-h">Delux Bedroom</h3>
                    <span className="acc-swiper-card-text-s">
                      1 bed / 1 bathroom
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="acc-swiper-card-cont">
                <div className="acc-wiper-card-cont-img">
                  <img src="https://www.home-designing.com/wp-content/uploads/2018/10/luxury-brown-master-bedroom-with-mirrored-headboard-and-walk-in-closet.jpg" />
                  <div className="acc-swiper-card-text">
                    <h3 className="acc-swiper-card-text-h">Delux Bedroom</h3>
                    <span className="acc-swiper-card-text-s">
                      1 bed / 1 bathroom
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="acc-swiper-card-cont">
                <div className="acc-wiper-card-cont-img">
                  <img src="https://www.home-designing.com/wp-content/uploads/2018/10/luxury-grey-master-bedroom-with-textured-accent-wall-and-flock-of-bird-metal-wall-art.jpg" />
                  <div className="acc-swiper-card-text">
                    <h3 className="acc-swiper-card-text-h">Delux Bedroom</h3>
                    <span className="acc-swiper-card-text-s">
                      1 bed / 1 bathroom
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="acc-swiper-card-cont">
                <div className="acc-wiper-card-cont-img">
                  <img src="https://malharmachi.com/wp-content/uploads/2023/03/DSC1478-HDRcmp-570x600.jpg" />
                  <div className="acc-swiper-card-text">
                    <h3 className="acc-swiper-card-text-h">Delux Bedroom</h3>
                    <span className="acc-swiper-card-text-s">
                      1 bed / 1 bathroom
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="acc-swiper-card-cont">
                <div className="acc-wiper-card-cont-img">
                  <img
                    src="                https://th.bing.com/th/id/R.88266eddb0ea3848a2f230273474848c?rik=KvfESeYjZEYwVQ&riu=http%3a%2f%2fwww.pinegrovemountainlodge.com%2fwp-content%2fuploads%2f2017%2f02%2fDSC00141.jpg&ehk=6t1gy7IXa6pb4UhJYq7Gpfj6LeZH1fxcqHRG%2fvW2IUw%3d&risl=&pid=ImgRaw&r=0
"
                  />
                  <div className="acc-swiper-card-text">
                    <h3 className="acc-swiper-card-text-h">Dormitory Room</h3>
                    <span className="acc-swiper-card-text-s">
                      11 beds / 4 bathroom
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="acc-swiper-card-cont">
                <div className="acc-wiper-card-cont-img">
                  <img src="https://2.bp.blogspot.com/-VU7b4YemYTI/UOmr8AG3IMI/AAAAAAAABeI/6in3rIMnDkc/s1600/Nature-Luxury-Villa-Bedroom-Design-Ideas.jpg" />
                  <div className="acc-swiper-card-text">
                    <h3 className="acc-swiper-card-text-h">Sweet Room</h3>
                    <span className="acc-swiper-card-text-s">
                      2 double beds / 1 bathroom(bath tub)
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="acco-description mt-5">
          <div className="acco-h3-cont">
            <h3 className="acco-h3">Explore our villa</h3>
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
            breakpoints={{
              1440: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
            }}
          >
            <SwiperSlide>
              <div className="acc-swiper-card-cont">
                <div className="acc-wiper-card-cont-img">
                  <img src="https://2.bp.blogspot.com/-VU7b4YemYTI/UOmr8AG3IMI/AAAAAAAABeI/6in3rIMnDkc/s1600/Nature-Luxury-Villa-Bedroom-Design-Ideas.jpg" />
                  <div className="acc-swiper-card-text">
                    <h3 className="acc-swiper-card-text-h">Villa</h3>
                    <span className="acc-swiper-card-text-s">
                      2 master bedroom / 3 bathroom / 1 arram chair
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="acc-swiper-card-cont">
                <div className="acc-wiper-card-cont-img">
                  <img src="https://i.pinimg.com/originals/3c/32/84/3c32847545140ff64f9e1109bad651df.jpg" />
                  <div className="acc-swiper-card-text">
                    <h3 className="acc-swiper-card-text-h">Villa</h3>
                    <span className="acc-swiper-card-text-s">
                      2 master bedroom / 3 bathroom / 1 arram chair
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
                  <img src={ImageData.ludo} alt="Ludo"/>
                  <div className="acc-swiper-card-text">
                    <h3 className="acc-swiper-card-text-h">Ludo</h3>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="acc-swiper-card-cont">
                <div className="acc-wiper-card-cont-img">
                <img src={ImageData.chess} alt="chess"/>
                <div className="acc-swiper-card-text">
                    <h3 className="acc-swiper-card-text-h">Chess</h3>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="acc-swiper-card-cont">
                <div className="acc-wiper-card-cont-img">
                <img src={ImageData.dart} alt="dart"/>
                <div className="acc-swiper-card-text">
                    <h3 className="acc-swiper-card-text-h">Dart Board</h3>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="acc-swiper-card-cont">
                <div className="acc-wiper-card-cont-img">
                <img src={ImageData.table_tennis} alt="table_tennis"/>
                <div className="acc-swiper-card-text">
                    <h3 className="acc-swiper-card-text-h">Table Tennis</h3>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="acc-swiper-card-cont">
                <div className="acc-wiper-card-cont-img">
                <img src={ImageData.football} alt="football"/>
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
          <p>
            Welcome to our resort gallery! Browse our gallery and let us inspire
            you to book your next unforgettable getaway.
          </p>

          <div className="exp-gallery-cont container">
            <div className="exp-gallery-cont-row row">
              <div className="exp-gallery-cont-col col">
                <Image className="h-100" src={ImageData.gallery1} alt="card" />
                <Image className="h-100" src={ImageData.gallery2} alt="card" />
                <Image className="h-100" src={ImageData.gallery3} alt="card" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
