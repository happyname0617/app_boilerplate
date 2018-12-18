import React from 'react'

import styles from './styles.scss'

const App = () => {

  return (
      <div className={styles.container}>
        <h1>Similar Food</h1>
        <img className={styles.image} src='https://c2.staticflickr.com/4/3092/2403194442_c537654716_z.jpg?zz=1' />
        <img className={styles.image} src='https://c2.staticflickr.com/4/3092/2403194442_c537654716_z.jpg?zz=1' />
      </div>
  )
}

export default App
