import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import DragQueenReducer from './reducers/manageDragQueens'

const reducers = combineReducers({
  dragQueens: DragQueenReducer,
})

const middleware = [thunk]

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(reducers,
  composeEnhancer(applyMiddleware(...middleware))
);

export default store
