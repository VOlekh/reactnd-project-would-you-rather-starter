import React, { Component } from "react";
import { connect } from "react-redux";
import { formatDate, formatQuestion } from "../utils/helper";
import { handleQuestionAnswer } from "../actions/questions";
import Card from "react-bootstrap/Card";
import Media from "react-bootstrap/Media";


class Question extends Component {
    
    // const percentageVoted = 60;
    // const progressInstanceVoted = <ProgressBar percentageVoted={percentageVoted} label={`${percentageVoted}%`} />;
    // render(progressInstanceVoted);


    onAnswerChange = (answer) => {
        console.log(answer);
        this.setState(() => ({
        answer,
        }));
    };

    onAnswerSubmit = (e) => {
        e.preventDefault();
        const { dispatch, question, authedUser } = this.props;
        const { answer } = this.state;

        dispatch(
        handleQuestionAnswer({
            qid: question.id,
            answer,
            authedUser,
        })
        );
    };

    render() {
        // console.log(this.props)
        const { question, authedUser } = this.props;
        console.log(authedUser);
        const { name, avatar, timestamp, optionOne, optionTwo } = question;
        const TextTruncate = require("react-text-truncate");

        return (
        <Card>
            <Card.Body>
            <div>
                <Media>
                <img
                    width={64}
                    height={64}
                    className="mr-3"
                    src={avatar}
                    alt={`Avatar of ${name}`}
                />
                <Media.Body>
                    <h5>{name}</h5>
                    <p>{formatDate(timestamp)}</p>
                </Media.Body>
                </Media>
                <h4>Would you rather ...</h4>
                <div>
                {optionOne.text}
                {/* the text of the option;
                        the number of people who voted for that option;
                        the percentage of people who voted for that option.  */}
                <div>
                    the number of people who voted for that option:{" "}
                    {question.optionOne.votes.length}
                </div>
                console.log((question.optionOne.votes).length);
                </div>

                <div></div>
            </div>
            </Card.Body>
            {/* <Button
                    variant="primary"
                    onClick={this.onAnswerSubmit}
                    type="submit"
                    >
                    Submit
                </Button> */}
        </Card>
        );
    }
}

function mapStateToProps({ authedUser, users, questions }, { id }) {
    const question = questions[id];
    console.log(authedUser);
    return {
        authedUser,
        question: formatQuestion(question, users[question.author], authedUser),
        questions,
    };
}

export default connect(mapStateToProps)(Question);
