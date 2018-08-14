import { connect } from 'react-redux';
import App from '../App';
import { moveObjects, startGame, fire } from '../actions/index';

const mapStateToProps = state => ({
  angle: state.angle,
  gameState: state.gameState,
});

const mapDispatchToProps = dispatch => ({
  moveObjects: (mousePosition) => {
    dispatch(moveObjects(mousePosition));
  },

  startGame: () => {
    dispatch(startGame());
  },

  fire: (mousePosition) => {
    dispatch(fire(mousePosition))
  },
});

const Game = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

export default Game;