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
            <Navbar fixed="up"  bg="dark" expand="lg" variant="dark" className=" align-items-baseline">
              <div className="d-flex flex-column align-items-baseline">
              <Navbar.Toggle aria-controls="basic-navbar-nav" className=""/>
              <Navbar.Collapse id="justify-content-end">
                <Nav className="mr-auto">
                  <NavLink to="/" exact activeClassName="active-nav" className="nav-link">Home</NavLink>
                  <NavLink to="/add" activeClassName="active-nav" className="nav-link">New Question</NavLink>
                  <NavLink to="/leaderboard" activeClassName="active-nav"className="nav-link">Leaderboard</NavLink>
                  <NavLink to="/logout" activeClassName="active-nav"className="nav-link">Logout</NavLink>
                </Nav> 
              </Navbar.Collapse>
              </div>
              <Navbar.Text className="d-flex">
               <a className="nav-link d-flex align-items-sm-center" href="#">
                <div className="name">Hi, {this.props.name}!</div>
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