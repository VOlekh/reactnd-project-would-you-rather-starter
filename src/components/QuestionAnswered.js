import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatDate, formatQuestion } from '../utils/helper'
import {handleQuestionAnswer} from '../actions/questions'
import Button from 'react-bootstrap/Button';

class AnsweredQuestion extends Component{

    onAnswerChange = (answer) => {
        console.log(answer);
        this.setState(() => ({
            answer
          }))
    }

    onAnswerSubmit = (e) => {
        e.preventDefault();
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
        const {name, avatar, timestamp, optionOne, optionTwo } = question

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
                <Button variant="primary" onClick={this.onAnswerDetails} type="submit">
                    Details
                </Button>
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

export default connect(mapStateToProps) (QuestionAnswered)