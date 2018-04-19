import express from 'express'
import mongoose from 'mongoose'
import conDb from '../../modules/conDB'

const router = express.Router()
var app = express();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' })

})
router.get('/outdoor', function (req, res, next) {
  let result = conDb.find()
  res.json(result);
})

export default router
