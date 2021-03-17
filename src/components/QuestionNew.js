import React, { Component } from "react"
import { connect } from "react-redux"
import { handleSaveQuestion } from "../actions/questions"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import Card from "react-bootstrap/Card"
import { formatQuestion } from "../utils/helper"

class QuestionNew extends Component {
  state = {
    //set state as empty string
    optionOneText: "",
    optionTwoText: "",
    toHome: false,
  };

  onOptionOneChange = (e1) => {
    const optionOneText = e1.target.value;
    this.setState(() => ({optionOneText}));
  };
  onOptionTwoChange = (e2) => {
    const optionTwoText = e2.target.value;
    this.setState(() => ({optionTwoText}));
  };

  onNewQuestionSubmit = (e) => {
    e.preventDefault();
    // Add Question to Store
    const { optionOneText, optionTwoText } = this.state;
    const { dispatch, id, authedUser } = this.props;

    console.log("New question: ", optionOneText, optionTwoText);
    const question = formatQuestion ({ optionOneText, optionTwoText, authedUser })

    dispatch(handleSaveQuestion(question));
    // reset to empty string
    this.setState(() => ({
      optionOneText: "",
      optionTwoText: "",
      //this.setState(()=>({toHome:true}))
    }));
  };

  // if id is a thing, then toHome is false, if not - true
  //toHome: id ? false : true,
  render() {
   

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
    authedUser
  };
}
// export default NewTweet
export default connect(mapStateToProps)(QuestionNew);
