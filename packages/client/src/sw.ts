/// <reference no-default-lib="true" />
/// <reference lib="ES2018" />
/// <reference path="./types/webworker.d.ts" />

declare const self: ServiceWorkerGlobalScope
declare const serviceWorkerOption: {
  assets: string[]
}

const VERSION = serviceWorkerOption.assets.join('')

const assetsToCache = [...serviceWorkerOption.assets, './'].map(path => {
  // @ts-ignore
  return new URL(path, global.location).toString()
})

self.addEventListener('install', (evt) => {
  console.log('install', serviceWorkerOption)
  self.skipWaiting()
  evt.waitUntil(
    self.caches.open(VERSION)
      .then((cache) => cache.addAll(assetsToCache))
  )
})

self.addEventListener('activate', (evt) => {
  console.log('active')
  evt.waitUntil(
    caches.keys()
      .then((keys: any) =>
        Promise.all(
          keys.map((key: string) => {
            if (key !== VERSION) return caches.delete(key)
          }) 
        )
      )
  )
})

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) =>
      response || fetch(event.request)
    )
  )
})
