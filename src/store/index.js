
import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers'
// import rootSaga from '../sagas'

import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'

import { composeWithDevTools } from 'redux-devtools-extension';

const intialState = {

  loader: false,
  categories: [],
  products: [],
  search: [],
  searchresult: [],
  cart: {
    products: []
  },
  wishlist: {
    products: []
  },
  // user: {
  //   carts: {
  //     products: []
  //   },
  //   wishlists: {
  //     products: []
  //   }
  // }
  user: {
    fullName: "",
    email: "",
    id: "",
    carts: {},
    wishlists: {}
  },
  orders: []
}

const sagaMiddleware = createSagaMiddleware()

let middlewares = [thunk, sagaMiddleware];

const store = createStore(rootReducer, intialState, composeWithDevTools(
  applyMiddleware(...middlewares)
))

// sagaMiddleware.run(rootSaga)

export default store;