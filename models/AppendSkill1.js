const mongoose = require('mongoose')

const AppendSkill1Schema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref:  'User'
  },
  servant: {
    type: Array,
    required: false,
  }
})

module.exports = mongoose.model('AppendSkill1', AppendSkill1Schema)