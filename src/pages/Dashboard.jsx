import React from "react";
import Sidebar from "../Components/Dash/Sidebar";

const Dashboard = (props) => {
  return (
    <div className="d-flex justify-content-start">
        <Sidebar/>
        
        <div class="card">

<img class="card-img-top" src="https://mdbootstrap.com/img/Photos/Others/images/43.webp" alt="Card image cap" width={200} />

<div class="card-body">

  <h4 class="card-title"><a>Card title</a></h4>
  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
    content.</p>
  <a href="#" class="btn btn-primary">Button</a>

</div>

</div>


      
    </div>
  );
};

export default Dashboard;
