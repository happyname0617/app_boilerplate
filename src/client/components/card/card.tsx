import cx from 'classnames';
import React, { useState, SFC } from 'react'

import styles from './styles.modules.scss'

const Overlay = ({ open }: { open: boolean }) => {
  return (
    <figcaption className={styles.overlay}>
      <h3 className={styles.title}>Food Name</h3>
      <button className={styles.button}>Eat</button>
    </figcaption>
  )
}

export interface IProps {
  /** image url  */
  url?: string
}

export const Card: SFC<IProps> = ({ url }) => {
  const [ open, setOpen ] = useState(false)
  return (
    <figure onClick={() => setOpen(!open)} className={cx(styles.wrapper, open && styles.open)}>
      <img  className={styles.image } src={url} />
      <Overlay open={ open }/>
    </figure>
  )
}

export default Card
