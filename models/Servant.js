const mongoose = require('mongoose')

const ServantSchema = new mongoose.Schema({
 servant: {
  type: Array,
 },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref:  'User'
  }
})

module.exports = mongoose.model('Servant', ServantSchema)