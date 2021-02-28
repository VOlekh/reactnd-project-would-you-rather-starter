import React from 'react'
// import { NavLink } from 'react-router-dom'
//import Nav from 'react-bootstrap/Nav'
import Dashboard from './Dashboard'
import NewQuestion from './NewQuestion'
import { NavLink } from 'react-router-dom'

export default function Nav () {
    return (
        <nav className='nav'>
        <ul>
          <li>
            <NavLink to='/' exact activeClassName='active'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/new' activeClassName='active'>
              New Question
            </NavLink>
          </li>
        </ul>
      </nav>

    )
}