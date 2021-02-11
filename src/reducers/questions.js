import {RECEIVE_QUESTIONS} from '../actions/questions'

// 1st way to initialize the state inside the store: include a default state parameter as the first argument inside a particular reducer function.
export default function questions (state = {}, action) {
    switch (action.type) {
        case RECEIVE_QUESTIONS:
          return {
            
            ...state,
            ...action.questions,
          };
        default:
          return state;
      }

}