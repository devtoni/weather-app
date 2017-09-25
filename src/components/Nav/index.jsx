import React from 'react'
import Title from '../Title'
import Seeker from '../Seeker'

import style from './style.scss'

const Nav = () => (
  <nav className={style.nav}>
    <Title name='Weather App' />
    <Seeker />
  </nav>
)

export default Nav
