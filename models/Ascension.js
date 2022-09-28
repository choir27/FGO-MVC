const mongoose = require('mongoose')

const AscensionSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref:  'User'
  },
  servant: {
    type: Array,
    required: false,
  }
})

module.exports = mongoose.model('Ascension', AscensionSchema)