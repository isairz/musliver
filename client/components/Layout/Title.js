import React, { PropTypes } from 'react'

import styles from './Title.css'

export function Title ({ children }) {
  return (
    <h2 className={styles.title}>{children}</h2>
  )
}

Title.propTypes = {
  children: PropTypes.element.isRequired,
}

export default Title
