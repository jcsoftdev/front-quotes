import React from 'react'

import styles from './Wrapper.module.scss'

const Wrapper = ({ children, className }: Wrapper) => {
  return (
    <div className={`${styles.Wrapper} ${className || ''}`}>{children}</div>
  )
}

export default Wrapper
