
import { LOAD_EVENT, CREATE_EVENT, DELETE_EVENT } from '../constants'

export function eventsReducer(state = [], action) {
  //
  switch (action.type) {
    case LOAD_EVENT: {
      let { events } = action
      return [...events]
    }
    case CREATE_EVENT: {
        let { event } = action;
        return [...state, event]
    }
    case DELETE_EVENT: {
        console.log(action)
        return state.filter(event => event.id !== action.id)
    }
    default:
      return state;
  }
}