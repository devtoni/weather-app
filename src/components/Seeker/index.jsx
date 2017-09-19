import React from 'react'

import style from './style.scss'

const Seeker = () => {
  return (
    <form>
      <input type='text' />
      <button type='submit' className={style.button}>Search</button>
    </form>
  )
}

export default Seeker
