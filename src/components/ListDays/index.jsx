import React from 'react'
import uuid from 'uuid'
import Day from '../Day'
import { Link } from 'react-router-dom'
import style from './main.scss'

const ListDay = ({ days }) => {
  return (
    <ul className={style.days}>
      {days.map(day => {
        return (
        <Link to={{
              pathname:`/details/${day.day}`,
              state: {day}
               }} className={style.links}>
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
