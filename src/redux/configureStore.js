import {
  applyMiddleware, combineReducers, createStore,
} from 'redux';
import thunk from 'redux-thunk';
import greetingsReducer from './greetings/greetings';

const rootReducer = combineReducers({
  greetings: greetingsReducer,
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunk),
);

export default store;
