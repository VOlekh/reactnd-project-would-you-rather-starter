import React, { Component, Fragment} from "react";
import { connect } from "react-redux";
import { formatDate, formatQuestion } from "../utils/helper";

//import { handleQuestionAnswer } from "../actions/questions";
import ProgressBar from "react-bootstrap/ProgressBar";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Media from "react-bootstrap/Media";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Redirector from "./Redirector";

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
        const { name, avatar, timestamp, optionOne, optionTwo} = question;
        let url = window.location.pathname;
        let id = url.substring(url.lastIndexOf('/') + 1);
    
        return (  
            <Card>
                <Redirector currentLocation="/questions/:question_id"/>
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
                    
                    
                    {this.props.authedUserAnswer === "optionOne"
                        ? <Container>
                            <h4>Would you rather {this.props.optionOneText}</h4>
                            <Row><Col>The number of people who voted for that option:</Col> <Col className="col-text">{this.props.optionOneVote}</Col></Row>
                            <Row><Col>The percentage of people who voted for that option: </Col> <Col className="col-text">{`${Math.round(this.props.optionOnePercentageVoted)}%`}</Col></Row>
                            <div className= "progress-bar"><ProgressBar now={Math.round(this.props.optionOnePercentageVoted)} label={`${Math.round(this.props.optionOnePercentageVoted)}%`} /> </div>
                        </Container>

                        : <Container>
                            <h4>Would you rather {this.props.optionTwoText}</h4>
                            <Row><Col>The number of people who voted for that option:</Col> <Col className="col-text">{this.props.optionTwoVote}</Col></Row>
                            <Row><Col>The percentage of people who voted for that option: </Col> <Col className="col-text">{`${Math.round(this.props.optionTwoPercentageVoted)}%`}</Col></Row>
                            <div className= "progress-bar"><ProgressBar now={Math.round(this.props.optionTwoPercentageVoted)} label={`${Math.round(this.props.optionTwoPercentageVoted)}%`} /> </div>
                        </Container>
                    }
                   
            
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

        const optionOne = question.optionOne
        const optionTwo = question.optionTwo
     
        const optionOneText = question.optionOne.text
        const optionTwoText = question.optionTwo.text
        const authedUserAnswer = users[authedUser].answers[id]
    
        const optionOneVote = question.optionOne.votes.length
        const optionTwoVote = question.optionTwo.votes.length
        const totalVotes = optionOneVote + optionTwoVote

        const optionOnePercentageVoted = (optionOneVote/totalVotes)*100
        const optionTwoPercentageVoted = (optionTwoVote/totalVotes)*100

        console.log("Question in QuestionDetails:", question);
        console.log("AuthedUserAnswer:", authedUserAnswer);
        console.log("Users.size:", users.size);

        return {
            question: question
           // add a check to format the question only if the question is not undefined.
              ? formatQuestion(question, users[question.author], authedUser)
              : null,

            authedUser,
            optionOneText,
            optionTwoText,
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
    
