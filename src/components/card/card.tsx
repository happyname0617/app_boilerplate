import React, { useState, useCallback } from 'react'

import styles from './styles.scss'

const Overlay = () => {
  return (
    <figcaption className={styles.overlay}>
      <h3>Food Name</h3>
    </figcaption>
  )
}

const Card = () => {
  return (
    <figure className={styles.wrapper}>
      <img  className={styles.image } src='https://c2.staticflickr.com/4/3092/2403194442_c537654716_z.jpg?zz=1' />
      <Overlay />
    </figure>
  )
}

export default Card
