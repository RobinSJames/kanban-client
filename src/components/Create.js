import React, { Component } from 'react'
import { Input, LabeledInput, Button } from '../styles'

export default class Create extends Component {
  render() {
    return (
      <div>
        <LabeledInput>
          <label>Task Title</label>
          <Input placeholder='An easy to understand title' />
        </LabeledInput>
        <LabeledInput>
          <label>Task Description</label>
          <Input placeholder='Detailed description of action' />
        </LabeledInput>
        <LabeledInput>
          <label>Priority</label>
          <select>
            <option selected>Select the urgency</option>
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>
        </LabeledInput>
        <LabeledInput>
          <label>Tags</label>
          <Input />
        </LabeledInput>
        <Button>Create Task</Button>
      </div>
    )
  }
}
