const redux = require('redux')
 const createStore = redux.createStore;
const combineReducer = redux.combineReducers;
const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM';
const BUY_TSHIRT = 'BUY_TSHIRT';

//here buyCake is the first Action
 const buyCake = ()=> {
    return {
        type: BUY_CAKE,
        info: 'Buy Cake action'
    }
}
 const buyIceCream = ()=> {
    return {
        type: BUY_ICECREAM,
        info: "Buy Ice Cream Action"
    }
}
const buyTshirt = ()=>{
     return{
        type: BUY_TSHIRT,
        info: 'Buy t-shirt Action'
    }
}

//Single reducer for two different Store
/*const initialState = {
    numberOfCakes: 10,
    numberOfIceCreams:20
}

const reducer = (state = initialState,action)=>{
    switch (action.type) {
        case BUY_CAKE: return{
            ...state,
            numberOfCakes: state.numberOfCakes - 1
        }
        case BUY_ICECREAM: return {
            ...state,
            numberOfIceCreams: state.numberOfIceCreams-1
        }
        default: return state
    }
}

const store = createStore(reducer)
console.log('initial state',store.getState())
const unsubscribe = store.subscribe(()=>{
    console.log('updated state',store.getState())
})*/

//Creating two different reducer for different store

const initialTshirtState = {
    numberOfTshirt: 50
}
const initialCakeState = {
    numberOfCake: 10
}
const initialIceCreamState= {
    numberOfIceCreams: 20
}

const tshirtReducer = (state = initialTshirtState, action)=>{
    switch (action.type) {
        case BUY_TSHIRT: return{
            ...state,
            numberOfTshirt: state.numberOfTshirt-1
        }
        default: return state
    }
}
const cakeReducer = (state = initialCakeState , action)=>{
    switch(action.type) {
        case BUY_CAKE: return{
            ...state,
            numberOfCake: state.numberOfCake-1
        }

        default: return state

    }
}

const iceCreamReducer = (state = initialIceCreamState , action)=>{
    switch (action.type) {
        case BUY_ICECREAM: return{
            ...state,
            numberOfIceCreams: state.numberOfIceCreams-1
        }

        default: return state
    }
}

const rootReducer = combineReducer({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    tshirt: tshirtReducer,
})

const store = createStore(rootReducer);
console.log('Initial State',store.getState());
const unsubscribe = store.subscribe(()=>{
    console.log('updated state', store.getState())
})
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyCake())
store.dispatch(buyTshirt())
store.dispatch(buyCake())
store.dispatch(buyTshirt())
unsubscribe()
