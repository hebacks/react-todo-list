import { createStore, applyMiddleware, compose } from 'redux';
// import thunk from 'redux-thunk';
import appReducer from './reducers/appReducer';

const initialState = {};
const middleware = [];

const store = createStore(
  appReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), // eslint-disable-line
  ),
);

export default store;
