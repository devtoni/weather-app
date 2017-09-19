import React, { Component } from 'react'
import Day from '../Day'

const ListDay = ({ days }) => {
  return (
    <ul>
      {days.map(u => {
        return (
          <Day icon={u.icon} name={u.day} />
        )
      })}
    </ul>
  )
}

export default ListDay
