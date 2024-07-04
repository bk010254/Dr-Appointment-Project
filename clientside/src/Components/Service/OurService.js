import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import { Carousel } from 'react-responsive-carousel';
import './OurService.css';
import SubScrib from '../SunscribeForm/SubScrib';

const OurService = () => {
  return (
    <>
    <div className="flex flex-col md:flex-row items-center justify-center p-4">
      {/* Left Side: Carousel */}
      <div className="md:w-1/4 w-full p-2">
        <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true}>
          <div>
            <img src="https://www.themesindustry.com/html/medix/images/medical-surgery.jpg" alt="Service 1" />
            <p className="legend">Service 1</p>
           
          </div>
          <div>
            <img src="https://www.themesindustry.com/html/medix/images/news2.jpg" alt="Service 2" />
            <p className="legend">Service 2</p>
          </div>
          <div>
            <img src="https://via.placeholder.com/200" alt="Service 3" />
            <p className="legend">Service 3</p>
          </div>
        </Carousel>
      </div>

      {/* Right Side: Working Hours */}
      <div className="lg:w-1/3 w-full bg-gray-100 rounded-lg shadow-md p-6">
      

        <h2 className="text-2xl font-bold mb-4" style={{color:'black'}}>Working Hours :</h2>
    
        <ul className="text-lg">
          <li className="flex justify-between border-b py-2"><span>Monday</span><span>09:00-20:00</span></li>
          <li className="flex justify-between border-b py-2"><span>Tuesday</span><span>09:00-21:00</span></li>
          <li className="flex justify-between border-b py-2"><span>Wednesday</span><span>09:00-20:00</span></li>
          <li className="flex justify-between border-b py-2"><span>Thursday</span><span>24-Hour Shift</span></li>
          <li className="flex justify-between border-b py-2"><span>Friday</span><span>09:00-21:00</span></li>
          <li className="flex justify-between border-b py-2"><span>Saturday</span><span>09:00-18:00</span></li>
          <li className="flex justify-between py-2"><span>Sunday</span><span>11:00-19:00</span></li>
        </ul>
      </div>
    </div>

    {/* <SubScrib /> */}
    </>
  
  )
}

export default OurService
