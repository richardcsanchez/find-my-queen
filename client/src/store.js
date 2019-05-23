import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import FormReducer from './reducers/dragQueenFormData';
import DragQueenReducer from './reducers/manageDragQueens'

const reducers = combineReducers({
  dragQueens: DragQueenReducer,
  form: FormReducer
})

const middleware = [thunk]

let store = createStore(reducers,
  applyMiddleware(...middleware)
);

export default store
