
import { LOAD_EVENT, CREATE_EVENT, DELETE_EVENT } from '../constants'
import Api from '../Api'

export function loadEvents(userId) {
  // thunk
  return function (dispatch) {
    dispatch({ type: 'REQUEST_BEGIN', message: 'Loading Events..' })
    Api.loadEvents(userId)
      .then(response => response.data)
      .then(events => {
        // log
        dispatch({ type: 'REQUEST_FINISH', message: '' })
        dispatch({ type: LOAD_EVENT, events }) // async action
      })
      .catch(error => {
        dispatch({ type: 'REQUEST_ERROR', message: 'Error while loading categories' })
      })
  }

}

export function addEvent(userId, event) {
  // thunk
  return function (dispatch) {
    dispatch({ type: 'REQUEST_BEGIN', message: 'Adding Event..' })
    Api.addEvent(userId, event)
      .then(response => response.data)
      .then(event => {
        // log
        dispatch({ type: 'REQUEST_FINISH', message: '' })
        dispatch({ type: CREATE_EVENT, event }) // async action
      })
      .catch(error => {
        dispatch({ type: 'REQUEST_ERROR', message: 'Error while loading categories' })
      })
  }

}

export function deleteEvent(eventId) {
  // thunk
  return function (dispatch) {
    dispatch({ type: 'REQUEST_BEGIN', message: 'Adding Event..' })
    Api.deleteEvent(eventId)
      .then(response => response.data)
      .then(event => {
        // log
        dispatch({ type: 'REQUEST_FINISH', message: '' })
        dispatch({ type: DELETE_EVENT, id: eventId }) // async action
      })
      .catch(error => {
        dispatch({ type: 'REQUEST_ERROR', message: 'Error while loading categories' })
      })
  }

}