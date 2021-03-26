import React, { Component } from "react";
import { connect } from "react-redux";
import { handleSaveQuestion } from "../actions/questions";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import { Redirect } from "react-router-dom";

class QuestionNew extends Component {
  state = {
    //set state as empty string
    optionOneText: "",
    optionTwoText: "",
    toHome: false,
  };

  onOptionOneChange = (e1) => {
    //change the state
    const optionOneText = e1.target.value;
    this.setState(() => ({ optionOneText }));
  };
  onOptionTwoChange = (e2) => {
    //change the state
    const optionTwoText = e2.target.value;
    this.setState(() => ({ optionTwoText }));
  };

  onNewQuestionSubmit = (e) => {
    e.preventDefault();
    // add Question to Store
    const { optionOneText, optionTwoText } = this.state;
    const { dispatch, id, authedUser } = this.props;

    console.log("New question: ", optionOneText, optionTwoText);

    //passing values to dispatch
    dispatch(
      handleSaveQuestion({ optionOneText, optionTwoText, author: authedUser })
    );
    // reset to empty string
    this.setState(() => ({
      optionOneText: "",
      optionTwoText: "",
      // author: authedUser
      //this.setState(()=>({toHome:true}))
    }));
  };

  // if id is a thing, then toHome is false, if not - true
  //toHome: id ? false : true,
  render() {
    return (
      <div>
        <Card>
          <Card.Body>
            <h4 className="center">Compose new Question</h4>
            <h5 >Would you rather...</h5>
            <Form>
              <Form.Group controlId="OptionOne">
                <Form.Label>Option one</Form.Label>
                <Form.Control
                  type="text"
                  onChange={this.onOptionOneChange}
                  className="textarea"
                  maxLength={200}
                  placeholder="Would you.. "
                />
              </Form.Group>
              <Form.Group controlId="OptionTwo">
                <Form.Label>Option two</Form.Label>
                <Form.Control
                  type="text"
                  onChange={this.onOptionTwoChange}
                  className="textarea"
                  maxLength={200}
                  placeholder="Would you rather.. "
                />
              </Form.Group>
            </Form>
          </Card.Body>
          <Button
            variant="warning"
            onClick={this.onNewQuestionSubmit}
            type="submit"
            disabled={
              this.state.optionOneText === "" || this.state.optionTwoText === ""
            }
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

export default connect(mapStateToProps)(QuestionNew);
