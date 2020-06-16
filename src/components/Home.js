import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../styles'

export default class Home extends Component {
  render() {
    return (
      <div>
        <Link to='/create'>
          <Button>Create New Task</Button>   
        </Link>
      </div>
    )
  }
}
