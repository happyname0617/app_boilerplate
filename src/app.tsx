import React from 'react'

import Card from './components/card/card'
import data from './data'

import styles from './styles.scss'

const App = () => {

  return (
      <div className={styles.container}>
        <h1 className={styles.headder}>Similar Food</h1>
        {data.images.map((url: string) => <Card url={url} />)}
      </div>
  )
}

export default App
