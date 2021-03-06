import React, { Component } from "react";
import { connect } from "react-redux";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { handleLogin } from "../actions/authedUser";

class Login extends Component {
  state = {
    user_id: null,
  };

  onLoginChange = (e) => {
    const user_id = e.target.value;
    if (user_id === "Select") {
      user_id = null;
    }
    this.setState(() => ({ user_id }));
    console.log("Selected user:", user_id);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { user_id } = this.state;
    console.log(user_id);
    if (user_id === null) {
      return;
    }
    this.props.dispatch(handleLogin(user_id));
  };

  render() {
    const { users } = this.props;
    console.log("Dictionary:", users);
    console.log("Array:", Object.values(users));
    return (
      //https://react-bootstrap.github.io/components/forms/

      <Card className="card">
        <Card.Body>
          <Form>
            <Form.Group controlId="formBasicUsername">
              <Form.Label><h4>Select user to enter the application</h4></Form.Label>
              <Form.Control as="select" onChange={this.onLoginChange}>
                <option value="Select">Select...</option>
                {Object.values(users).map((user) => (
                  <option key={user.id} value={user.id}>
                    {" "}
                    {user.name}{" "}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>

            {/*TBD
             <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
              </Form.Group> */}

            {/* <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Save password" />
              </Form.Group>  */}
          </Form>
        </Card.Body>
        <Button variant="warning" type="submit" onClick={this.handleSubmit}>
          Login
        </Button>
      </Card>
    );
  }
}

function mapStateToProps({ users }) {
  console.log("mapStateProps/login:", users);
  return {
    users,
  };
}

export default connect(mapStateToProps)(Login);