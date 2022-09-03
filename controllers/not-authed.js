const fetch = (...args) =>
import('node-fetch').then(({default: fetch}) => fetch(...args))
const Servant = require('../models/Servant')
const MongoClient = require('mongodb').MongoClient
const { ensureAuth, ensureGuest } = require('../middleware/auth')
const { json } = require('express')

module.exports={
    getHome: async(req,res) =>{
        try{
            res.render('not-authed/home.ejs')
        }catch(err){
            console.error(err)
        } 
    },
    getGameplay: async(req,res) =>{
        try{
            res.render('not-authed/gameplay.ejs')
        }catch(err){
            console.error(err)
        } 
    }
}

    
    // router.post('/simulator', (request, response) => {
    //     db.collection('simulator').insertOne({text: request.body.text})
    //     .then(result => {
    // response.redirect('/simulator')
    //     })
    //     .catch(error => console.error(error))
    // })
    
    
    