import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './styles.scss'

class Details extends Component {
  render () {
    const day = this.props.location.state.info
    console.log(day)
    return (
      <div className={styles.detail}>
        <img src={day.icon} />
        <h1>{day.city}</h1>
        <h2>{day.description}</h2>
        <p>minTemp: {day.minTemp} F</p>
        <p>maxTemp: {day.maxTemp} F</p>
        <p>humidity: {day.humidity}</p>
      </div>
    )
  }
}

Details.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      info: PropTypes.object.isRequired
    })
  })
}

export default Details
