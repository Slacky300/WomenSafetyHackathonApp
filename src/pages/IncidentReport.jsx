import React from "react";
import Sidebar from "../Components/Dash/Sidebar";
import { useState } from "react";
import axios from 'axios'
import { useEffect } from "react";

const Dashboard = (props) => {
  const [incidentreport, setincidentreport] = useState([]);
  const [report,setReport] = useState("")

  const getAllIncident = async () => {
    try {
      const { data } = await axios.get('https://womensecbackend.onrender.com/api/v1/incidents')

      if (data) {
        setincidentreport(data)
      }
      console.log(data)
    } catch (err) {
      console.log(err)
    }
  }

  const [ack,setAck] = useState(false)


  const acknowledge = async (incId) => {
    try{
      const res = await fetch(`https://womensecbackend.onrender.com/api/v1/incidents${incId}`,{
        method:"PATCH",
        headers: {'Content-type': 'application/json'}
      });

      if(res.status === 200){
        alert("Updated")
      }

    }catch(e){
      alert("Something went wrong")
    }finally{
      setAck(!ack);
    }
  }

  useEffect(() => {
    getAllIncident();
    window.scrollTo(0, 0)
  }, [ack])

  return (
    <div className="d-flex justify-content-start">
      <Sidebar />
      <div className="container table-responsive mx-3">
        <div className='features_wrapper' style={{ marginTop: '-50px' }}>
          <div className="row">
            <div className="col-12 text-center">
              <p className="features_subtitle">Latest Women Incident Reported !</p>
              <h2 className="features_title">Women Incident Data</h2>
            </div>
          </div>
        </div>
        <table class="table table-striped table-bordered table-hover" style={{ marginTop: '-50px' }}>
          <thead className="table-dark text-center">
            <tr >
              <th scope="col">Name</th>
              <th scope="col">Report</th>
              <th scope="col">Address</th>
              <th scope="col">Pincode</th>
              <th scope="col">Incident recorded Date & Time</th>
              <th scope="col">Acknowledgement Status</th>
              
            </tr>
          </thead>
          <tbody className="text-center ">
            {incidentreport?.map((p,_) => (
                <>
                    {p.isSeen?(<>
                    
                      <tr  key={_}>
                      <th  style={{color: "green"}} scope="row">{p.uname} Hello</th>
                      <td>{p.report}</td>
                      <td>{p.address}</td>
                      <td>{p.pincode}</td>
                      <td>{p.createdAt.split('T')[0]} - {p.createdAt.split('T')[1].split('.')[0]}</td>
                      <td><button className="btn btn-success" >Acknowledged</button></td>
                    </tr>
                    </>):(<>
                      <tr  key={_}>
                      <th  style={{color: "red"}} scope="row">{p.uname}</th>
                      <td><button type="button" class="btn btn-dark" onClick={() => setReport(p.report)} data-bs-toggle="modal" data-bs-target="#exampleModal">
                       View Report
                      </button></td>
                      <td>{p.address}</td>
                      <td>{p.pincode}</td>
                      <td>{p.createdAt.split('T')[0]} - {p.createdAt.split('T')[1].split('.')[0]}</td>
                      <td><button className="btn btn-danger" onClick={() => acknowledge(p._id)} >Acknowledge</button></td>
                    </tr>
                    </>)}
                </>
            ))}
          </tbody>
        </table>
      </div>

      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              {report}
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </div >

  );
};

export default Dashboard;
