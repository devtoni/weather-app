import React from 'react'
import uuid from 'uuid'
import Day from '../Day'
import { Link } from 'react-router-dom'

const ListDay = ({ days }) => {
  return (
    <ul>
      {days.map(day => {
        return (
        <Link to={`/details/${day.day}`}>
          <Day
            key={uuid.v4()}
            icon={day.icon}
            day={day.day}
          />
        </Link>
        )
      })}
    </ul>
  )
}

export default ListDay
