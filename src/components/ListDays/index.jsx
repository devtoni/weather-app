import React from 'react'
import PropTypes from 'prop-types'
import uuid from 'uuid'
import Day from '../Day'

import style from './main.scss'

const ListDay = ({ days }) => {
  return (
    <ul className={style.days}>
      {days.map(day =>
         (
           <Day
             key={uuid.v4()}
             icon={day.icon}
             day={day.day}
             info={day}
            />
        ))}
    </ul>
  )
}

ListDay.propTypes = {
  days: PropTypes.array.isRequired
}

ListDay.defaultProps = {
  days: []
}

export default ListDay
