import { UPDATE_USER_CART, GET_USER, UPDATE_USER_WISHLIST } from '../constants'
export function userReducer(state = {}, action) {
    //
    switch (action.type) {
        case GET_USER: {
            // console.log("user action =>",action);
            let { userDataObjForState } = action;
            return Object.assign({}, userDataObjForState);
        }
        case UPDATE_USER_CART: {
            let { cart } = action;

            let updatedCart = JSON.parse(JSON.stringify(cart));
            let newState = Object.assign({}, state);
            newState.carts = updatedCart;

            return newState;
        }
        case UPDATE_USER_WISHLIST: {
            let { wishlist } = action;

            let updatedWishlist = JSON.parse(JSON.stringify(wishlist));
            let newState = Object.assign({}, state);
            newState.wishlists = updatedWishlist;
            return newState;
        }
        default:
            return state;
    }
}