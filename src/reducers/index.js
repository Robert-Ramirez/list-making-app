import { combineReducers } from 'redux';
import listsReducer from './Cards/listsReducer';
import cardsReducer from './Cards/cardsReducer';
import boardsReducer from './Boards/boardsReducer';
import boardOrderReducer from './Boards/boardOrderReducer';
import activeBoardReducer from './Boards/activeBoardReducer';

export default combineReducers({
  lists: listsReducer,
  cards: cardsReducer,
  boards: boardsReducer,
  boardOrder: boardOrderReducer,
  activeBoard: activeBoardReducer
});
