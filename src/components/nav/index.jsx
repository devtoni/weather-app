import React from 'react'
import ReactDom from 'react-dom'

import styles from './nav.scss'

const Nav = () => {
  return (
    <nav className=(styles.nav)>
      <Title/>
      <Seeker/>
    </nav>
  )
}

export default Nav