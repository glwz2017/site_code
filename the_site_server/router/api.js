const express = require('express');

const router = express.Router()

const api = require('./user/user')

// 全局api 挂载
router.use('/api', api)

module.exports = router
