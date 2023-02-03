const express = require('express')
const app = express()

const db = require('./models')

db.sequelize.sync().then(() => {
  app.listen('3030', () => {
    console.log("it's runing on port \"3030\"");
  })
})