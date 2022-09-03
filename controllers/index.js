const fetch = (...args) =>
import('node-fetch').then(({default: fetch}) => fetch(...args))
const Servant = require('../models/Servant')
const MongoClient = require('mongodb').MongoClient
const { json } = require('express')

module.exports={
    getHome: async(req,res) =>{
        try{
            const data = await Servant.find({userId:req.user.id}).lean()
            res.render('authed/home.ejs', {data, name: req.user.firstName})
        }catch(err){
            console.error(err)
        } 
    },
    getServants: async(req,res) =>{
        try{
            const data = await Servant.find({userId:req.user.id})
            res.render('authed/servants.ejs', {info: data})
        }catch(err){
            console.error(err)
        } 
    },
    getAdd: async(req,res) =>{
        try{
        const data = await Servant.find({userId:req.user.id})
        res.render('authed/add.ejs', { info: data })
        }catch(err){
            console.error(err)
        } 
    },
    getSimulator: async(req,res) =>{
        try{
            const data = await Servant.find({userId:req.user.id})
            res.render('authed/simulator.ejs', {data})
        }catch(err){
            console.error(err)
        } 
    },
    getGameplay: async(req,res) =>{
        try{
            res.render('authed/gameplay.ejs')
        }catch(err){
            console.error(err)
        } 
    },
    getAPI: async(req, res) =>{
        try{
            const data = await Servant.find({userId:req.user.id})
            res.json(data)
        }catch(err){
            console.error(err)
        } 
    },
    postServants: async (request,response) =>{
        try{
       let res = await fetch('https://api.atlasacademy.io/export/JP/nice_servant_lore_lang_en.json')
       let data = await res.json()
                    for(let i = 0; i < data.length; i++) {
                        let splitBySpace = data[i].name.split(' ')
                        let splitByHyphen = data[i].name.split('-')
        
                        if((splitByHyphen[0].toLowerCase() === request.body.firstName.toLowerCase() || splitBySpace[0].toLowerCase() === request.body.firstName.toLowerCase()) && request.body.servantClass.toLowerCase() === data[i].className.toLowerCase()) {
                            request.body.servant = data[i]
                
                     break;
                        }
                    }    

                    request.body.user = request.user.id
           await Servant.create(request.body)
                  response.redirect('servants')
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
    
    
    