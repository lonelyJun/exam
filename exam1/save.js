const mongoose = require('mongoose')
var Schema = mongoose.Schema

var albumsSchema = new Schema({
  album_id: Number,
  album_name: String,
  public_time: String,
  week: Number,
  price: Number,
  cover: String,
  singers: [
    {
      singer_id: String,
      singer_name: String
    }
  ]
})

var AlbumsModel = mongoose.model('Albums', albumsSchema)

const saveFunc = (data, callback) => {
  AlbumsModel.create(data, function(err, albumsList) {
    if (!err) callback(null, albumsList)
    else callback(err)
  })
}

const lsFunc = callback => {
  AlbumsModel.find({}).exec((err, books) => {
    if (!err) callback(null, books)
    else callback(err)
  })
}

module.exports = { saveFunc, lsFunc }
