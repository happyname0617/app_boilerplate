import React from 'react'

import Card from './components/card/card'

import styles from './styles.scss'

const App = () => {

  return (
      <div className={styles.container}>
        <h1>Similar Food</h1>
        <Card />
        <Card />
      </div>
  )
}

export default App
