import React, { useEffect } from 'react'
import '../../styles/auth.css'
import { Link } from 'react-router-dom'
import login from '../../images/login.png'

const Login = () => {

    useEffect(() => {
        window.scrollTo(0,0)
    },[])
    return (
        <div className='marginStyle'>
            <div class="container d-flex justify-content-center align-items-center">
                <div class="row border rounded-5 p-3 bg-white shadow box-area reverseCol">
                    <div class="col-md-6 rounded-4 d-flex justify-content-center align-items-center flex-column left-box">
                        <div class="featured-image mb-3 animateImg">
                            <img src={login} class="img-fluid" width={500} />
                        </div>
                    </div>
                    <div class="col-md-6 right-box">
                        <div class="row align-items-center">
                            <div class="header-text mb-4">
                                <h2>Welcome</h2>
                                <p>We are happy to have you back</p>
                            </div>
                            <div class="input-group d-flex  align-items-center mb-4">
                                <div class="form-outline flex-fill mb-0">
                                    <input type="text" class="form-control form-control-lg border-dark  fs-6" placeholder="Email address" required />
                                </div>
                            </div>
                            <div class="input-group d-flex flex-row align-items-center">
                                <div class="form-outline flex-fill mb-0">
                                    <input type="password" class="form-control form-control-lg border-dark fs-6" placeholder="Password" required />
                                </div>
                            </div>
                            {/* <div class="input-group mb-5 d-flex justify-content-between">
                                <div class="forgot">
                                    <small><a href="#">Forgot Password?</a></small>
                                </div>
                            </div> */}

                            <div class="d-flex flex-row align-items-center mt-4 ">
                                <div class="form-outline flex-fill mb-0">
                                    <button class="btn btn-lg  text-white" type="button" style={{ backgroundColor: 'blueviolet', width: '100%' }} >Login</button>
                                </div>
                            </div>
                            <div class="d-flex flex-row align-items-center my-3 ">
                                <div class="form-outline flex-fill mb-0 " >
                                    <Link to='/register' class="btn btn-outline-dark btn-lg btn-block" style={{ width: '100%' }} type="button">Register</Link>
                                </div>
                            </div>
                            {/* <div class="input-group mb-3">
                                <button class="btn btn-lg btn-light w-100 fs-6"><img src="images/google.png" style={{ width: "20px" }} class="me-2" /><small>Sign In with Google</small></button>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default Login
