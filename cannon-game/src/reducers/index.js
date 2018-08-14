import { MOVE_OBJECTS, START_GAME, FIRE } from '../actions';
import moveObjects from './moveObjects';
import startGame from './startGame';
import fire from './fire';


const initialGameState = {
  started: false,
  kills: 0,
  lives: 3,
  flyingObjects: [],
  lastObjectCreatedAt: new Date(),
  cannonBalls: []
};


const initialState = {
  angle: 45,
  gameState: initialGameState,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case MOVE_OBJECTS: 
      return moveObjects( state, action );
    
    case START_GAME:
      return startGame(state, initialGameState)

    case FIRE:
      return fire(state, action)
      
    default:
      return state;
  }
}

export default reducer;