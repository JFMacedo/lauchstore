const express = require('express')
const routes = express.Router()
const productController = require('./app/controllers/product')

routes.get('/', (req, res) => {
  return res.render('layout.njk')
})

routes.get('/products/create', productController.create)
routes.post('/products', productController.post)

// Alias (Atalhos)
routes.get('/ads/create', (req, res) => {
  return res.render('/products/create')
})

module.exports = routes