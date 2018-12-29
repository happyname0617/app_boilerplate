import React, { useState, useCallback } from 'react'

import styles from './styles.scss'

const Overlay = () => {
  return (
    <figcaption className={styles.overlay}>
      <h3>Food Name</h3>
    </figcaption>
  )
}

const Card = ({ url }: { url: string }) => {
  return (
    <figure className={styles.wrapper}>
      <img  className={styles.image } src={url} />
      <Overlay />
    </figure>
  )
}

export default Card
