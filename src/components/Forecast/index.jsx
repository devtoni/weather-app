import React, { Component } from 'react'
import weatherApi from '../../service/weatherApi'
import ListDays from '../ListDays'

class Forecast extends Component {
  constructor () {
    super()
    this.state = {
      name: '...',
      days: '...'
    }
  }
  componentDidMount () {
    weatherApi.getForecast('Barcelona')
    .then(console.log)
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

export default Forecast
