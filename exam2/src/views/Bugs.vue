<!--  -->
<template>
  <pre style="text-align:left">

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

  </pre>
</template>

<script>
export default {
  data () {
    //这里存放数据
    return {
      code: ``
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {

  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted () {

  },
}
</script>
<style scoped>
</style>