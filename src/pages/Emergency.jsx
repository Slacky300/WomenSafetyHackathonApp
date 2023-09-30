import React from "react";
import { Link } from "react-router-dom";
import "../styles/Emergency.css";
import { PiSirenBold } from "react-icons/pi"
import { useEffect } from "react";
import Parallelx from '../Components/Parallelx'

const Emergency = () => {

  const showPosition = (position) => {
    let latitude = position.coords.latitude
    let longitude = position.coords.longitude
    console.log(latitude)
    console.log(longitude)
  }

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      console.log('Error')
    }
  }
  return (
    <>
      <div className="heightRes">
        <section className='banner_wrapper'>
          <div className='container'>
            <div className='row align-items-center '>
              <div className="col-md-12 my-5 my-md-0 text-center text-md-start">
                <p className="banner-subtitle" style={{ textAlign: 'center' }}>Your Safety our Priority</p>
                <h1 className="banner-title mb-5" style={{ textAlign: 'center' }}>Help us bring women safety to <span>Reality</span> with us</h1>
                <center>
                  <button class="button-30 text-center" onClick={getLocation} role="button" disabled><PiSirenBold size={200} className="text-white" /></button>
                </center>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Parallelx />
    </>
  );
};

export default Emergency;
