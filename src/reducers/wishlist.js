
import { GET_WISHLIST, UPDATE_WISHLIST } from '../constants'

export function wishlistReducer(state = {}, action) {
    //
    switch (action.type) {
        case GET_WISHLIST: {
            let { wishlist } = action
            return Object.assign({}, wishlist);
        }
        case UPDATE_WISHLIST: {
            let { wishlist } = action;
            return Object.assign({}, wishlist);
        }
        default:
            return state;
    }
}