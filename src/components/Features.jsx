import React from 'react';
import featuresImage from '../images/Frame 19.png';

function Features() {
  return (
    <div id='features'>
      <div className='features-model'>
        <img src={featuresImage} alt='feature-image'/>
      </div>
      <div className="features-text">
        <h2>Features</h2> 
        <h3>This Application <span> Software </span>is Art</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Laborum unde voluptatibus ratione quia! Atque exercitationem, repellendus eius a repudiandae veniam facere molestiae rerum officia? At,
         quaerat! Optio dolore labore vitae!</p>
         <button>View More Features</button>
      </div>
    </div>
  );
}

export default Features;
