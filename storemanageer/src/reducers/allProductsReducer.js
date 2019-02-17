import {ALL_PRODUCTS, PRODUCT_ERRORS} from "../actions/productActionTypes";

const initialState = {
    allProducts: {}
};

export default function(state=initialState, action){
    switch(action.type){
        case ALL_PRODUCTS:
            return {
                ...state,
                allProducts: action.payload
            };
        case PRODUCT_ERRORS:
            return {
                ...state,
                allProducts: action.payload
            };
        default:
            return state

    }
}
