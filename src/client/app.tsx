import React, { useState, useEffect } from 'react'

import { fetchFood, fetchFoodDefault, IFoodList } from './api/fetchFood'
import Card from './components/card/card'

import styles from './styles.scss'

const App = () => {
  const [foodList, setFoodList] = useState<IFoodList | null>(null)
  useEffect(fetchFood(setFoodList), fetchFoodDefault)

  return (
      <div className={styles.container}>
        <h1 className={styles.title}>Similar Food</h1>
        {foodList ? foodList.images.map((url: string, i: number) => <Card url={url} key={i}/>) : '...Loading'}
      </div>
  )
}

export default App
