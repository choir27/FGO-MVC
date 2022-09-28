const { request } = require('express')
const express = require('express')
const router = express.Router()
const homeController = require('../controllers/not-authed')
const { ensureAuth, ensureGuest } = require('../middleware/auth')
const Servant = require('../models/Servant')
const MongoClient = require('mongodb').MongoClient

router.get('/', ensureGuest ,homeController.getHome)

router.get('/gameplay' ,ensureGuest , homeController.getGameplay)

let db,
    dbName = 'test'


MongoClient.connect(process.env.DATABASE_URL, { useUnifiedTopology: true })
    .then(client => {
        db = client.db(dbName)
    })

    router.get('/api/servants',(request,response)=>{
        db.collection('servants').find().toArray()
            .then(info=>{
                db.collection('users').find().toArray()
                    .then(users=>{
 response.json({servants: info, users: users})
            })
       })
       .catch(error => res.render('not-authed/error.ejs'))
    })


module.exports = router
