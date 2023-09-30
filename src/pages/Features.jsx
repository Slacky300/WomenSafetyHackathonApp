import React from 'react'
import '../styles/features.css'
import search from '../gifs/search.gif'
import puzzle from '../gifs/puzzle.gif'
import statis from '../gifs/statis.gif'
import noti from '../gifs/noti.gif'
import rock from '../gifs/rock.gif'
import proct from '../gifs/proct.gif'

const Features = () => {
    return (
        <div>
            <section id="features" className="features_wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center mb-5">
                            <p className="features_subtitle">Feature-Packed Driving</p>
                            <h2 className="features_title">Our automated features</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-sm-6 mb-5">
                            <div className="ft-1 text-center header-img-section">
                                <img src={search} height={150} />
                                <h3 className='mt-4'>Secure Payment</h3>
                                <p className="features_text" style={{ textAlign: 'justify' }}>We take your security seriously, and that's why we've implemented state-of-the-art secure payment systems. Your financial information is safeguarded with the latest encryption technology, ensuring your transactions are always safe and secure.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 mb-5">
                            <div className="ft-2 text-center header-img-section">
                                <img src={rock} height={150} />
                                <h3 className='mt-4'>360 Visualization</h3>
                                <p className="features_text" style={{ textAlign: 'justify' }}>Get ready to explore every angle, every detail, and every curve of your dream car from the comfort of your screen. Our cutting-edge technology brings the showroom to you, allowing you to virtually step inside the driver's seat and truly immerse yourself.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 mb-5">
                            <div className="ft-1 text-center header-img-section">
                                <img src={puzzle} width={150} />
                                <h3 className='mt-4'>Secure Payment</h3>
                                <p className="features_text" style={{ textAlign: 'justify' }}>We take your security seriously, and that's why we've implemented state-of-the-art secure payment systems. Your financial information is safeguarded with the latest encryption technology, ensuring your transactions are always safe and secure.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 mb-5">
                            <div className="ft-2 text-center header-img-section">
                                <img src={statis} width={150} />
                                <h3 className='mt-4'>360 Visualization</h3>
                                <p className="features_text" style={{ textAlign: 'justify' }}>Get ready to explore every angle, every detail, and every curve of your dream car from the comfort of your screen. Our cutting-edge technology brings the showroom to you, allowing you to virtually step inside the driver's seat and truly immerse yourself.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 mb-5">
                            <div className="ft-1 text-center header-img-section">
                                <img src={noti} width={150} />
                                <h3 className='mt-4'>Secure Payment</h3>
                                <p className="features_text" style={{ textAlign: 'justify' }}>We take your security seriously, and that's why we've implemented state-of-the-art secure payment systems. Your financial information is safeguarded with the latest encryption technology, ensuring your transactions are always safe and secure.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 mb-5">
                            <div className="ft-2 text-center header-img-section">
                                <img src={proct} width={150} />
                                <h3 className='mt-4'>360 Visualization</h3>
                                <p className="features_text" style={{ textAlign: 'justify' }}>Get ready to explore every angle, every detail, and every curve of your dream car from the comfort of your screen. Our cutting-edge technology brings the showroom to you, allowing you to virtually step inside the driver's seat and truly immerse yourself.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Features