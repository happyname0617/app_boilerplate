import React from 'react'

import getFoodImages from './utils/getFoodImages'
import Card from './components/card/card'
import { Title1 } from './components/title'
import { D1, D2 } from './components/display'
import { MenuMobile, MenuDesktop } from './components/menu'
import { ButtonMenuFeed, ButtonMenuHistory } from './components/button'

import styles from './app.scss'

const App = () => {
  const foodList = getFoodImages()
  return (
    <div className={styles.container}>
      <MenuDesktop>
        <ButtonMenuHistory />
        <ButtonMenuFeed />
        <D1>Desktop</D1>
      </MenuDesktop>

      <Title1>Similar Food</Title1>
      {foodList
        ? foodList.images.map((url: string, i: number) => (
            <Card url={url} key={i} />
          ))
        : '...Loading'}

      <MenuMobile>
        <ButtonMenuHistory />
        <ButtonMenuFeed />
        <D1>Mobile</D1>
        <D2>test</D2>
      </MenuMobile>
    </div>
  )
}

export default App
