
import { GET_WISHLIST, UPDATE_WISHLIST, UPDATE_USER_WISHLIST } from '../constants'
import Api from '../Api'

export function getWishlist(wishlistId) {
    // console.log("get wishlist called");
    // thunk
    return function (dispatch) {
        dispatch({ type: 'REQUEST_BEGIN', message: 'Loading wishlist..' })
        Api.getWishlist(wishlistId)
            .then(response => response.data)
            .then(wishlist => {
                // log
                // console.log(wishlist);
                dispatch({ type: 'REQUEST_FINISH', message: '' })
                dispatch({ type: GET_WISHLIST, wishlist }) // async action
            })
            .catch(error => {
                dispatch({ type: 'REQUEST_ERROR', message: 'Error while loading wishlist' })
            })
    }

}

export function updateWishlist(wishlistId, wishlistObj) {
    // console.log("Add to wishlist/remove CART called");
    return function (dispatch) {
        dispatch({ type: 'REQUEST_BEGIN', message: 'Adding to wishlist..' })
        Api.updateWishlist(wishlistId, wishlistObj)
            .then(response => response.data)
            .then(wishlist => {
                // log
                dispatch({ type: 'REQUEST_FINISH', message: 'product added to wishlist' })
                dispatch({ type: UPDATE_WISHLIST, wishlist }) // async action
                wishlistObj.id = wishlist.id;
                dispatch({ type: UPDATE_USER_WISHLIST, wishlist: wishlistObj })
            })
            .catch(error => {
                dispatch({ type: 'REQUEST_ERROR', message: 'Error while adding to wishlist' })
            })
    }

}
