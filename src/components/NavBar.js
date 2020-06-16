import React, { Component } from 'react'
import { NavBarStyle, Input } from '../styles'
import { Link } from 'react-router-dom'

export default class NavBar extends Component {
  render() {
    return (
      <NavBarStyle>
        <div>
          <Link to='/'><p>HOME</p></Link>
          <Link to='/create'><p>CREATE</p></Link>
          <Link to='/workboard'><p>WORKBOARD</p></Link>
          <Input placeholder='Search...' />
          {/* <p>Notifications</p>
          <p>Logout</p> */}
        </div>
      </NavBarStyle>
    )
  }
}
