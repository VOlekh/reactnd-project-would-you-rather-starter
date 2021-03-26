import React, { Component } from "react";
import { connect } from "react-redux";
import { formatDate, formatQuestion } from "../utils/helper";
import { RadioGroup, RadioButton } from "react-radio-buttons";
import { handleQuestionAnswer } from "../actions/questions";
import ProgressBar from "react-bootstrap/ProgressBar";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Media from "react-bootstrap/Media";


class QuestionDetails extends Component {
    
    // percentageVoted = 60;
    // progressInstanceVoted = <ProgressBar percentageVoted={percentageVoted} label={`${percentageVoted}%`} />;
    // render(progressInstanceVoted);
    //   the text of the option;
    //                     the number of people who voted for that option;
    //                     the percentage of people who voted for that option.
    //all users -100%

    render(progressInstanceVoted) {
        const { question, authedUser } = this.props;
        console.log(authedUser);
        const { name, avatar, timestamp, optionOne, optionTwo } = question;
        let url = window.location.pathname;
        let id = url.substring(url.lastIndexOf('/') + 1);
    
        return (  
            <Card>
                <Card.Body>
                <h4 className="center">Question Details</h4>
                <div>
                    <Media>
                        <img
                            width={64}
                            height={64}
                            className="mr-3"
                            src={avatar}
                            alt={`Avatar of ${name}`} 
                        />
                        <Media.Body >
                            <h5>{name}</h5>
                            <p>{formatDate(timestamp)}</p>
                        </Media.Body>
                    </Media>

                    <h4>Would you rather ...</h4>
                    <div>
                        <p>  the number of people who voted for that option;
                        the percentage of people who voted for that option.</p>                   
                    </div>
                </div>
                </Card.Body>
            </Card>
        );
      }
    }
    
    function mapStateToProps({ authedUser, users, questions }) {
        let url = window.location.pathname;
        let id = url.substring(url.lastIndexOf('/') + 1);
        const question = questions[id];
        const optionOne = question.optionOne.text
        const optionTwo = question.optionTwo.text
        let authedUserAnswer = null
        authedUserAnswer = users[authedUser].answers[question.id]
    
        const optionOneVote = question.optionOne.votes.length
        const optionTwoVote = question.optionTwo.votes.length

    
  
        console.log(authedUser);
        return {
            authedUser,
            optionOne,
            optionTwo,
            authedUserAnswer,
            optionOneVote,
            optionTwoVote,
            question: formatQuestion(question, users[question.author], authedUser),
      };
    }
    
    export default connect(mapStateToProps)(QuestionDetails);
    
