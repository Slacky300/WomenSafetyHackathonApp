import React, { useEffect } from 'react'
import '../styles/about.css'
import about from '../images/aboutUs.png'
import about2 from '../images/aboutUs2.png'
import '../styles/features.css'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import { Link } from 'react-router-dom'

const AboutUs2 = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div>
            <Navbar />
            <section id="about" className="about_wrapper">
                <div className="container">
                    <div className='features_wrapper' style={{ marginTop: '-90px' }}>
                        <div className="row">
                            <div className="col-12 text-center">
                                <p className="features_subtitle">Our Team for your safety</p>
                                <h2 className="features_title">About Us</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center" >
                        <div className="col-sm-12 col-lg-5 text-center text-lg-start">
                            <p className="about_number">1</p>
                            <h2 className="about_title">CarWale, where your car buying journey begins</h2>
                            <p className="about_text " style={{ textAlign: 'justify' }}>With a passion for cars and a commitment to helping you find the perfect ride, we've built a platform that simplifies the car buying experience. Our extensive inventory, expert reviews, and user-friendly tools empower you to make informed decisions. Whether you're in search of a fuel-efficient compact or a high-performance luxury vehicle, CarWale has you covered. We believe that buying a car should be exciting, not stressful, and that's why we're here to guide you every step of the way. Join us on the journey to finding your ideal car, and let's drive your dreams together.</p>
                            <div className="my-5">
                                <Link to='/' className="learn-more-btn" >Safe Siren</Link>
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
                                <h2 className="about_title">The best car buying company, we understand your needs</h2>
                                <p className="about_text" style={{ textAlign: 'justify' }}>We're more than just a website; we're your trusted partner in finding the perfect vehicle. With a passion for automobiles and a dedication to your satisfaction, we've curated a vast selection of cars to suit every need and budget. Our mission is to simplify the car-buying process, providing you with the tools and resources you need to make informed decisions. Our team of experts is here to guide you, offering valuable insights and advice along the way.</p>
                                <div className="mt-5">
                                    <Link to='/contact' className="learn-more-btn btn-header" >Contact Us</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default AboutUs2
