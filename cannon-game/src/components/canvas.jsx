import React from 'react';
import Sky from './sky';
import Ground from './ground';
import CannonBase from './cannonBase';

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
    <CannonBase />
    <circle cx={0} cy={0} r={50} />

    </svg>
  );
};

export default Canvas;
