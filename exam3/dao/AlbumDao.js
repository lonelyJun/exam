const mongoose = require('mongoose')

let AlbumModel = mongoose.model('Album')

const addSinger = (id, singer, callback) => {
  AlbumModel.findByIdAndUpdate(id, { $push: singer }, function(err, na) {
    if (!err) callback(null, na.toObject())
    else callback(err)
  })
}

const findAllAlbums = callback => {
  AlbumModel.find({}).exec((err, albumList) => {
    if (!err) callback(null, albumList)
    else callback(err)
  })
}

const deleteAlbumById = (id, callback) => {
  AlbumModel.findByIdAndRemove(id, err => {
    if (!err) callback(null, {})
    else callback(err)
  })
}

module.exports = { findAllAlbums, deleteAlbumById }
