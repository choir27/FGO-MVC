const express = require('express')
const app = express()
    const PORT = 8000
const cors = require('cors')
const fs = require('fs')
require('dotenv').config({path: './config/.env'})
const connectDB = require('./config/database')
const path = require('path')
const mongoose = require('mongoose')
const morgan = require('morgan')
const passport = require('passport')
const methodOverride = require('method-override')
const { initialize } = require('passport');
const session = require('express-session');
const MongoStore = require('connect-mongo')

require('./config/passport')(passport)

connectDB()

// Method override
app.use(methodOverride(function (req, res) {
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
      // look in urlencoded POST bodies and delete it
      let method = req.body._method
      delete req.body._method
      return method
    }
  }))


// handling
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.static('views'))
app.use(express.static('audio'))
app.use(express.static('image'))
app.use(express.static('image/add'))
app.use(express.static('image/home'))
app.use(express.static('image/simulator'))

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//Sessions middleware
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUnitialized: false,
    store: MongoStore.create({ mongoUrl: process.env.DATABASE_URL
    })
    //cookie: { secure: true }
}))

//Passport middleware
app.use(passport.initialize())
app.use(passport.session())

//set global variable
app.use(function (req,res,next) {
    res.locals.user = req.user || null
    next()
})


app.use('/', require('./routes/index'))
app.use('/user', require('./routes/user'))
app.use('/auth', require('./routes/auth'))


app.listen(process.env.PORT || PORT, ()=>{  
    console.log(`Server running on port ${PORT}`)
})