import React from 'react'
// import { NavLink } from 'react-router-dom'
//import Nav from 'react-bootstrap/Nav'
import Dashboard from './Dashboard'
import QuestionNew from './QuestionNew'
import Login from './Login'
import { NavLink } from 'react-router-dom'

export default function Nav () {
    return (
        <nav className='nav'>
        <ul>
          <li>
            <NavLink to='/' exact activeClassName='active'>Home</NavLink>
          </li>

          {/* <li>
            <NavLink to='/unanswered' activeClassName='active'>Unanswered</NavLink>
          </li>

          <li>
            <NavLink to='/answered' activeClassName='active'>Answered</NavLink>
          </li> */}

          <li>
            <NavLink to='/new' activeClassName='active'>New Question</NavLink>
          </li>

          <li>
            <NavLink to='/leaderboard' activeClassName='active'>Leaderboard</NavLink>
          </li>

          <li>
            <NavLink to='/logout' activeClassName='active'>Logout</NavLink>
          </li>

          <li>
            <NavLink to='/login' activeClassName='active'>Login</NavLink>
          </li>

        </ul>
      </nav>

    )
}