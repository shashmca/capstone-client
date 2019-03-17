
import { GET_USER } from '../constants'
import Api from '../Api'

export function getUser(userEmailId, userDataObj) {
    // console.log("Get user called");
    // thunk
    return function (dispatch) {
        dispatch({ type: 'REQUEST_BEGIN', message: 'Loading Cart..' })
        Api.getUserByEmail(userEmailId)
            .then(response => response.data)
            .then(user => {
                console.log('::After Get User::');//console.log(user);
                let userDataObjForState = {};
                if(user.length === 0) {
                    Api.addUser(userDataObj)
                    .then(response => response.data)
                    .then(user => {
                        console.log('::After Add User::');//console.log(user);
                        userDataObjForState = user[0]; //console.log(userDataObjForState);
                        dispatch({ type: 'REQUEST_FINISH', message: '' })
                        dispatch({ type: GET_USER, userDataObjForState }) // async action
                    })
                } else {
                    userDataObjForState = user[0]; //console.log(userDataObjForState);
                    dispatch({ type: 'REQUEST_FINISH', message: '' })
                    dispatch({ type: GET_USER, userDataObjForState }) // async action
                }
            })
            .catch(error => {
                dispatch({ type: 'REQUEST_ERROR', message: 'Error while loading cart' })
            })
    }

}

