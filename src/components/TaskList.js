import React, { Component } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import Card from './Card'
import { TaskListStyle, TaskListContainer, TaskListHeaderStyle } from '../styles'
import { ThemeProvider } from 'styled-components';

const TASK_QUERY = gql`
  {
    tasks {
      id
      title
      status
      description
      priority
      createdAt
      updatedAt
    }
  }
`

export class TaskList extends Component {
  constructor(props){
    super(props);
    this.taskList = [
      {
        title: 'Backlog',
        count: 2,
        tasks: [
          {
            priority: {
              title: 'LOW',
              priority: '#0000ff'
            },
            title: 'T123',
            description: 'This number 1',
            tags: []
          }
        ]
      },
      {
        title: 'Work-in-progress',
        count: 2,
        tasks: [
          {
            priority: {
              title: 'MEDIUM',
              priority: '#00ff00'
            },
            title: 'T123',
            description: 'This number 1',
            tags: []
          }
        ]
      },
      {
        title: 'Developed',
        count: 2,
        tasks: [
          {
            priority: {
              title: 'HIGH',
              priority: '#ff0000'
            },
            title: 'T123',
            description: 'This number 1',
            tags: ['Tests']
          }
        ]
      },
      {
        title: 'Tested',
        count: 2,
        tasks: [
          {
            priority: {
              title: 'HIGH',
              priority: '#ff0000'
            },
            title: 'T123',
            description: 'This number 1',
            tags: ['Frontend']
          },
          {
            priority: {
              title: 'HIGH',
              priority: '#ff0000'
            },
            title: 'T6583',
            description: 'This number 6583',
            tags: ['Backend', 'Bebla']
          }
        ]
      },
      {
        title: 'Done',
        count: 2,
        tasks: [
          {
            priority: {
              title: 'HIGH',
              priority: '#ff0000'
            },
            title: 'T123',
            description: 'This number 1',
            tags: ['Test']
          }
        ]
      }
    ]
  }
  render() {
    return (
      <TaskListContainer>
        <Query query={TASK_QUERY}>
          {({loading, error, data}) => {
            if (loading) return <div>Loading...</div>
            if (error) return <div>Error</div>
            const tasksToRender = data.tasks
            return (
              <div>
                {tasksToRender.map(task =>
                  <ThemeProvider theme={task.priority}>
                    <Card task={task} key={task.id}></Card>
                  </ThemeProvider>)}
              </div>
            )
          }}
        </Query>
          {/* {this.taskList.map((taskList, index) => (
            <TaskListStyle key={index}>
            <TaskListHeaderStyle>
              <h4>{taskList.title}</h4>
              <p>{taskList.tasks.length}</p>
            </TaskListHeaderStyle>
            <div>
              {taskList.tasks.map((task, subIndex) => (
                <ThemeProvider theme={task.priority}>
                  <Card task={task} key={subIndex}>
                  </Card>
                </ThemeProvider>
              ))}
            </div>
          </TaskListStyle>
          ))} */}
      </TaskListContainer>
    )
  }
}

export default TaskList
