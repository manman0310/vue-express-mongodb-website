import express from 'express'
import mongoose from 'mongoose'
import conDb from '../../modules/conDB'

const router = express.Router()
var app = express();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' })

})
router.get('/outdoor', function (req, res) {
  let result = conDb.findOne({ classify: outdoor }, function (error, doc) {
    if (error) {
      console.error(error)
    } else {
      console.log(doc)
    }
  })

})

export default router
