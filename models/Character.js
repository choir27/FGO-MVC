const mongoose = require('mongoose')

const CharacterSchema = new mongoose.Schema({
  index: {
    type: String
  },
  status: {
    type: String,
    default: 'public',
    enum: ['public', 'private']
},
ascension: {
  type: String
},
servant: {
  type: Array
},
skill1: {
  type: String
},
skill2: {
  type: String
},
skill3: {
  type: String
},
appendSkill1:{
  type: String
},
appendSkill2:{
  type: String
},
appendSkill3:{
  type: String
},
level:{
  type: String
},
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref:  'User'
  }
})

module.exports = mongoose.model('Character', CharacterSchema)