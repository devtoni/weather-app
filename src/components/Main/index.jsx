import React from 'react'
import styles from './main.scss'
import Seeker from '../Seeker'

const Main = () => {
  return (
    <main className={styles.contentMain}>
      <h1>Enter a City and State</h1>
      <Seeker />
    </main>
  )
}

export default Main
