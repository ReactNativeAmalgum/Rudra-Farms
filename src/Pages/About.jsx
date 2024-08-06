import React from "react";
import NavBar from "../Components/NavBar"; // Import NavBar if needed
import "../Css/About.css";
import Footer from "../Components/Footer";
import { GoDash } from "react-icons/go";

export default function About() {
  return (
    <>
      <section className="about-body-cont">
        <NavBar />
        <div className="about-title">
          <h1>About Us</h1>
        </div>
      </section>
      <section className="section1-about-body-cont">
        <div className="descp-span">
          <p>
            Lorem ipsum odor amet, consectetuer adipiscing elit. Ex parturient
            posuere adipiscing purus diam vehicula.
          </p>
          <div className="numbers">
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
        </div>
      </section>
      <section className="section2-body-cont">
        <div className="container">
          <div className="section2-escape-row row">
            <div className="section2-escape-col col-6">
              <div className="col-6-heading">
                <GoDash />
                <h3 className="col-6-contact"> Escape to Pure Bliss</h3>
              </div>
              <h2>Rudra Farms Luxury Mountain Resort</h2>
              <p>
                Lorem Ipsum është një tekst shabllon i industrisë së printimit
                dhe shtypshkronjave. Lorem Ipsum ka qenë teksti shabllon i
                industrisë që nga vitet 1500, kur një shtypës i panjohur morri
                një galeri shkrimesh dhe i ngatërroi për të krijuar një libër
                mostër. Teksti i ka mbijetuar jo vetëm pesë shekujve, por edhe
                kalimit në shtypshkrimin elektronik, duke ndenjur në thelb i
                pandryshuar. U bë i njohur në vitet 1960 me lëshimin e letrave
                'Letraset' që përmbanin tekstin Lorem Ipsum, e në kohët e fundit
                me aplikacione publikimi si Aldus PageMaker që përmbajnë
                versione të Lorem Ipsum.
              </p>
              <p>
                Përkthime: Mund të ndihmoni në përkthimin e kësaj faqeje në
                gjuhë të huaj? Ju lutemi të na dërgoni me email detajet nëse
                mund të ndihmoni.
              </p>
              <p>
                Dhuroni: Nëse e përdorni këtë faqe rregullisht dhe dëshironi ta
                ndihmoni të qëndrojë në Internet, ju lutem konsideroni të
                dhuroni një sasi të vogël pë të ndihmuar pagesat e hostimit dhe
                brezit. Nuk ka pagesë minimale, çdo shumë vlerësohet - klikoni
                këtu për të dhuruar me PayPal. Faleminderit për suportin tuaj.
                Donate bitcoin:
              </p>
            </div>
            <div className="col-6">
              <div className="section2-img-cont">
                <img
                  // className="about-img"
                  src="https://malharmachi.com/wp-content/uploads/2020/01/abt3.jpg"
                  alt="img "
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about-vision-cont">
        <div className="vision-container container">
          <div className="vision-row">
            <div className="right-vision-col-6">
              <h2>Our Mission</h2>
            </div>
            <div className="left-vision-col-6">
              <h4>-Inspiring Healthy Living and Connecting to Our Roots</h4>
              <p>
                Përkthime: Mund të ndihmoni në përkthimin e kësaj faqeje në
                gjuhë të huaj? Ju lutemi të na dërgoni me email detajet nëse
                mund të ndihmoni.
              </p>
            </div>
          </div>
          <div className="vision-row">
            <div className="right-vision-col-6">
              <h2>Our Vision</h2>
            </div>
            <div className="left-vision-col-6">
              <h4>-Promoting Healthy Living and Connecting with Nature</h4>
              <p>
                Përkthime: Mund të ndihmoni në përkthimin e kësaj faqeje në
                gjuhë të huaj? Ju lutemi të na dërgoni me email detajet nëse
                mund të ndihmoni.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
