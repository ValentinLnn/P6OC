import React from 'react';
import "./Thumb.scss";

function Thumb({image, title}) {
  return (
    <div className='card'>
      <img src={image} alt={title} className='card_img' />
      <div className='card_box' />
      <h2 className='card_title'>{title}</h2>
    </div>

  )
}

export default Thumb;