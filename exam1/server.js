const http = require('http')
const mongoose = require('mongoose')

const AlbumsFn = require('./save')
mongoose.connect(
  'mongodb://39.98.70.116:27017/album',
  { useMongoClient: true },
  err => {
    //连接数据库
    if (!err) {
      console.log('数据库已连上')
      const options = {
        host: 'johnyu.cn',
        port: 3000,
        path: '/albums'
      }

      // 发出请求。
      const req = http.request(options)
      req.end()

      let data = ''
      req.on('response', res => {
        res.on('data', function(chunk) {
          //返回请求结果
          data += chunk.toString()
        })

        res.on('end', function() {
          let dataJson = JSON.parse(data)
          AlbumsFn.saveFunc(dataJson, (err, res) => {
            console.log('succsee')
          })
        })
      })
    } else {
      console.log(err)
    }
  }
)
