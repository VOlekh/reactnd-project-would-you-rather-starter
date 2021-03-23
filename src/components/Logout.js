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
      <div>
        <h3 className="center">Logout</h3>
        <Card>
          <Card.Body>
            <div className="center">
              <h3>Push Logout to to exit the application</h3>
            </div>
          </Card.Body>
          <Button variant="primary" type="submit" onClick={this.handleSubmit}>
            Logout
          </Button>
        </Card>
      </div>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  };
}

export default connect(mapStateToProps)(Logout);
