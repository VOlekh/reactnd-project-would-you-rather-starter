import {RECEIVE_USERS} from '../actions/users'
//include a default state parameter as the first argument inside a particular reducer function.
//initialized each slice of the store by setting a default state value as the first parameter inside each reducer function
export default function users (state = {}, action) {
    switch (action.type) {
        case RECEIVE_USERS:
          return {
              // new state which is at the beginning an empty state {} plus action.users
            ...state,
            ...action.users,
          };
        default:
          return state;
      }
}