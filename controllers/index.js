const fetch = (...args) =>
import('node-fetch').then(({default: fetch}) => fetch(...args))
const Servant = require('../models/Servant')
const MongoClient = require('mongodb').MongoClient
const { json } = require('express')

module.exports={
    getHome: async(req,res) =>{
        try{
            const data = await Servant.find({userId:req.user.id}).lean()
            res.render('authed/home.ejs', {info: data, name: req.user.firstName, userID: req.user.id})
        }catch(err){
            console.error(err)
        } 
    },
    getServants: async(req,res) =>{
        try{
            const data = await Servant.find({userId:req.user.id})
                .populate('user')
                .sort({ createdAt: 'desc' })
                .lean()
            res.render('authed/servants.ejs', {info: data, userID: req.user.id , userName: req.user.displayName, userImage: req.user.image})
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

                        if((splitByHyphen[0].toLowerCase() === request.body.firstName.toLowerCase().trim() || splitBySpace[0].toLowerCase().trim() === request.body.firstName.toLowerCase()) && request.body.servantClass.toLowerCase().split(' ').join('').trim() === data[i].className.toLowerCase()) {
         request.body.servant = {name: data[i].name, extraAssets: data[i].extraAssets, className: data[i].className, rarity: data[i].rarity, collectionNo: data[i].collectionNo, gender: data[i].gender, lvMax: data[i].lvMax, atkMax: data[i].atkMax, hpMax: data[i].hpMax, cost: data[i].cost, id: data[i].id, starAbsorb: data[i].starAbsorb, starGen: data[i].starGen, attribute: data[i].atrribute, instantDeathChance: data[i].instantDeathChance, cards: data[i].cards, profile: data[i].profile, ascensionAdd: data[i].ascensionAdd, skills: data[i].skills, appendPassive: data[i].appendPassive, classPassive: data[i].classPassive, noblePhantasms: data[i].noblePhantasms, coin: data[i].coin}
                     break;
                        }
                    }    

                    request.body.user = request.user.id
           await Servant.create(request.body)
                  response.redirect('servants')
                }catch(err){
                    console.error(err)
                }
    },
    getTemplate: async (request,response) =>{
        try{
            const info = await Servant.findById(request.params.id).populate('user').lean()
            if (!info) {
                return response.render('authed/error')  
              }
          
              if (info.user._id != request.user.id && info.status == 'private') {
                response.render('authed/error')
              } else {
                response.render('authed/template.ejs', { info})
              }
        }
        catch(err){
            console.error(err)
          }
    },
    getUserPage: async (req,res)=>{
        try{
          const data = await Servant.find({user: req.params.name, status: 'public'})
            .populate('user')
            .lean()
        res.render('authed/view', {info: data, userName: req.user.displayName, userImage: req.user.image})
    
      } catch (err) {
        console.error(err)
        res.render('authed/error')
      }
    },
    getEditPage: async (req,res)=>{
        try{
            const data = await Servant.findById(req.params.servant).populate('user').lean()
            if (!data) {
                return res.render('authed/error')  
              }
              if (data.user._id != req.user.id) {
                res.render('authed/error')
              } else {
                res.render('authed/edit.ejs', {data})
              }
        }catch(err){
            res.render('authed/error')
        }
    },
    editServant: async (request,response)=>{
        try{
            let res = await fetch('https://api.atlasacademy.io/export/JP/nice_servant_lore_lang_en.json')
            let data = await res.json()
                         for(let i = 0; i < data.length; i++) {
                             let splitBySpace = data[i].name.split(' ')
                             let splitByHyphen = data[i].name.split('-')
     
                             if((splitByHyphen[0].toLowerCase() === request.body.firstName.toLowerCase().trim() || splitBySpace[0].toLowerCase().trim() === request.body.firstName.toLowerCase()) && request.body.servantClass.toLowerCase().split(' ').join('').trim() === data[i].className.toLowerCase()) {
              request.body.servant = {name: data[i].name, extraAssets: data[i].extraAssets, className: data[i].className, rarity: data[i].rarity, collectionNo: data[i].collectionNo, gender: data[i].gender, lvMax: data[i].lvMax, atkMax: data[i].atkMax, hpMax: data[i].hpMax, cost: data[i].cost, id: data[i].id, starAbsorb: data[i].starAbsorb, starGen: data[i].starGen, attribute: data[i].atrribute, instantDeathChance: data[i].instantDeathChance, cards: data[i].cards, profile: data[i].profile, ascensionAdd: data[i].ascensionAdd, skills: data[i].skills, appendPassive: data[i].appendPassive, classPassive: data[i].classPassive, noblePhantasms: data[i].noblePhantasms, coin: data[i].coin}
                          break;
                             }
                         }    
                             
                let character = await Servant.findById(request.params.character).lean() 
                request.body.user = request.user.id
                character = await Servant.findOneAndUpdate({ _id: request.params.character }, request.body, {
                    new: true,
                    runValidators: true,
                  })
                  response.redirect('/user/servants')
        }catch(err){
            response.render('authed/error')
        }
    },
}

    
    // router.post('/simulator', (request, response) => {
    //     db.collection('simulator').insertOne({text: request.body.text})
    //     .then(result => {
    // response.redirect('/simulator')
    //     })
    //     .catch(error => console.error(error))
    // })
    
    
    