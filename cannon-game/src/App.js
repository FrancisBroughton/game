import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getCanvasPosition } from './utils/angleFormulas';
import Canvas from './components/canvas';


class App extends Component {
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
  
  render() {
    return (
      <Canvas 
        angle={this.props.angle}
        gameState={this.props.gameState}
        startGame={this.props.startGame}
        mouseTrack={event => (this.mouseTrack(event))} 
      />
    );
  }
}

App.protoTypes = {
  angle: PropTypes.number.isRequired,
  moveObjects: PropTypes.func.isRequired,
  startGame: PropTypes.func.isRequired,
  gameState: PropTypes.shape({
    started: PropTypes.bool.isRequired,
    kills: PropTypes.number.isRequired,
    lives: PropTypes.number.isRequired,
  })
};


export default App;
