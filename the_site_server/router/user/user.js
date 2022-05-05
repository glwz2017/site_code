const express = require('express')
const router = express.Router()
const queryFn = require('../../config/db')
const {createMd5Fn, createTokenFn} = require('../../tools/tool')
const nodemailer = require('nodemailer')
// 重名接口
router.get('/singleton', async function (req, res, next) {
  let sql = `select *
             from user
             where u_email = ?`
  let result = await queryFn(sql, [req.query.user])
  if (result.length > 0) {
    res.json({
      code: '-1',
      msg: '邮箱已存在,请更换邮箱'
    })
  } else {
    res.json({
      code: '200'
    })
  }
})

// 注册接口
router.post('/register', async function (req, res, next) {
  try {
    let sql = `insert into user (u_email, u_password)
               values (?, ?)`
    let result = await queryFn(sql, [req.body.email, createMd5Fn(req.body.pwd)])
    if (result.affectedRows >= 1) {
      res.json({
        code: '200',
        msg: '注册成功',
        data: result[0]
      })
    } else {
      res.json({
        code: '202',
        msg: '注册失败'
      })
    }
  } catch (e) {
    res.json({
      code: '401',
      msg: '注册失败'
    })
  }
})


// 登录接口
router.post('/login', async function (req, res) {
  try {
    console.log(req.body)
    let sql = `select *
               from user
               where u_email = ?
                 and u_password = ?`
    let result = await queryFn(sql, [req.body.email, createMd5Fn(req.body.pwd)])
    console.log(result)
    if (result.length >= 1) {
      const token = createTokenFn(req.body.email)
      res.json({
        code: '200',
        data: result,
        msg: '登录成功',
        token: token
      })
    } else {
      res.json({
        code: '404',
        msg: '用户名或密码错误'
      })
    }
  } catch (err) {
    throw new Error(err.code)
  }
})


// 邮箱发送
router.post('/email', async function (req, res, next) {
  console.log(req.body.email);
  nodemailer.createTestAccount(() => {
    let transporter = nodemailer.createTransport({
      host: "smtp.163.com",
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: 'cfj1589208939@163.com',
        pass: 'LQLHPWAMUBCHEMKX'
      },
    })
    transporter.sendMail({
      // 发送人
      from: 'cfj1589208939@163.com', // sender address
      // 接受人[多个邮箱已逗号分割]
      to: "3098676973@qq.com", // list of receivers
      // 邮件主题
      subject: "Hello ✔", // Subject line
      // 邮件内容
      text: "this is a text email", // plain text body
      html: "<b>Hello world?999</b>", // html body
    }, (err, info) => {
      if (err) {
        res.json({
          code: '-1',
          data: [],
          msg: '邮件发送失败'
        })
      }
      res.json({
        code: '200',
        data: [],
        msg: '邮件发送成功'
      })
    });
  })

})

module.exports = router;
