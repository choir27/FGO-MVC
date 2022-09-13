const mongoose = require('mongoose')

const ServantSchema = new mongoose.Schema({
  name:{
    type: String,
    required: true,
  },
  className: {
    type: String,
    required: true,
    },
  gender: {
    type: String,
    required: true,
  },
  rarity: {
    type: String,
    required: true,
  },
  index: {
    type: String,
    required: true,
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
skill1: {
  type: String,
  required: true
},
skill2: {
  type: String,
  required: true
},
skill3: {
  type: String,
  required: true
},
appendSkill1:{
  type: String,
  required: true
},
appendSkill2:{
  type: String,
  required: true
},
appendSkill3:{
  type: String,
  required: true
},
skillCooldown1:{
  type: Array,
  required: true
},
skillCooldown2:{
  type: Array,
  required: true
},
skillCooldown3:{
  type: Array,
  required: true
},
level:{
  type: String,
  required: true
},
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref:  'User'
  }
})

module.exports = mongoose.model('Servant', ServantSchema)