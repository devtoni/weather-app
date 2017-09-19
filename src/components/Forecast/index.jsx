import React, { Component } from 'react'
import weatherApi from '../../service/weatherApi'
import queryString from 'query-string'
import ListDays from '../ListDays'

class Forecast extends Component {
  constructor () {
    super()
    this.state = {
      days: ['']
    }
  }
  componentDidMount () {
    const { city } = queryString.parse(this.props.location.search)
    weatherApi.getForecast(city)
    .then(days => {
      this.setState({ days })
    })
  }
  render () {
    console.log()
    return (
      <div>
        <h2>{this.state.days[0].city}</h2>
        <ListDays days={this.state.days} />
      </div>
    )
  }
}

export default Forecast
