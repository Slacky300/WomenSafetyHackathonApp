import React from 'react'
import '../styles/parallelx.css'
import payment from '../images/payment.png'

const Parallelx = () => {
    return (
        <div>
            <section class="more-info-section bg-color">
                <section class="container ">
                    <div class="row">
                        {/* <div class="col-xl-6 xol-lg-6 col-md-12 col-12 img-section">
                            <figure>
                                <img alt="mobile chat" class="img-fluid" width="100px" src={payment} />
                            </figure>
                        </div> */}

                        <div class="col-xl-6 xol-lg-6 col-md-12 col-12  d-flex flex-column justify-content-center align-items-start ">
                            <h1 class="common-heading text-capitalize fw-bolder text-white">
                                Steps for your Dream Car<br /> carwale.shop
                            </h1>
                            <p class="mt-3 mb-5 para-width text-white" style={{ textAlign: 'justify' }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Quis ipsum suspendisse ultrices gravi.Risus commodo viverra maecenas accumsan lacus vel facilisis
                                orem ipsum dolor sit amet, consectetur adipiscing.
                            </p>
                            <button class="btn learn-more-btn">Contact Us</button>
                        </div>
                    </div>
                </section>
            </section>
        </div>
    )
}

export default Parallelx
