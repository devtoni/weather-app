import React from 'react'

import style from './nav.scss'

const Nav = () => {
  return (
    <nav className={style.nav}>
      <Title />
      <Seeker />
    </nav>
  )
}

export default Nav
