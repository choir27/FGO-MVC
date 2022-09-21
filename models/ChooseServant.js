const mongoose = require('mongoose')

const ChooseServantSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref:  'User'
  },
  servantIndex: {
    type: Number,
    required: false,
  }
})

module.exports = mongoose.model('ChooseServant', ChooseServantSchema)