export const RECEIVE_USERS = 'RECEIVE_USERS'
export const SAVE_ANSWER_TO_USER = 'SAVE_ANSWER_TO_USER'


export function receiveUsers (users) {
    return{
        type: RECEIVE_USERS,
        users
    }
}
export function saveAnswerToUser(question) {
    return {
        type: SAVE_ANSWER_TO_USER,
        question
    }
}

