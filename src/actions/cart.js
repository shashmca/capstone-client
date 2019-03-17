
import { LOAD_CART, UPDATE_CART, UPDATE_USER_CART } from '../constants'
import Api from '../Api'

export function loadCart(cartId) {
  // console.log("LOAD CART called");
  // thunk
  return function (dispatch) {
    dispatch({ type: 'REQUEST_BEGIN', message: 'Loading Cart..' })
    Api.loadCart(cartId)
      .then(response => response.data)
      .then(cart => {
        // log
        // console.log(cart);
        dispatch({ type: 'REQUEST_FINISH', message: '' })
        dispatch({ type: LOAD_CART, cart }) // async action
      })
      .catch(error => {
        dispatch({ type: 'REQUEST_ERROR', message: 'Error while loading cart' })
      })
  }

}

export function updateCart(cartId, cartObj) {
  // console.log("Add to cart/remove CART called");
  return function (dispatch) {
    dispatch({ type: 'REQUEST_BEGIN', message: 'Adding to Cart..' })
    Api.updateCart(cartId, cartObj)
      .then(response => response.data)
      .then(cart => {
        // log
        dispatch({ type: 'REQUEST_FINISH', message: 'product added to cart' })
        dispatch({ type: UPDATE_CART, cart }) // async action
        cartObj.id = cart.id;
        dispatch({ type: UPDATE_USER_CART, cart: cartObj })
      })
      .catch(error => {
        dispatch({ type: 'REQUEST_ERROR', message: 'Error while adding to cart' })
      })
  }

}
