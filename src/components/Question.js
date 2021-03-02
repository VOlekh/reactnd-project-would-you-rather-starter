import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatDate, formatQuestion } from '../utils/helper'
import {RadioGroup, RadioButton} from 'react-radio-buttons'
import {handleQuestionAnswer} from '../actions/questions'

class Question extends Component{

    onAnswerChange = (answer) => {
        console.log(answer);
        this.setState(() => ({
            answer
          }))
    }

    onAnswerSubmit = (e) => {
        // e.preventDefault();
    
        // todo: Handle Like Tweet
        const { dispatch, question, authedUser } = this.props;
        const {answer} = this.state;

    
        dispatch(handleQuestionAnswer({
            qid: question.id,
            answer,
            authedUser
            }));
      }

    render(){
        // console.log(this.props)
        const{question, authedUser} = this.props
        console.log(authedUser)
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
                
                    <h3>Would you rather ...</h3>
                    <RadioGroup onChange={ this.onAnswerChange } >
                        <RadioButton value="optionOne" >
                          {optionOne.text}
                        </RadioButton>
                        <RadioButton value="optionTwo" >
                          {optionTwo.text}
                        </RadioButton>
                    </RadioGroup>

                <button
                    className='btn'
                    onClick={this.onAnswerSubmit}>
                     {/* //TBD: disabled if the radio button is not checked*/}
                     {/* 'value' is not defined  no-undef
                    disabled={ value === false} */}
                    Submit
                </button>

                </div>
            </div>
        )
    }
}


function mapStateToProps({authedUser, users, questions}, {id}) {
    const question = questions[id]
    console.log(authedUser)
    return{
        authedUser,
        question: formatQuestion(question, users[question.author], authedUser)
      
    }
}

export default connect(mapStateToProps) (Question)