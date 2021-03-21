import React from "react";
import Dashboard from "./Dashboard";
import QuestionNew from "./QuestionNew";
import Login from "./Login";
import { NavLink } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

export default function Nav(props) {
  console.log(props.authedUser)
  console.log("Authed", props.authedUser === null)
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
            
              <li className="nav-item me-3 me-lg-1">
                <a className="nav-link d-sm-flex align-items-sm-center" href="#">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Avatars/img (31).jpg"
                    className="rounded-circle"
                    height="22"
                    alt=""
                    loading="lazy"
                  />
                  <strong className="d-none d-sm-block ms-1">John</strong>
                </a>
              </li>

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


// export default function Nav(authedUser) {
//   return(<div>
//     { (authedUser === null) ? (<div></div>) : (<div></div>) }</div>);
// }
