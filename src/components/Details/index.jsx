import React, { Component } from 'react'
import ListDays from '../ListDays'

class Details extends Component {
  constructor () {
    super()
    this.state = {
      name: '...',
      days: '...'
    }
  }
  render () {
    return (
      <div>
        <h2>state.name</h2>
        <ListDays days={this.state.days} />
      </div>
    )
  }
}

export default Details
