import React from 'react'
import { render } from 'react-dom'
// @ts-ignore
import swRuntime from 'serviceworker-webpack-plugin/lib/runtime';

import './iconfont'
import App from './app'


if ('serviceWorker' in navigator) {
  swRuntime.register();
}

const root = document.getElementById('root')

render(<App />, root)
