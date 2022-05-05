const mysql = require('mysql2')

// 直接链接数据库
// const connection = mysql.createConnection({
//   host: '127.0.0.1',
//   user: 'root',
//   password: '......',
//   database: 'view-car'
// })

// 数据库链接池，链接
const connectionPool = mysql.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: '......',
  database: 'site_db',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});


function queryDataFn (sql, params) {
  return new Promise((resolve, reject) => {
    // 创建链接池对象
    connectionPool.getConnection((err, connection) => {
      // 执行查询语句
      connection.query(sql, params, function (err, result, fields) {
        if (err) {
          reject(err)
        }
        resolve(result)
        // 释放链接
        connection.release()
      })
    })
  })
}


module.exports = queryDataFn


