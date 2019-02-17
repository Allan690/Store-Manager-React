import {ADD_PRODUCT} from "../actions/productActionTypes";

const initialState = {
    addedProduct: ''
};

export default function(state = initialState, action){
    switch(action.type){
        case ADD_PRODUCT:
            return {
                ...state,
                addedProduct: action.payload
            };
        default:
            return state
    }
}
