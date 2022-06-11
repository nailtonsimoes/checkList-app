const express = require('express')
const cors = require('cors')
const routes = require('./routes')

class App {
  constructor() {
    this.app = express()
    this.middlewares()
    this.routes()
  }

  middlewares() {
    this.app.use(express.json()) // setando o uso de json

    this.app.use((req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*')
      res.header(
        'Access-Control-Allow-Methods',
        'GET, POST, PATCH, PUT, DELETE'
      )
      res.header(
        'Access-Control-Allow-Headers',
        'Access, Content-type, Authorization, Accept, Origin, X-Requested-With, Content-Type, Access-Control-Request-Method'
      )

      this.app.use(cors())
      next()
    })
  }

  routes() {
    this.app.use(routes)
  }
}

module.exports = new App().app
