import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import { Toaster } from 'react-hot-toast';
import './App.css';
import NotFound from './Components/Errors/404';
import Home from './pages/Home'
import Profile from './pages/Profile';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import Emergency from './pages/Emergency';
import Report from './pages/Report';
import Dashboard from './pages/Dashboard';
import Incident from './pages/IncidentReport'
import CloseFile from './pages/CloseFile'
import AboutUs2 from './pages/AboutUs2';
import { useEffect, useState } from 'react';

// function notifyUser(notificationText = "Thanks "){
//   if(!("Notification" in window)){
//     alert("Browser dosent support noti");
//   } else if (Notification.permission !== "granted"){
//     const notification = new Notification(notificationText);
//   } else if (Notification.permission !== "denied"){
//     Notification.requestPermission().then((permission) => {
//       if (permission === "granted"){
//         const notification = new Notification(notificationText);
//       }
//     });
//   }
// }

function App() {

  // const [ userResponded, setUserResponded]= useState(false);








  // useEffect(() => {
  //   function notifyMe() {
  //     if (!("Notification" in window)) {
  //       alert("This browser does not support desktop notification");
  //     } else if (Notification.permission === "granted") {
  //       const notification = new Notification("Victim needs help");
  
  //       notification.onclick = (event) => {
  //         event.preventDefault();
  //         window.open("http://localhost:3000/dashboard", "_blank");
  //       };
  //     } else if (Notification.permission !== "denied") {
  //       Notification.requestPermission().then((permission) => {
  //         if (permission === "granted") {
  //           const notification = new Notification("Hi there!");
            
  //           notification.onclick = (event) => {
  //             event.preventDefault();
  //             window.open("http://localhost:3000/dashboard", "_blank");
  //           };
  //         }
  //       });
  //     }
  //   }
  
  //   notifyMe();
  // }, []);
  
  
  


  return (
    
    
    
    <Router>
      <Routes> 
        
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<AboutUs2 />} />
      <Route path='/*' element={<NotFound/>} />
      <Route path='/profile' element={<Profile/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/report' element={<Report/>} />
      <Route path='/emergency' element={<Emergency/>} />
      <Route path='/dashboard' element={<Dashboard/>} />
      <Route path='/incident' element={<Incident/>} />
      <Route path='/closedreport' element={<CloseFile/>} />

      </Routes>
      <Toaster />
    </Router>
  
  )
  ;
  
}

export default App;
