import React from 'react';
import Sky from './sky';
import Ground from './ground';
import CannonBase from './cannonBase';
import CannonTube from './cannonTube';

const Canvas = () => {
  const viewBox = [
    window.innerWidth / -2, 
    100 - window.innerHeight, 
    window.innerWidth, 
    window.innerHeight];

  return (
    <svg
      id="aliens-leave-canvas"
      preserveAspectRatio="xMazYMax none"
      viewBox={viewBox}
    >
    
    <Sky />
    <Ground />
    <CannonTube rotation={45} />
    <CannonBase />

    </svg>
  );
};

export default Canvas;
