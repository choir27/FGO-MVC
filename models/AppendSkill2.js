const mongoose = require('mongoose')

const AppendSkill2Schema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref:  'User'
  },
  servant: {
    type: Array,
    required: false,
  }
})

module.exports = mongoose.model('AppendSkill2', AppendSkill2Schema)