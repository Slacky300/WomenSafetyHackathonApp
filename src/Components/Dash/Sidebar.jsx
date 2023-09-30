import React from "react";
import "../../styles/Sidebar.css";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { useAuth } from "../../context/auth";

const Sidebar = () => {
  const [auth, setAuth] = useAuth();

  const handleSubmit = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("Logged Out Successfully");
  };

  return (
    <div>
      <section className="sde">
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
          <Link to="/" style={{ textDecoration: "none" }}>
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
          <Link to="/dashboard" style={{ textDecoration: "none" }}>
            <a href="#" className="nav-link text-white">
              <svg className="bi me-2" width={16} height={16}>
                <use xlinkHref="#speedometer2" />
              </svg>
              Emergency Alert
            </a>
            </Link>
          </li>
          <li>
          <Link to="/incident" style={{ textDecoration: "none" }}>
            <a href="#" className="nav-link text-white">
              <svg className="bi me-2" width={16} height={16}>
                <use xlinkHref="#table" />
              </svg>
              Incident Report
            </a>
            </Link>
          </li>
          <li>
          <Link to="/closedreport" style={{ textDecoration: "none" }}>
            <a href="#" className="nav-link text-white">
              <svg className="bi me-2" width={16} height={16}>
                <use xlinkHref="#grid" />
              </svg>
              Closed Reports
            </a>
            </Link>
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
            <a
              className="nav-link learn-more-btn-logout"
              style={{ fontSize: "4px" }}
              aria-current="page"
            >
              Logout
            </a>
          </Link>
        </div>
      </div>
      </section>

<section className="abc dfe" style={{marginTop: '5%'}}>
        <nav class="navt bg-white">
          <a href="{% url 'btmNav' %}" class="nav-linkt">
          <i class="fa-solid fa-house"></i>            
          <span class="nav-text">Home</span>
          </a>

          <a href="{% url 'notes' %}" class="nav-linkt">
          <i class="fa-solid fa-tower-broadcast"></i>
          <span class="nav-text">Emergency Alert</span>
          </a>

          <a href="{% url 'addNotes' %}" class="nav-linkt">
          <i class="fa-regular fa-flag"></i>            
          <span class="nav-text">Incident Report</span>
          </a>

          <a href="{% url 'referenceBooks' %}" class="nav-linkt">
          <i class="fa-solid fa-folder-closed"></i>
          <span class="nav-text">Closed report</span>
          </a>

          <a href="{% url 'pyqA' %}" class="nav-linkt">
          <i class="fa-solid fa-arrow-right-from-bracket"></i>
           <span class="nav-text">LOGOUT</span>
          </a>

          
        </nav>
      </section>
    </div>
  );
};

export default Sidebar;
