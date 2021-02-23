import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatDate, formatQuestion } from '../utils/helper'
import {RadioGroup, RadioButton} from 'react-radio-buttons'

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
                
                    <h3>Would you rather ...</h3>
                    <RadioGroup onChange={ this.onChange } vertical>
                        <RadioButton value= "optionOne" >
                          {optionOne.text}
                        </RadioButton>
                        <RadioButton value="optionTwo" >
                          {optionTwo.text}
                        </RadioButton>
                    </RadioGroup>

                <button
                    className='btn'
                    type='submit'>
                     {/* //TBD: disabled if the radio button is not checked
                    //disabled={ value === false}> */}
                    Submit
                </button>

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