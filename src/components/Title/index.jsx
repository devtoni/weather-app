import React from 'react'
import {Link} from 'react-router-dom'
import style from './style.scss'

const Title = ({name}) => {
  return (
    <Link className={style.Link} to='/'><h1>{name}</h1></Link>
  )
}

export default Title
