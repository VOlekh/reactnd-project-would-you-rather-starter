export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export function setAuthedUser (id) {
    
    return{
        type: SET_AUTHED_USER,
        id
    }
}