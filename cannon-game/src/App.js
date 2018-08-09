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
  }

  mouseTrack(event) {
    this.canvasMousePostion = getCanvasPosition(event);
  }
  
  render() {
    return (
      <Canvas 
        angle={this.props.angle}
        mouseTrack={event => (this.mouseTrack(event))} 
      />
    );
  }
}

App.protoTypes = {
  angle: PropTypes.number.isRequired,
  moveObjects: PropTypes.func.isRequired,
};


export default App;
