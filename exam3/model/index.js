//建立模型模块
const mongoose = require('mongoose')

const BookSchema = {
  name: String,
  price: Number
}

const CustomerSchema = {
  name: String,
  password: String,
  score: Number
}

mongoose.model('Book', BookSchema)
mongoose.model('Customer', CustomerSchema)

//建立专辑模型
var albumsSchema = {
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
}

mongoose.model('Album', albumsSchema)
