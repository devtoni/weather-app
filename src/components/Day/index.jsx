import React from 'react'

const Day = ({icon, day}) => {
  return (
    <div>
      <img src={icon} alt='' />
      <h2>{day}</h2>
    </div>
  )
}

export default Day
