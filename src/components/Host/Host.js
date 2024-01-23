import React from 'react';
import "./Host.scss";

function Host({ name, picture }) {
  const [firstName, lastName] = name.split(' ');

  return (
    <>
      <div className="info-host">
        <div className='name-host'>
          <p>{firstName}</p>
          <p>{lastName}</p>
        </div>
        <img className="picture-host" src={picture} alt="Host" />
      </div>
    </>
  );
}

export default Host;