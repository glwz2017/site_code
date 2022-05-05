const express = require('express');
const app = express()
const path = require('path')
// express框架  映射静态资源文件路径
app.use(express.static(path.join(__dirname, 'public')))

// express 解析json数据
app.use(express.json())
// const bodyParser = require("body-parser");
// app.use(bodyParser.urlencoded({ extended: false }))
// 解决跨域问题
const cors = require('cors')
app.use(cors())

// 统一路由模块
const router = require('./router/api')

// 路由拦截
app.use(function (err, req, res, next) {
  if (err) {
   res.status('500').send(err.statusMessage)
  }
  next()
})

app.use('/', router)


app.listen('9999', function () {
  console.log('前后端分离--网站服务端启动成功...')
})
