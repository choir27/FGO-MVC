const mongoose = require('mongoose')

const ServantSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  middleName: {
    type: String,
    required: false
  },
  lastName: {
    type: String,
    required: false
  },
  servantClass: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  servantID: {
    type: String,
    required: true
  },
  servant: {
    type: Array,
    required: false
  },
  status: {
    type: String,
    default: 'public',
    enum: ['public', 'private']
},
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref:  'User'
  }
})

module.exports = mongoose.model('Servant', ServantSchema)