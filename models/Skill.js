const mongoose = require('mongoose')

const SkillSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref:  'User'
  },
  servant: {
    type: Array,
    required: false,
  },
  classPassive: {
    type: Array,
    required: false,
  }
})

module.exports = mongoose.model('Skill',SkillSchema)