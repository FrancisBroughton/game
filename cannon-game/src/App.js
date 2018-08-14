import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getCanvasPosition } from './utils/angleFormulas';
import Canvas from './components/canvas';


class App extends Component {
  constructor(props) {
    super(props);
    this.fire = this.fire.bind(this);
  }
  componentDidMount() {
    const self = this;
    setInterval(() => {
      self.props.moveObjects(self.canvasMousePostion);
    }, 10)

    window.onresize = () => {
      const cnv = document.getElementById('aliens-leave-canvas');
      cnv.style.width = `${window.innerWidth}px`;
      cnv.style.height = `${window.innerHeight}px`;
    };
    window.onresize();
  }

  mouseTrack(event) {
    this.canvasMousePostion = getCanvasPosition(event);
  }

  fire() {
    this.props.fire(this.canvasMousePostion);
  }
  
  render() {
    return (
      <Canvas 
        angle={this.props.angle}
        gameState={this.props.gameState}
        startGame={this.props.startGame}
        mouseTrack={event => (this.mouseTrack(event))} 
        fire={this.fire}
      />
    );
  }
}

App.protoTypes = {
  angle: PropTypes.number.isRequired,
  gameState: PropTypes.shape({
    started: PropTypes.bool.isRequired,
    kills: PropTypes.number.isRequired,
    lives: PropTypes.number.isRequired,
    flyingObjects: PropTypes.arrayOf(
      PropTypes.shape({
        position: PropTypes.shape({
          x: PropTypes.number.isRequired,
          y: PropTypes.number.isRequired
        }).isRequired,
        id: PropTypes.number.isRequired,
      })
    ).isRequired,
  }).isRequired,
  moveObjects: PropTypes.func.isRequired,
  startGame: PropTypes.func.isRequired,
  fire: PropTypes.func.isRequired,
};


export default App;
