const mongoose = require('mongoose')

const ServantFaceSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref:  'User'
  },
  face: {
    type: Object,
  },
  command:{
    type: Object,
  },
  cloudinaryId: {
    type: Object,
  },
})

module.exports = mongoose.model('ServantFace',ServantFaceSchema)