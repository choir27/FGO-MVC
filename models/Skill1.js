const mongoose = require('mongoose')

const Skill1Schema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref:  'User'
  },
  servant: {
    type: Array,
    required: false,
  }
})

module.exports = mongoose.model('Skill1', Skill1Schema)