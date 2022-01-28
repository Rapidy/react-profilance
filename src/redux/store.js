import { createStore } from 'redux';
import reducer from './reducers/mainReducer';

export const store = createStore(reducer);
