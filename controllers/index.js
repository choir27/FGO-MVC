const fetch = (...args) =>
import('node-fetch').then(({default: fetch}) => fetch(...args))
const Servant = require('../models/Servant')
const MongoClient = require('mongodb').MongoClient
const { json } = require('express')
const cloudinary = require("../middleware/cloudinary");

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
            res.render('authed/simulator.ejs', {data,userID: req.user.id})
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
       let res = await fetch(`https://api.atlasacademy.io/nice/NA/servant/search?name=${request.body.firstName.toLowerCase().trim()}&rarity=${request.body.rarity}&className=${request.body.servantClass.toLowerCase().split(' ').join('').trim()}&gender=${request.body.gender}`)
       let data = await res.json()
       if(data[0] && data){
        const image = await cloudinary.uploader.upload(data[0].extraAssets.charaGraph.ascension[1])
        const image2 = await cloudinary.uploader.upload(data[0].extraAssets.charaGraph.ascension[2])
        const image3 = await cloudinary.uploader.upload(data[0].extraAssets.charaGraph.ascension[3])
        const image4 = await cloudinary.uploader.upload(data[0].extraAssets.charaGraph.ascension[4])
        const image5 = await cloudinary.uploader.upload(data[0].skills[0].icon)
        const image6 = await cloudinary.uploader.upload(data[0].skills[1].icon)
        const image7 = await cloudinary.uploader.upload(data[0].skills[2].icon)
         request.body.servant = { cloud_1: {cloudinaryId: image.public_id, image: image.secure_url}, cloud_2: {cloudinaryId: image2.public_id, image: image2.secure_url}, cloud_3: {cloudinaryId: image3.public_id, image: image3.secure_url}, cloud_4: {cloudinaryId: image4.public_id, image: image4.secure_url}, cloud_5: {cloudinaryId: image5.public_id, image: image5.secure_url}, cloud_6: {cloudinaryId: image6.public_id, image: image6.secure_url}, cloud_7: {cloudinaryId: image7.public_id, image: image7.secure_url}, name: data[0].name, className: data[0].className, rarity: data[0].rarity, collectionNo: data[0].collectionNo, gender: data[0].gender, lvMax: data[0].lvMax, atkMax: data[0].atkMax, hpMax: data[0].hpMax, cost: data[0].cost, id: data[0].id, starAbsorb: data[0].starAbsorb, starGen: data[0].starGen, attribute: data[0].atrribute, instantDeathChance: data[0].instantDeathChance, cards: data[0].cards, profile: data[0].profile, ascensionAdd: data[0].ascensionAdd, skills: { skillCooldown1: [data[0].skills[0].coolDown], skillCooldown2: [data[0].skills[1].coolDown], skillCooldown3: [data[0].skills[2].coolDown] ,skillName1: data[0].skills[0].name, skillName2: data[0].skills[1].name, skillName3: data[0].skills[0].name} , noblePhantasms: data[0].noblePhantasms}
                    request.body.user = request.user.id
           await Servant.create(request.body)
                  response.redirect('servants')
       }else{
        console.error('error')
        response.render('authed/error')
       }
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
            let res = await fetch(`https://api.atlasacademy.io/nice/NA/servant/search?name=${request.body.firstName.toLowerCase().trim()}&rarity=${request.body.rarity}&className=${request.body.servantClass.toLowerCase().split(' ').join('').trim()}&gender=${request.body.gender}`)
            let data = await res.json()
            if(data){
        const image = await cloudinary.uploader.upload(data[0].extraAssets.charaGraph.ascension[1])
        const image2 = await cloudinary.uploader.upload(data[0].extraAssets.charaGraph.ascension[2])
        const image3 = await cloudinary.uploader.upload(data[0].extraAssets.charaGraph.ascension[3])
        const image4 = await cloudinary.uploader.upload(data[0].extraAssets.charaGraph.ascension[4])
        const image5 = await cloudinary.uploader.upload(data[0].skills[0].icon)
        const image6 = await cloudinary.uploader.upload(data[0].skills[1].icon)
        const image7 = await cloudinary.uploader.upload(data[0].skills[2].icon)
         request.body.servant = { cloud_1: {cloudinaryId: image.public_id, image: image.secure_url}, cloud_2: {cloudinaryId: image2.public_id, image: image2.secure_url}, cloud_3: {cloudinaryId: image3.public_id, image: image3.secure_url}, cloud_4: {cloudinaryId: image4.public_id, image: image4.secure_url}, cloud_5: {cloudinaryId: image5.public_id, image: image5.secure_url}, cloud_6: {cloudinaryId: image6.public_id, image: image6.secure_url}, cloud_7: {cloudinaryId: image7.public_id, image: image7.secure_url}, name: data[0].name, className: data[0].className, rarity: data[0].rarity, collectionNo: data[0].collectionNo, gender: data[0].gender, lvMax: data[0].lvMax, atkMax: data[0].atkMax, hpMax: data[0].hpMax, cost: data[0].cost, id: data[0].id, starAbsorb: data[0].starAbsorb, starGen: data[0].starGen, attribute: data[0].atrribute, instantDeathChance: data[0].instantDeathChance, cards: data[0].cards, profile: data[0].profile, ascensionAdd: data[0].ascensionAdd, skills: { skillCooldown1: [data[0].skills[0].coolDown], skillCooldown2: [data[0].skills[1].coolDown], skillCooldown3: [data[0].skills[2].coolDown] ,skillName1: data[0].skills[0].name, skillName2: data[0].skills[1].name, skillName3: data[0].skills[0].name} , noblePhantasms: data[0].noblePhantasms}
                let character = await Servant.findById(request.params.character).lean() 
                request.body.user = request.user.id
                character = await Servant.findOneAndUpdate({ _id: request.params.character }, request.body, {
                    new: true,
                    runValidators: true,
                  })
        response.redirect('/user/servants')
    }
        }catch(err){
            response.render('authed/error')
        }
    },
    deleteServant: async (req, res) => {
        try{
            let post = await Servant.findById({ _id: req.params.select });
            await Servant.findOneAndDelete({post})

            res.redirect('/user/servants')
        }catch(err){
            res.render('authed/error')
        }
    },
    
}

   