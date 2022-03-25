import React from 'react';
import './OuterContentContainer.css';

function OuterContentContainer({ children }) {
  return (
    <div className="outer-content-container">
      {children}
    </div>
  );
}

export default OuterContentContainer;