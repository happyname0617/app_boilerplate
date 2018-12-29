import React, { useState, useEffect } from 'react'

import Card from './components/card/card'

import styles from './styles.scss'

interface IData {
  images: string[];
}

const App = () => {
  const [data, setData] = useState<null | IData>(null)

  useEffect(() => {
    fetch('http://localhost:3000/api')
      .then((resp) => resp.json())
      .then((data: IData) => setData(data))
  }, [])

  return (
      <div className={styles.container}>
        <h1 className={styles.title}>Similar Food</h1>
        {data ? data.images.map((url: string) => <Card url={url} />) : '...Loading'}
      </div>
  )
}

export default App
