import React from 'react'
import './Header.css';
import { FaAmbulance } from "react-icons/fa";

const Header = () => {
  return (
   <>
   <div className='headerContainer'>
        <div className="headerContent">
          <h1 className='headerTitle'>
            <span>Medix</span> Healthcare - Come to Expect the Best in Town
          </h1>
          <div className='headerIconSection'>
            <FaAmbulance className='ambIcon'/>
            <h1>Emergency Line (+001) 321-125-152</h1>
          </div>
        </div>
      </div>
   </>
  )
}

export default Header
