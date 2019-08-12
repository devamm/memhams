import {createStore, combineReducers, applyMiddleware} from 'redux';
import thinkMiddleware from 'redux-thunk';
import user from './users';

const reducer = combineReducers({user});

const middleware = applyMiddleware(thinkMiddleware);

const store = createStore(reducer, middleware)

export default store;
export * from './users';