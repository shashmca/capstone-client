


import { LOAD_PRODUCTS, LOAD_PRODUCT_Detail } from '../constants';


export function productReducer(state = [], action) {
  //
  switch (action.type) {
    case LOAD_PRODUCTS: {
      let { products } = action
      return [...products]
    }
    default:
      return state;
  }
}

export function productDetailReducer(state = [], action) {
  //
  switch (action.type) {
    case LOAD_PRODUCT_Detail: {
      let { productObj } = action
      return { ...productObj }
    }
    default:
      return state;
  }
}