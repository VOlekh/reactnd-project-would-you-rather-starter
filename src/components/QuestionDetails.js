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

    // optionOnepercentageVoted = 60;
    // progressInstanceVoted = <ProgressBar optionOnepercentageVoted={percentageVoted} label={`${optionOnepercentageVoted}%`} />;
    // render(progressInstanceVoted);
    //   the text of the option;
    //                     the number of people who voted for that option;
    //                     the percentage of people who voted for that option.
    //all users -100%

    render() {
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
                    <hr/>
                    <h4>Would you rather ...</h4>
                    {/* <div>You voted for option: {this.state.optionOne}</div>
                    <div>The number of people who voted for that option: {this.state.optionOneVote}</div>
                    <div>The percentage of people who voted for that option: {this.state.optionOnePercentageVoted}</div> */}
            
                </div>
              </Card.Body>
              <Card.Footer>
                {/* <small className="text-muted">
                    The percentage:<ProgressBar optionOnePercentageVoted={optionOnePercentageVoted} label={`${optionOnePercentageVoted}%`} />;
                </small> */}
              </Card.Footer>
            </Card>
        );
    }
}
    
    
    function mapStateToProps({ authedUser, users, questions }) {
        let url = window.location.pathname;
        let id = url.substring(url.lastIndexOf('/') + 1);
     
        const optionOne = questions[id].optionOne.text
        const optionTwo = questions[id].optionTwo.text
        const authedUserAnswer = users[authedUser].answers[id]
    
        const optionOneVote = questions[id].optionOne.votes.length
        const optionTwoVote = questions[id].optionTwo.votes.length

        const optionOnePercentageVoted = (optionOneVote*100)/users.length
        const optionTwoPercentageVoted = (optionTwoVote*100)/users.length

    
  
        console.log(authedUser);
        return {
            authedUser,
            question: formatQuestion(questions[id], users[questions[id].author], authedUser),
            optionOne,
            optionTwo,
            authedUserAnswer,
            optionOneVote,
            optionTwoVote,
            optionOnePercentageVoted,
            optionTwoPercentageVoted,
            
      };
    }
    
    export default connect(mapStateToProps)(QuestionDetails);
    
