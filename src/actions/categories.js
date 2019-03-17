
import { LOAD_CATEGORIES } from '../constants'
import Api from '../Api'

export function loadCategories() {
  // thunk
  return function (dispatch) {
    dispatch({ type: 'REQUEST_BEGIN', message: 'Loading Categories..' })
    Api.loadCategories()
      .then(response => response.data)
      .then(categories => {
        // log
        dispatch({ type: 'REQUEST_FINISH', message: '' })
        dispatch({ type: LOAD_CATEGORIES, categories }) // async action
      })
      .catch(error => {
        dispatch({ type: 'REQUEST_ERROR', message: 'Error while loading categories' })
      })
  }

}