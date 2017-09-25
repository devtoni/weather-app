import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import styles from './style.scss'

const Title = ({name}) => {
  return (
    <Link
      className={styles.Link}
      to='/'>
      <h1 className={styles.title}>{name}</h1>
    </Link>
  )
}

Title.propTypes = {
  name: PropTypes.string
}

Title.defaultProps = {
  name: 'Clever Title'
}
export default Title
