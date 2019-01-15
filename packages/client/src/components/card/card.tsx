import cx from 'classnames'
import React, { useState, SFC } from 'react'

import styles from './styles.modules.scss'

import { cold } from 'react-hot-loader'

const Overlay = () => {
  return (
    <figcaption className={styles.overlay}>
      <h3 className={styles.title}>Food Name</h3>
      <h3 className={styles.title}>Price</h3>
      <h3 className={styles.title}>Restaurant</h3>
      <h3 className={styles.title}>Location</h3>
      <h3 className={styles.title}>Ingredients</h3>
      <button className={styles.button}>Eat</button>
    </figcaption>
  )
}

export interface IProps {
  /** image url  */
  url?: string
}

export const Card: SFC<IProps> = ({ url }) => {
  const [open, setOpen] = useState(false)
  return (
    <figure
      onClick={() => setOpen(!open)}
      className={cx(styles.wrapper, open && styles.open)}
    >
      <img className={styles.image} src={url} />
      <Overlay />
    </figure>
  )
}

export default cold(Card)
