
import { GET_ORDERS } from '../constants'

export function ordersReducer(state = {}, action) {
    //
    switch (action.type) {
        case GET_ORDERS: {
            let { orders } = action
            return [...orders];
        }
        default:
            return state;
    }
}