import React from 'react';


function Box(props) {
  return (
    <div className='s-box'>
        <div className="s-b-img">
            <img src={props.image} alt="{props.alte}" />
        </div>
        <div className="s-b-text">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Magnam doloremque dolores, excepturi voluptate earum perspiciatis modi necessitatibus pariatur nesciunt quae ipsam quod, quos porro tenetur! 
                Praesentium dolorum quam inventore maiores?</p>
                <a href="#" className="cv-btn1" id='btn'>{props.button}</a>
                </div>
    </div>
  )
}

export default Box;