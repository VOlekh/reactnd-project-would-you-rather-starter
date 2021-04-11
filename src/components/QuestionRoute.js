import React, { Component } from "react"
import { connect } from "react-redux"
import QuestionDetails from './QuestionDetails'
import QuestionViewPoll from './QuestionViewPoll'

class QuestionRoute extends Component {
    render() {
        const { users, questions, authedUser } = this.props
		const { id } = this.props.match.params
        const question = questions[id]
        const { question_id } = this.props.match.params
        const userAnswers = Object.keys(users[authedUser].answers)

        return (
            userAnswers.includes(question_id)
                ? <QuestionDetails question={question} />
                : <QuestionViewPoll question={question} />
        )
    }    
}

function mapStateToProps({ authedUser, users, questions }) {
    let url = window.location.pathname;
    let id = url.substring(url.lastIndexOf('/') + 1);
    
    return {
        users,
        id,
        authedUser,
        questions,
    
    };
}

export default connect(mapStateToProps)(QuestionRoute); 