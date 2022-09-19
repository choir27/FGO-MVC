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
skillCooldown1:{
  type: Array
},
skillCooldown2:{
  type: Array
},
skillCooldown3:{
  type: Array
},
level:{
  type: String
},
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref:  'User'
  }
})

module.exports = mongoose.model('Servant', ServantSchema)