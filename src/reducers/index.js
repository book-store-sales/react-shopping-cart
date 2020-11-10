import {ADD_ITEM, REMOVE_ITEM} from '../actions'
import data from '../data'

const initialState = {
    products: data,
    cart: []
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_ITEM:
            return {
                ...state,
                cart:[...state.cart, action.payload]
            }
        case REMOVE_ITEM:
            return {
                ...state,
                cart: state.cart.filter(
                    (item) => item.id !== action.payload
                  )
            }
        default:
            return state;
    }

}