import React from 'react';
import PropTypes from 'prop-types';
import Sky from './sky';
import Ground from './ground';
import CannonBase from './cannonBase';
import CannonTube from './cannonTube';

const Canvas = (props) => {
  const viewBox = [
    window.innerWidth / -2, 
    100 - window.innerHeight, 
    window.innerWidth, 
    window.innerHeight];

  return (
    <svg
      id="aliens-leave-canvas"
      preserveAspectRatio="xMazYMax none"
      onMouseMove={props.mouseTrack}
      viewBox={viewBox}
    >
    
    <Sky />
    <Ground />
    <CannonTube rotation={props.angle} />
    <CannonBase />

    </svg>
  );
};

Canvas.PropTypes = {
  angle: PropTypes.number.isRequired,
  mouseTrack: PropTypes.func.isRequired,
}

export default Canvas;
