import {createStore} from 'redux'
import {cakeReducer} from "./cakeReducers";
const store = createStore(cakeReducer);

export default store
