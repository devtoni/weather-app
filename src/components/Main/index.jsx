import React from 'react'
import styles from './main.scss'
import Seeker from '../Seeker'

const Main = () => {
  return (
    <div className={styles.contentMain}>
      <h1>Enter a City and State</h1>
      <Seeker />
    </div>
  )
}

export default Main
