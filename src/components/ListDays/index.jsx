import React from 'react'
import uuid from 'uuid'
import Day from '../Day'

const ListDay = ({ days }) => {
  return (
    <ul>
      {days.map(u => {
        return (
          <Day key={uuid.v4()} icon={u.icon} name={u.day} />
        )
      })}
    </ul>
  )
}

export default ListDay
