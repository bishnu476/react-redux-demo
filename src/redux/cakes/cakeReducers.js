import {BUY_CAKE} from "./constants";

const initialState = {
    numberOfCake : 45
}
export const cakeReducer = (state = initialState, action)=>{
    switch (action.type) {
        case BUY_CAKE: return{
            ...state,
            numberOfCake: state.numberOfCake -1
        }
        default: return state

    }
}
