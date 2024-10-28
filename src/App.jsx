import React from "react";
import Navbar from "./components/Navbar.jsx";
import {Routes,Route} from "react-router-dom";


const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/doctors' element={<Doctors/>} />
        <Route path='/doctors/:speciality' element={<Doctors/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/my-profile' element={<Myprofile/>} />
        <Route path='/my-appointment' element={<Myappointment/>} />
        <Route path='/appointment/:docID' element={<Appointment/>} />



      </Routes>
      

    </div>
  )
}

export default App
