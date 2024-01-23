import React, { useState } from 'react';
import './Collapse.scss';
import arrow from '../../assets/arrow.png';
const Collapse = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`collapse_row_${isOpen ? 'open' : 'close'}`}>
      <div className="collapse_title">
        <h2>{title}</h2>
        <img
            src={arrow}
            alt={isOpen ? 'Up Arrow' : 'Down Arrow'}
            className={`arrow_${isOpen ? 'up' : 'down'}`}
            onClick={toggleCollapse}
          />
      </div>
      {isOpen && <div className="collapse_content">{content}</div>}
    </div>
  );
};

export default Collapse;