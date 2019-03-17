
import { GET_ORDERS } from '../constants'
import Api from '../Api'

export function getOrders(userId) {
    
    return function (dispatch) {
        dispatch({ type: 'REQUEST_BEGIN', message: 'Loading Orders..' })
        Api.getOrders(userId)
            .then(response => response.data)
            .then(orders => {
                // log
                // console.log(cart);
                dispatch({ type: 'REQUEST_FINISH', message: '' })
                dispatch({ type: GET_ORDERS, orders }) // async action
            })
            .catch(error => {
                dispatch({ type: 'REQUEST_ERROR', message: 'Error while loading cart' })
            })
    }

}

