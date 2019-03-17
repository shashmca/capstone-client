
import { LOAD_PRODUCTS, LOAD_PRODUCT_Detail } from '../constants'
import Api from '../Api'

export function loadProducts(catId) {
  // thunk
  return function (dispatch) {
    dispatch({ type: 'REQUEST_BEGIN', message: 'Loading Products..' })
    Api.loadProducts(catId)
      .then(response => response.data)
      .then(products => {
        // log
        dispatch({ type: 'REQUEST_FINISH', message: '' })
        dispatch({ type: LOAD_PRODUCTS, products }) // async action
      })
      .catch(error => {
        dispatch({ type: 'REQUEST_ERROR', message: 'Error while loading Products' })
      })
  }

}

export function loadProductById(pId) {
  // thunk
  return function (dispatch) {
    dispatch({ type: 'REQUEST_BEGIN', message: 'Loading Products..' })
    Api.loadProductById(pId)
      .then(response => response.data)
      .then(productObj => {
        // log
        dispatch({ type: 'REQUEST_FINISH', message: '' })
        dispatch({ type: LOAD_PRODUCT_Detail, productObj }) // async action
      })
      .catch(error => {
        dispatch({ type: 'REQUEST_ERROR', message: 'Error while loading Products' })
      })
  }
}