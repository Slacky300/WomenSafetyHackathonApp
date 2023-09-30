import React from "react";
import Sidebar from "../Components/Dash/Sidebar";

const Dashboard = (props) => {
  return (
    <div className="d-flex justify-content-start">
        <Sidebar/>
        
    <div className="d-flex flex-column">

      <div className="card mt-5 w-100  mx-5 h-30">
        <h5 className="card-header" style={{backgroundColor:"Green", color:"white"}}>Report</h5>
        <div className="card-body">
          <h5 className="card-title">victimname needs help</h5>
          <p className="card-text">
            Formatted Address
          </p>
          <a href="#" className="btn btn-primary">
            Respond
          </a>
        </div>
      </div>


      <div className="card mt-5 w-100  mx-5 h-30">
        <h5 className="card-header" style={{backgroundColor:"Green", color:"white"}}>Report</h5>
        <div className="card-body">
          <h5 className="card-title">victimname needs help</h5>
          <p className="card-text">
            Formatted Address
          </p>
          <a href="#" className="btn btn-primary">
            Respond
          </a>
        </div>
      </div>


      <div className="card mt-5 w-100 mx-5 h-30">
        <h5 className="card-header" style={{backgroundColor:"Green", color:"white"}}>Report</h5>
        <div className="card-body">
          <h5 className="card-title">victimname needs help</h5>
          <p className="card-text">
            Formatted Address
          </p>
          <a href="#" className="btn btn-primary">
            Respond
          </a>
        </div>
      </div>

      </div>


      
    </div>
  );
};

export default Dashboard;
