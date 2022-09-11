const mongoose = require('mongoose')

const Skill3Schema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref:  'User'
  },
  servant: {
    type: Array,
    required: false,
  }
})

module.exports = mongoose.model('Skill3', Skill3Schema)