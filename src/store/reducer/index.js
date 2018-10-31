import * as Types from "../action-types";
import {combineReducers} from "redux";

let initState = {
   
        type:"tuijian",
        sliders:[]
    
};
const homeR = (state = initState , action) => {
    switch (action.type) {
        case Types.SET_SLIDERS:
        return {...state,sliders:action.payload}
        default:
            return state
    }
}
let reducers = combineReducers({
    homeR
})
export default reducers;
