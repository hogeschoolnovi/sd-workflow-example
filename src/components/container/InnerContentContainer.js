import React from 'react';
import './InnerContentContainer.css';

function InnerContentContainer({children}) {
  return (
    <div className="inner-content-container">
      {children}
    </div>
  );
}

export default InnerContentContainer;