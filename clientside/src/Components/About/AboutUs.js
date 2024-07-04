import React from 'react';
import { Link } from 'react-router-dom';
import SubScrib from '../SunscribeForm/SubScrib';

const AboutUs = () => {
  const bulletStyle = {
    display: 'inline-block',
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    backgroundColor: '#0798BC',
    marginRight: '10px',
    verticalAlign: 'middle', // Ensures vertical alignment with text
  };
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-12 text-center mb-4">
          <h1 className="heading">Welcome to Medix</h1>
          <hr className="heading_space" />
        </div>
        <div className="col-md-7 col-sm-6 mb-4">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            It has survived not only five centuries.
          </p>

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            It has survived not only five centuries.
          </p>
          <ul style={{ listStyle: 'none', paddingLeft: '0' }}>
            <li className="mb-2">
              <span style={bulletStyle}></span> Cardiothoracic Surgery
            </li>
            <li className="mb-2">
              <span style={bulletStyle}></span> Nuclear magnetic
            </li>
            <li className="mb-2">
              <span style={bulletStyle}></span> Cardiovascular Diseases
            </li>
            <li className="mb-2">
              <span style={bulletStyle}></span> Ophthalmology
            </li>
            <li className="mb-2">
              <span style={bulletStyle}></span> Neurology
            </li>
          </ul>
         

          {/* <Link to="/more-info">
            <button className="btn btn-primary mt-3">More Info</button>
          </Link> */}
        </div>
        <div className="col-md-5 col-sm-6 mb-4">
          <img src="http://www.themesindustry.com/html/medix/images/welcome.jpg" alt="Welcome to Medix" className="img-fluid" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
