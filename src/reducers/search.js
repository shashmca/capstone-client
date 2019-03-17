
import { SEARCH_PRODUCTS, SEARCH_RESULTS } from '../constants'

export function searchReducer(state = [], action) {
  //
  switch (action.type) {
    case SEARCH_PRODUCTS: {      
      let { search } = action;      
      return [...search.data];
    }
    default:
      return state;
  }
}

export function searchResultReducer(state = [], action) {
  switch (action.type) {
    case SEARCH_RESULTS:{
      let { searchresult } = action;
      return [...searchresult.data];
    }
    default:
      return state;
  }
}

