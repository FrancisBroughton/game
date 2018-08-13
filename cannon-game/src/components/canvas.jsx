import React from 'react';
import PropTypes from 'prop-types';
import Sky from './sky';
import Ground from './ground';
import CannonBase from './cannonBase';
import CannonTube from './cannonTube';
import CannonBall from './cannonBall';
import CurrentScore from './currentScore';
import FlyingSaucer from './flyingSaucer';
// import Heart from './heart';
import StartGame from './startGame';
import GameTitle from './gameTitle'

const Canvas = (props) => {
  const gameHeight = 1200;
  const viewBox = [
    window.innerWidth / -2, 
    100 - gameHeight, window.innerWidth, 
    gameHeight];

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

    {!props.gameState.started && (
      <g> 
        <StartGame onClick={() => props.startGame()} />
        <GameTitle />
      </g>
    )
    }

    {props.gameState.started && (
      <g> 
        {props.gameState.flyingObjects.map(flyingObject => (
        <FlyingSaucer
          key={flyingObject.id}
          position={flyingObject.position}
        />
        ))}
      </g>
    )
    }

    {/* <Heart position={{x: -300, y: 35}} /> */}

    </svg>
  );
};

Canvas.PropTypes = {
  angle: PropTypes.number.isRequired,
  gameState: PropTypes.shape({
    started: PropTypes.bool.isRequired,
    kills: PropTypes.number.isRequired,
    lives: PropTypes.number.isRequired,
    flyingObjects: PropTypes.arrayOf(PropTypes.shape({
      position: PropTypes.shape({
        x: PropTypes.number.isRequired,
        y: PropTypes.number.isRequired
      }).isRequired,
      id: PropTypes.number.isRequired,
    })).isRequired,
  }).isRequired,


  trackMouse: PropTypes.func.isRequired,
  startGame: PropTypes.func.isRequired,
};

export default Canvas;
