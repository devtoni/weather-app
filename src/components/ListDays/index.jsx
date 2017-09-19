import React from 'react'
import uuid from 'uuid'
import Day from '../Day'

const ListDay = ({ days }) => {
  return (
    <ul>
      {days.map(day => {
        return (
          <Day
            key={uuid.v4()}
            icon={day.icon}
            day={day.day}
          />
        )
      })}
    </ul>
  )
}

export default ListDay
