import { checkLogin } from '../utils/api'
export const SET_AUTHED_USER = 'SET_AUTHED_USER'
export const DELETE_AUTHED_USER = 'DELETE_AUTHED_USER'


export function setAuthedUser(id) {
    console.log('SetUser', id)
    return{
        type: SET_AUTHED_USER,
        id
    }
}

export function deleteAuthedUser() {
    return {
      type: DELETE_AUTHED_USER,
    }
}


export function handleLogin(authedUser) {
    console.log(authedUser);
    return (dispatch) => {
        return checkLogin(authedUser)
            .then(() => {
                dispatch(setAuthedUser(authedUser))  
            })
            .catch((e) => {
                console.warn('Error in handleLogin: ', e);
                alert('Can not log in.');
            });
    }
  }