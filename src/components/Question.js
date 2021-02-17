import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatDate, formatQuestion } from '../utils/helper'

class Question extends Component{
    render(){
        console.log(this.props)
        const{question} = this.props
        const {
            name, avatar, timestamp, optionOne, optionTwo } = question
        return(
            <div className='question'>
                <img 
                src = {avatar}
                alt = {`Avatar of ${name}`}
                className='avatar'
                />
                <div className='question-info'>
                    <span>{name}</span>
                    <span> {formatDate(timestamp)}</span>
                    <div>{optionOne.text}</div>
                    <div>{optionTwo.text}</div>

                </div>
            </div>
        )
    }
}


function mapStateToProps({authedUser, users, questions}, {id}) {
    const question = questions[id]
    return{
        authedUser,
        question: formatQuestion(question, users[question.author], authedUser)
    }
}

export default connect(mapStateToProps) (Question)