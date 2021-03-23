import React from "react";
import { formatDate, formatQuestion } from "../utils/helper";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";


export default function Nav(props) {
 
    // const { authedUser, name, avatar } = this.props;
  
    // console.log(props.authedUser);
    // console.log("Authed", props.authedUser === null);

    return (
      <div>
      
      { props.authedUser === null
        ? ( null ) 
        : (
          <nav className="nav">
              <ul>
                <li><NavLink to="/" exact activeClassName="active">Home</NavLink></li>
                <li><NavLink to="/new" activeClassName="active">New Question</NavLink></li>
                <li><NavLink to="/leaderboard" activeClassName="active">Leaderboard</NavLink></li>
                <li><NavLink to="/logout" activeClassName="active">Logout</NavLink></li>

                {/* <!-- Right elements --> */}
              
                {/* <li className="nav-item me-3 me-lg-1">
                  <a className="nav-link d-sm-flex align-items-sm-center" href="#">
                    <img
                      src={avatar}
                      alt={`Avatar of ${name}`}
                      loading="lazy"
                      className="rounded-circle"
                      height="22"
                    />
                    <strong className="d-none d-sm-block ms-1">John</strong>
                  </a>
                </li> */}

                <li>
                <DropdownButton id="dropdown-basic-button" title="Dropdown button">
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </DropdownButton>
                </li>

              </ul>
            </nav>
          )
      }
      
      </div>
    );
  };


// function mapStateToProps({users, authedUser }) {

//   return {
//     authedUser,
//     userName,
//     avatar:users[authedUser].avatarURL,
//     name: users[authedUser].name
//   };
// }

// export default connect(mapStateToProps)(Nav);
// export default function Nav(authedUser) {
//   return(<div>
//     { (authedUser === null) ? (<div></div>) : (<div></div>) }</div>);
// }
