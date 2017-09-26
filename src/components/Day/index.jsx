import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Day = ({day, icon, info}) => {
  return (
    <Link to={{
      pathname: `/details/${day}`,
      state: {info}
    }}>
      <div>
        <img src={icon} alt='' />
        <h2>{day}</h2>
      </div>
    </Link>
  )
}

Day.propTypes = {
  day: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  info: PropTypes.object.isRequired
}

Day.defaultProps = {
  day: '',
  icon: '',
  info: {}
}

export default Day
