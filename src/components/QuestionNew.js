import React, { Component } from "react";
import { connect } from "react-redux";
import { handleSaveQuestion } from "../actions/newQuestion";
import { Redirect } from "react-router-dom";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";

class QuestionNew extends Component {
  state = {
    //set state as empty string
    optionOne: "",
    optionTwo: "",
    toHome: false,
  };

  handleChange = (e) => {
    const optionOne = e.target.value;
    this.setState(() => ({
      optionOne: "",
      optionTwo: "",
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // Add Question to Store
    const { optionOne, optionTwo } = this.state;
    const { dispatch, id, authedUser } = this.props;

    console.log("New question: ", optionOne, optionTwo);

    dispatch(handleSaveQuestion(optionOne, optionTwo, id, authedUser));
    // reset to empty string
    this.setState(() => ({
      optionOne: "",
      optionTwo: "",
      //this.setState(()=>({toHome:true}))
    }));
  };

  // if id is a thing, then toHome is false, if not - true
  //toHome: id ? false : true,
  render() {
    const { optionOne, optionTwo } = this.state;

    return (
      <div>
        <h3 className="center">Compose new Question</h3>
        {/* //invoked handle submit method */}

        <Card>
          <Card.Body>
          <h4 className="center">Would you rather</h4>
            <Form>
              <Form.Group controlId="OptionOne">
                <Form.Label>Option one</Form.Label>
                <Form.Control
                  type="text"
                  onChange={this.handleChange}
                  className="textarea"
                  maxLength={200}
                  placeholder="Would you.. "
                />
              </Form.Group>
              <Form.Group controlId="OptionTwo">
                <Form.Label>Option two</Form.Label>
                <Form.Control
                  type="text"
                  onChange={this.handleChange}
                  className="textarea"
                  maxLength={200}
                  placeholder="Would you rather.. "
                />
              </Form.Group>

              
            </Form>
          </Card.Body>
          <Button
                variant="primary"
                onClick={this.onNewQuestionSubmit}
                type="submit"
              >
                Submit
          </Button>
        </Card>
      </div>
    );
  }
}

function mapStateToProps({ users, authedUser }) {
  return {
    authedUser,
  };
}
// export default NewTweet
export default connect(mapStateToProps)(QuestionNew);
