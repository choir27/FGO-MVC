const mongoose = require('mongoose')

const TeamSchema = new mongoose.Schema({
index1: {
        type: Number
    },
index2: {
        type: Number
    },  
index3: {
        type: Number
    },
    user: {
    type: mongoose.Schema.Types.ObjectId,
    ref:  'User'
  }
})

module.exports = mongoose.model('Team', TeamSchema)