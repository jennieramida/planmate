const functions = require('firebase-functions')
const { Nuxt } = require('nuxtjs-node6')
const express = require('express')
// const config = require('../nuxt.config')

const app = express()
const config = {
  dev: false,
  buildDir: 'nuxt',
  build: {
    publicPath: '/'
  }
}
const nuxt = new Nuxt(config)

function handleAppRequest(req, res) {
  res.set('Cache-Control', 'public, max-age=600, s-maxage=1200')
  return nuxt.renderRoute('/')
    .then(result => {
      return res.send(result.html)
    }).catch(err => {
      res.send(err)
    })
}

app.use(nuxt.render)
app.get('*', handleAppRequest)

exports.ssrapp = functions.https.onRequest(app)