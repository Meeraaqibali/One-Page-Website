import React from 'react';
import Box from './Box';
import image1 from '../images/s1.png'; // Corrected import statement
import image2 from '../images/s2.png'; // Corrected import statement

function Services() {
  return (
    <div id='services'>
      <div className="s-heading">
        <h1>Services</h1>
        <p>Here are some Services I provide</p>
      </div>
      <div className="b-container">
        <Box image={image1} alt="image1" button="PYTHON" />
        <Box image={image2} alt="image2" button="REACT" />
      </div>
    </div>
  );
}

export default Services;
