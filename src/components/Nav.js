import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
// import "../CSS/nav.css";
import { formatDate, formatQuestion } from "../utils/helper";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

class  NavComponent extends Component { 
//  const { authedUser, name, avatar } = this.props;
  
    // console.log(props.authedUser);
    // console.log("Authed", props.authedUser === null);
  render() {
    return (
      <div>
        { this.props.authedUser === null
          ? ( null ) 
          : (
            <Navbar fixed="up"  bg="primary" expand="lg" variant="dark">
              <Navbar.Brand href="#home">Would you rather...</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="justify-content-end">
                <Nav className="mr-auto">
                  <NavLink to="/" exact activeClassName="active">Home</NavLink>
                  <NavLink to="/new" activeClassName="active">New Question</NavLink>
                  <NavLink to="/leaderboard" activeClassName="active">Leaderboard</NavLink>
                  <NavLink to="/logout" activeClassName="active">Logout</NavLink>
                  <Navbar.Text>
                   <a className="nav-link d-sm-flex align-items-sm-top" href="#">
                      <img
                        src={this.props.avatar}
                        alt={`Avatar of ${this.props.name}`}
                        loading="lazy"
                        className="rounded-circle"
                        height="45"
                      />
                      <strong className="d-none d-sm-block ms-1">{this.props.name}</strong>
                    </a>
                  </Navbar.Text>
                   
                
                </Nav> 
              </Navbar.Collapse>
            </Navbar>
      
     
      
      // { props.authedUser === null
      //   ? ( null ) 
      //   : (
      //     <nav className="nav">
      //         <ul>
      //           <li><NavLink to="/" exact activeClassName="active">Home</NavLink></li>
      //           <li><NavLink to="/new" activeClassName="active">New Question</NavLink></li>
      //           <li><NavLink to="/leaderboard" activeClassName="active">Leaderboard</NavLink></li>
      //           <li><NavLink to="/logout" activeClassName="active">Logout</NavLink></li>

      //           {/* <!-- Right elements --> */}
              
      //    
      //         </ul>
      //       </nav>
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
