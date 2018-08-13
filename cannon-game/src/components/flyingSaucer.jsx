import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import FlyingSaucerBase  from './flyingSaucerBase';
import FlyingSaucerTop  from './flyingSaucerTop';
import { gameHeight } from '../utils/constants';

const moveVertically = keyframes`
  0% {
    transform: translateY(0);
  }

  100% {
    transform: translateY(${gameHeight}px);
  }
`;

const Move = styled.g`
  animation ${moveVertically} 4s linear;
`;


const FlyingSaucer = (props) => (
  <Move>
    <FlyingSaucerBase position={props.position} />
    <FlyingSaucerTop position={props.position} />
  </Move>
);

FlyingSaucer.PropTypes = {
  position: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired
  }).isRequired
};

export default FlyingSaucer;
