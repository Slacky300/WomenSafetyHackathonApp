import React from "react";
import { Link } from "react-router-dom";
import "../styles/Emergency.css";
import {PiSirenBold} from "react-icons/pi"

const Emergency = () => {
  return (
    <div>
      <section className="banner_wrapper3">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 ">
              {/* <img src="" alt='Hello Carwale' className='img-fluid' /> */}
              <button class="button ">
              <PiSirenBold size={100}/>
              </button>
            </div>
            <div className="col-md-6 my-5 my-md-0 text-center text-md-start">
              <p className="banner-subtitle2">Your Safety our Priority</p>
              <h1 className="banner-title2">
                Help us bring women safety to <span>Reality</span> with us
              </h1>
              {/* <p className="banner-title-text " style={{ textAlign: 'justify' }}>Experience car buying like never before. CarWale offers an extensive range of options, unbeatable deals, expert guidance, and a hassle-free journey to your dream car. Discover, compare, and drive with confidence.</p> */}
              <div className="learn-more-btn-section">
                <Link
                  to=""
                  className="nav-link learn-more-btn btn-header"
                  href="#car"
                >
                  Edit your profile
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Emergency;
