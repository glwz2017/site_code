const md5 = require('md5')
const jwt = require('jsonwebtoken')
const goGo = require("../config/config");
const ip = require('ip')

// md5加密
const createMd5Fn = function (msg) {
  return md5(msg)
}

// 创建token
const createTokenFn = function (data) {
  return jwt.sign({data: data}, goGo.privateTokenKey, {expiresIn: 60 * 60})
}

// 获取ip地址
const getMachineFn = function () {
  return ip.address()
}

module.exports = {
  createMd5Fn,
  createTokenFn,
  getMachineFn
}
