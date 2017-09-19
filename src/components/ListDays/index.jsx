import React, { Component } from 'react'
import User from './Day'

const ListDay = ({ days }) =>{
  render () {
    return (
      <ul>
        {days.map(u => {
          return (
            <Day icon={u.icon} name={u.day}/>
          )
        })}
      </ul>
    )
  }
}

export default UserList