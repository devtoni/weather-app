import React, { Component } from 'react'
import PropTypes from 'prop-types'
import weatherApi from '../../service/weatherApi'
import queryString from 'query-string'
import ListDays from '../ListDays'
import style from './main.scss'

class Forecast extends Component {
  constructor (props) {
    super(props)
    this.state = {
      days: ['']
    }
  }
  componentDidMount () {
    const { city } = queryString.parse(this.props.location.search)
    weatherApi.getForecast(city)
    .then(listDays => {
      this.setState({ days: listDays })
    })
  }
  render () {
    return (
      <div className={style.center}>
        <h2>{this.state.days[0].city}</h2>
        <ListDays days={this.state.days} />
      </div>
    )
  }
}

Forecast.propTypes = {
  location: PropTypes.shape({
    search: PropTypes.string.isRequired
  })
}

Forecast.defaultProps = {
  search: 'Barcelona'
}
export default Forecast
