import React, { Component } from "react";
import { connect } from "react-redux";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { handleLogout } from "../actions/authedUser";

class Logout extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.dispatch(handleLogout());
  };

  render() {
    return (
      <Card className="card">
        <Card.Body>
          <div className="center">
            <h4>Push LOGOUT to exit the application</h4>
          </div>
        </Card.Body>
        <Button variant="warning" type="submit" onClick={this.handleSubmit}>
          Logout
        </Button>
      </Card>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  };
}

export default connect(mapStateToProps)(Logout);