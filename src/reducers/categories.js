
import { LOAD_CATEGORIES } from '../constants'

export function categoriesReducer(state = [], action) {
  //
  switch (action.type) {
    case LOAD_CATEGORIES: {
      let { categories } = action
      return [...categories]
    }
    default:
      return state;
  }
}