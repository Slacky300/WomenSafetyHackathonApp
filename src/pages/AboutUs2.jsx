import React, { useEffect } from "react";
import "../styles/about.css";
import about from "../images/aboutUs.png";
import about2 from "../images/aboutUs2.png";
import "../styles/features.css";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const AboutUs2 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Navbar />
      <section id="about" className="about_wrapper">
        <div className="container">
          <div className="features_wrapper" style={{ marginTop: "-90px" }}>
            <div className="row">
              <div className="col-12 text-center">
                <p className="features_subtitle">Our Team for your safety</p>
                <h2 className="features_title">About Us</h2>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-sm-12 col-lg-5 text-center text-lg-start">
              <p className="about_number">1</p>
              <h2 className="about_title">
                Welcome to Safe-Siren Empowering Women, Ensuring Safety
              </h2>
              <p className="about_text " style={{ textAlign: "justify" }}>
                Our mission is to leverage technology to enhance women's safety,
                promote gender equality, and create a supportive community that
                stands together in the face of adversity. We believe that every
                woman should have the right to live a life free from fear and
                intimidation.
              </p>
              <div className="my-5">
                <a className="learn-more-btn" href="#contact">
                  Explore Now
                </a>
              </div>
            </div>
            <div className="col-sm-12 col-lg-7 text-center text-md-start">
              <img decoding="async" src={about} className="img-fluid" />
            </div>
          </div>
        </div>
        <div className="innovate mt-5">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-sm-12 col-lg-6 px-5 text-center text-md-start">
                <img decoding="async" src={about2} className="img-fluid" />
              </div>
              <div className="col-sm-12 col-lg-6 text-center text-lg-start">
                <p className="about_number">2</p>
                <h2 className="about_title">Why Safe-Siren? </h2>
                <p className="about_text" style={{ textAlign: "justify" }}>
                  <u>Real-time Alerts: </u> Our app offers real-time location
                  sharing and emergency alert features, allowing you to
                  instantly notify your trusted contacts and authorities in case
                  of an emergency.
                  <br />
                  <u>Privacy and Security:</u> We take your privacy and security
                  seriously. Your data is encrypted, and we ensure that your
                  personal information is always safe. Join us in our mission to
                  make the world a safer place for women. Together, we can
                  empower, protect, and inspire change.
                </p>
                <div className="mt-5">
                  <a className="learn-more-btn btn-header" href="#contact">
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AboutUs2;
