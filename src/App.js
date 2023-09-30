import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import { Toaster } from 'react-hot-toast';
import './App.css';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import About from './pages/About';
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



function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
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
      <Footer/>
    </Router>
  );
}

export default App;
