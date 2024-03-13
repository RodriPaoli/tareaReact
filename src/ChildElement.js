import React from 'react';
import './ChildElement.css';

const ChildElement = ({ title, selected, onClick }) => {
  return (
    <div className={`child-element ${selected ? 'selected' : ''}`} onClick={onClick}>
      {title}
    </div>
  );
};

export default ChildElement;
