import {createStore} from 'redux';
import user from './users';

const store = createStore(user);

export default store;
export * from './users';