import React from 'react'

import style from './style.scss'

const Nav = () => {
  return (
    <nav className={style.nav}>
      <Title />
      <Seeker />
    </nav>
  )
}

export default Nav
