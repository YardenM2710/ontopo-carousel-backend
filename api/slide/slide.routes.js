const express = require('express')
const { query } = require('./slide.controller')
const router = express.Router()

router.get('/', query)

module.exports = router
