import React from "react";
import "../../styles/Sidebar.css";
import { Link } from "react-router-dom"
import toast from 'react-hot-toast'
import { useAuth } from '../../context/auth'



const Sidebar = () => {

    const [auth, setAuth] = useAuth();

    const handleSubmit = () => {
        setAuth({
            ...auth,
            user: null,
            token: ''
        })
        localStorage.removeItem('auth')
        toast.success('Logged Out Successfully')
    }

  return (
    <div>
      <div
        className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark vh-100"
        style={{ width: 280 }}
      >
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
        >
          <svg className="bi me-2" width={40} height={32}>
            <use xlinkHref="#bootstrap" />
          </svg>
          <span className="fs-4">Admin Dasboard</span>
        </a>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
        <Link
            to="/login"
            style={{textDecoration:"none"}}
          >
          <li className="nav-item">
          
            <a href="#" className="nav-link text-white" aria-current="page">
              <svg className="bi me-2" width={16} height={16}>
                <use xlinkHref="#home" />
              </svg>
              Home
            </a>
          </li>
        </Link>
          <li>
            <a href="#" className="nav-link text-white">
              <svg className="bi me-2" width={16} height={16}>
                <use xlinkHref="#speedometer2" />
              </svg>
              Emergency Alert
            </a>
          </li>
          <li>
            <a href="#" className="nav-link text-white">
              <svg className="bi me-2" width={16} height={16}>
                <use xlinkHref="#table" />
              </svg>
              Incident Report
            </a>
          </li>
          <li>
            <a href="#" className="nav-link text-white">
              <svg className="bi me-2" width={16} height={16}>
                <use xlinkHref="#grid" />
              </svg>
              Closed Reports
            </a>
          </li>
          <li>
            <a href="#" className="nav-link text-white">
              <svg className="bi me-2" width={16} height={16}>
                <use xlinkHref="#people-circle" />
              </svg>
              Customers
            </a>
          </li>
        </ul>
        <hr />
        <div className="dropdown">
          <Link
            onClick={handleSubmit}
            to="/login"
            style={{ textDecoration: "none" }}
            className="nav-item text-center"
          >
            <a className="nav-link learn-more-btn-logout" style={{fontSize:"4px"}} aria-current="page">
              Logout
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
