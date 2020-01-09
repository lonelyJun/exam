const mongoose = require('mongoose')
const AlbumsFn = require('../save.js')
const assert = require('assert')
describe('测试Save模块', () => {
  before(() => {
    mongoose.connect(
      'mongodb://39.98.70.116:27017/albumsTest',
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
  it('测试存储图专辑', done => {
    let albumsList = [
      {
        album_id: '3751508',
        album_name: 'A.I. 爱',
        public_time: '2017-12-11',
        week: 50,
        price: 89,
        cover:
          'http://imgcache.qq.com/music/photo/album_300/08/300_albumpic_3751508_0.jpg',
        singers: [
          {
            singer_id: '265',
            singer_name: '王力宏'
          }
        ]
      },
      {
        album_id: '3766916',
        album_name: 'Pay the Man (Remix)',
        public_time: '2017-12-13',
        week: 50,
        price: 78,
        cover:
          'http://imgcache.qq.com/music/photo/album_300/16/300_albumpic_3766916_0.jpg',
        singers: [
          {
            singer_id: '28132',
            singer_name: 'Foster The People'
          },
          {
            singer_id: '191884',
            singer_name: 'J.I.D'
          },
          {
            singer_id: '173561',
            singer_name: 'Saba'
          }
        ]
      },
      {
        album_id: '3327203',
        album_name: 'Dreamer (梦想家)',
        public_time: '2017-12-08',
        week: 49,
        price: 102,
        cover:
          'http://imgcache.qq.com/music/photo/album_300/03/300_albumpic_3327203_0.jpg',
        singers: [
          {
            singer_id: '941206',
            singer_name: 'Axwell Λ Ingrosso'
          },
          {
            singer_id: '159855',
            singer_name: 'Trevor Guthrie'
          }
        ]
      },
      {
        album_id: '3766915',
        album_name: "Don't Don't Do It!",
        public_time: '2017-12-13',
        week: 50,
        price: 65,
        cover:
          'http://imgcache.qq.com/music/photo/album_300/15/300_albumpic_3766915_0.jpg',
        singers: [
          {
            singer_id: '13317',
            singer_name: 'N.E.R.D'
          },
          {
            singer_id: '28021',
            singer_name: 'Kendrick Lamar (肯德里克·拉马尔)'
          }
        ]
      },
      {
        album_id: '3324740',
        album_name: 'Trigger Bang',
        public_time: '2018-01-05',
        week: 1,
        price: 123,
        cover:
          'http://imgcache.qq.com/music/photo/album_300/40/300_albumpic_3324740_0.jpg',
        singers: [
          {
            singer_id: '5125',
            singer_name: 'Lily Allen (莉莉·艾伦)'
          },
          {
            singer_id: '49917',
            singer_name: 'Giggs'
          }
        ]
      }
    ]
    AlbumsFn.saveFunc(albumsList, (err, al) => {
      assert(al.length > 0)
      done()
    })
  })
  it('测试查询所有的专辑', done => {
    AlbumsFn.lsFunc((err, books) => {
      assert(books.length > 0)
      bookList = books.forEach(book => console.log(book._id))
      done()
    })
  })
})
