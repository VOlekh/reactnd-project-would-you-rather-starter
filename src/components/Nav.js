import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";


class  NavComponent extends Component { 

  render() {
    return (
      <div>
        { this.props.authedUser === null
          ? ( null ) 
          : (
            <Navbar fixed="up"  bg="dark" expand="lg" variant="dark">
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="justify-content-end">
              <Navbar.Brand to="/" exact activeClassName="active-nav">Would you rather...</Navbar.Brand>
                <Nav className="mr-auto">
                  <NavLink to="/" exact activeClassName="active-nav">Home</NavLink>
                  <NavLink to="/new" activeClassName="active-nav">New Question</NavLink>
                  <NavLink to="/leaderboard" activeClassName="active-nav">Leaderboard</NavLink>
                  <NavLink to="/logout" activeClassName="active-nav">Logout</NavLink>
                </Nav> 
              </Navbar.Collapse>
              <Navbar.Text>
                <a className="nav-link d-sm-flex align-items-sm-center" href="#">
                <div className="Name">Hi, {this.props.name}  !</div>
                  <img
                    src={this.props.avatar}
                    alt={`Avatar of ${this.props.name}`}
                    loading="lazy"
                    className="rounded-circle"
                    height="45"
                  />
                </a>
              </Navbar.Text>  
            </Navbar>
          )
       }
       </div>
    );
  };
};


function mapStateToProps({users, authedUser }) {
  console.log("AuthedUser", authedUser);
 
  return {
    authedUser,
    avatar: authedUser ? users[authedUser].avatarURL : null,
    name: authedUser ? users[authedUser].name : null
  };
}

export default connect(mapStateToProps)(NavComponent);
