
import { LOAD_CART, UPDATE_CART } from '../constants'

export function cartReducer(state = {}, action) {
    //
    switch (action.type) {
        case LOAD_CART: {
            let { cart } = action
            return Object.assign({}, cart);
        }
        case UPDATE_CART: {
            let { cart } = action;
            let updatedCart = {};
            Object.assign(updatedCart, cart);
            return updatedCart;
        }
        default:
            return state;
    }
}