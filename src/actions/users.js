export const RECEIVE_USERS = 'RECEIVE_USERS'
export const GET_SAVE_QUESTION_TO_USER = 'GET_SAVE_QUESTION_TO_USER'


export function receiveUsers (users) {
    return{
        type: RECEIVE_USERS,
        users
    }
}
export function getSaveQuestionToUser(question) {
    return {
        type: GET_SAVE_QUESTION_TO_USER,
        question
    }
}

