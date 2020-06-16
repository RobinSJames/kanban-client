import React, { Component } from 'react'
import { CardHolder, CardHeader, CardFooter } from '../styles'

export class Card extends Component {
  render() {
    const title = this.props.task.title
    const description = this.props.task.description
    const tags = this.props.task.tags
    return (
      <CardHolder>
        <CardHeader>
          <p><span>{title}</span>{description}</p>
        </CardHeader>
        <CardFooter>
          {tags.map((tag, index) => (
            <div key={index}>{tag}</div>
          ))}
        </CardFooter>
      </CardHolder>
    )
  }
}

export default Card
