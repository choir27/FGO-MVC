const { request } = require('express')
const express = require('express')
const router = express.Router()
const homeController = require('../controllers/not-authed')
const { ensureAuth, ensureGuest } = require('../middleware/auth')
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
        db.collection('teams').find().toArray()
        .then(team=>{
        db.collection('skills').find().toArray()
        .then(skill=>{
        db.collection('chooseservants').find().toArray()
        .then(choose=>{
        db.collection('characters').find().toArray()
        .then(character=>{
    db.collection('ascensions').find().toArray()
        .then(ascension=>{
        db.collection('servants').find().toArray()
            .then(servant=>{
                db.collection('users').find().toArray()
                    .then(user=>{
 response.json({team: team, skill: skill, choose: choose, servant: servant, user: user, ascension: ascension, character: character})
            })
       })

    })
})
        })
}).catch(error => res.render('error.ejs'))
    })
    })

module.exports = router
