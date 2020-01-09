<!--  -->
<template>
  <pre style="text-align:left">
const mongoose = require('mongoose')
require('../model')
const AlbumDao = require('../dao/AlbumDao')
const assert = require('assert')
let bookList = []
describe('测试BookDom', () => {
  before(() => {
    mongoose.connect(
      'mongodb://39.98.70.116:27017/alumTest2',
      { useMongoClient: true },
      err => {
        if (!err) {
        }
      }
    )
  })
  after(() => {
    mongoose.disconnect()
  })
  it('测试添加一专辑', done => {
    let newAlumb = {
      album_id: '3751588',
      album_name: '东风破',
      public_time: '2007-12-11',
      week: 50,
      price: 89,
      cover:
        'http://imgcache.qq.com/music/photo/album_300/08/300_albumpic_3751508_0.jpg',
      singers: [
        {
          singer_id: '024',
          singer_name: '周杰伦'
        }
      ]
    }
    AlbumDao.addAlumb(newAlumb, (err, al) => {
      assert(al._id != null)
      done()
    })
  })
  it('测试查询所有的专辑', done => {
    AlbumDao.findAllAlbums((err, albums) => {
      assert(albums.length > 0)
      done()
    })
  })
  // it('按照ID删除专辑', done => {
  //   let id = bookList[0]._id
  //   AlbumDao.deleteAlbumById(id, err => {
  //     assert(err == null)
  //     done()
  //   })
  // })
})
  </pre>
</template>


<script>
export default {
  data () {
    //这里存放数据
    return {

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