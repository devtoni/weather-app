import React, { Component } from 'react'
import ListDays from '../ListDays'
import styles from './styles.scss'

const Details = (props)=> {
  const day = props.location.state.day
  return(
    <div  className={styles.detail}>
       <img src={day.icon}/>
       <h1>{day.city}</h1>
       <h2>{day.description}</h2>
       <p>minTemp: {day.minTemp} F</p>
       <p>maxTemp: {day.maxTemp} F</p>
       <p>humidity: {day.humidity}</p>
    </div>
    )
  
}

export default Details
