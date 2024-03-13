import React from 'react';
import './ParentElement.css';

const ParentElement = ({ title, expanded, onClick, children }) => {
  return (
    <div className={`parent-element ${expanded ? 'expanded' : ''}`} onClick={onClick}>
      <div className="parent-title">{title}</div>
      {expanded && <div className="children-container">{children}</div>}
    </div>
  );
};

export default ParentElement;
