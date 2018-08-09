import React from 'react';
import PropTypes from 'prop-types';
import Sky from './sky';
import Ground from './ground';
import CannonBase from './cannonBase';
import CannonTube from './cannonTube';
import CannonBall from './cannonBall';
import CurrentScore from './currentScore';
import FlyingSaucer from './flyingSaucer';
import Heart from './heart';
import StartGame from './startGame';

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

    <defs>
      <filter id="shadow">
        <feDropShadow dx="1" dy="1" stdDeviation="2" />
      </filter>
    </defs>
    
    <Sky />
    <Ground />
    <CannonTube rotation={props.angle} />
    <CannonBase />
    <CannonBall position={{x:0, y: -100}} />
    <CurrentScore score={20} /> 
    {/* hardcoded score to show up */}
    <FlyingSaucer position={{x: -150, y: -300}}/>
    <FlyingSaucer position={{x: 150, y: -300}}/>
    <Heart position={{x: -300, y: 35}} />
    <StartGame onClick={() => console.log('TAKE AIM! WE ARE UNDER ATTACK.')} />


    </svg>
  );
};

Canvas.PropTypes = {
  angle: PropTypes.number.isRequired,
  mouseTrack: PropTypes.func.isRequired,
}

export default Canvas;
