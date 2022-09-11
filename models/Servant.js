const mongoose = require('mongoose')

const ServantSchema = new mongoose.Schema({
  name:{
    type: String
  },
  className: {
    type: String
    },
  gender: {
    type: String
  },
  rarity: {
    type: String
  },
  index: {
    type: String
  },
  status: {
    type: String,
    default: 'public',
    enum: ['public', 'private']
},
servant: {
  type: Array,
  required: false
},
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref:  'User'
  }
})

module.exports = mongoose.model('Servant', ServantSchema)