import {SAVE_QUESTION} from '../actions/questionNew'

export default function questions (state = null, action) {
    switch (action.type) {
        case SAVE_QUESTION:
          return {
            
            ...state,
            ...action.id,
          };
        default:
          return state;
      }
}