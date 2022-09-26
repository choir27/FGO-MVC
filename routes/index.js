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
                        db.collection('chooses').find().toArray()
        .then(data => {
            db.collection('skill1').find().toArray()
                .then(skill1=>{
                    db.collection('skill2').find().toArray()
                        .then(skill2=>{
                            db.collection('skill3').find().toArray()
                                .then(skill3=>{
                                    db.collection('appendskill1').find().toArray()
                                        .then(appendskill1=>{
                                            db.collection('appendskill2').find().toArray()
                                                .then(appendskill2=>{
                                                    db.collection('appendskill3').find().toArray()
                                                        .then(appendskill3=>{
                                                            response.json({servants: info, users: users, info: data, skill1: skill1, skill2: skill2, skill3: skill3,  appendskill3: appendskill3 ,appendskill2: appendskill2 ,appendskill1: appendskill1 })
                                                        })
                                                })
                                        })
                                })

                        })
                })
                    })
            })
        
       })
       .catch(error => res.render('not-authed/error.ejs'))
    })


module.exports = router
