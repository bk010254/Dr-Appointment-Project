import './App.css';
import React from 'react';
import Header from './Components/Header/Header';
import Nav2 from './Components/Navbar/Nav2';
import OurService from './Components/Service/OurService';
import AboutUs from './Components/About/AboutUs';
import HomePage from './Components/Home/HomePage';
import Appointment from './Components/Appointment/Appointment';
import ContactUs from './Components/ContactPage/ContactUs';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Nav2 />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="ourservice" element={<OurService />} />
          <Route path="appointment" element={<Appointment />} />
          <Route path="contactus" element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
