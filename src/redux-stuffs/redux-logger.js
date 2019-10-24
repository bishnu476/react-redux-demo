
const redux = require('redux')
const createStore = redux.createStore;
const reduxLogger = require('redux-logger');

//loggerinitalization
const logger = reduxLogger.createLogger();
const applyMiddleware = redux.applyMiddleware;

//Action Constants
const BUY_CAKE = 'BUY_CAKE';

//Action
const buyCake = ()=>{
    return{
        type: BUY_CAKE,
        info: 'This is buy Cake Reducer'
    }
}

//Initial states inside the Store
const initialCakeState = {
    numberOfCake : 20,
}

// Reducer function
const cakeReducer = (state= initialCakeState, action)=>{
    switch (action.type) {
        case BUY_CAKE: return{
            ...state,
            numberOfCake: state.numberOfCake -1
        }
        default: return state;
    }
}

const store = createStore(cakeReducer, applyMiddleware(logger));
/*
console.log('Initial state',store.getState())
*/

const unsubscribe = store.subscribe(()=>{
/*
    console.log("updated state", store.getState())
*/
})

store.dispatch(buyCake())
store.dispatch(buyCake())
unsubscribe()
