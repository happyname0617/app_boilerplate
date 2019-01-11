import React from 'react'

import getFoodImages from './utils/getFoodImages'
import Card from './components/card/card'
import MainMenu from './components/mainMenu'

import styles from './styles.scss'

const App = () => {
  const foodList = getFoodImages()

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Similar Food</h1>
      {foodList ? foodList.images.map((url: string, i: number) => <Card url={url} key={i} />) : '...Loading'}
      <MainMenu />
    </div>
  )
}

export default App
