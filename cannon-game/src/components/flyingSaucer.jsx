import React from 'react';
import PropTypes from 'prop-types';
import FlyingSaucerBase  from './flyingSaucerBase';
import FlyingSaucerTop  from './flyingSaucerTop';

const FlyingSaucer = (props) => (
  <g>
    <FlyingSaucerBase position={props.position} />
    <FlyingSaucerTop position={props.position} />
  </g>
);

FlyingSaucer.PropTypes = {
  position: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired
  }).isRequired
};

export default FlyingSaucer;
