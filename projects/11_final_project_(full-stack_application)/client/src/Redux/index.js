import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import coins from './coins';

let store = createStore(combineReducers({ coins }), applyMiddleware(thunk));

export default store;