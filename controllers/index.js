const fetch = (...args) =>
import('node-fetch').then(({default: fetch}) => fetch(...args))
const Servant = require('../models/Servant')
const cloudinary = require("../middleware/cloudinary");
const ChooseServant = require('../models/ChooseServant.js')
const Character = require('../models/Character')
const Ascension = require('../models/Ascension')
const Skill = require('../models/Skill')


module.exports={
    getHome: async(req,res) =>{
        try{
            const data = await Character.find({userId:req.user.id}).lean()
            const info = await Servant.find({userId:req.user.id}).lean()
            const chooseServant = await ChooseServant.find({userId:req.user.id}).lean()
            const skill = await Skill.find({userId:req.user.id}).lean()
            const ascension = await Ascension.find({userId:req.user.id}).lean()
            res.render('authed/home.ejs', {info: data, skill: skill ,ascension: ascension ,choose: chooseServant, data: info, name: req.user.firstName, userID: req.user.id})
        }catch(err){
            res.render('error')  
            console.error(err)
        } 
    },
    getServants: async(req,res) =>{
        try{
            const data = await Character.find({userId:req.user.id}).lean()
                .populate('user')
                .sort({ createdAt: 'desc' })
                .lean()
    
                const info = await Servant.find({userId:req.user.id}).lean()
                const chooseServant = await ChooseServant.find({userId:req.user.id}).lean()
                const skill = await Skill.find({userId:req.user.id}).lean()
                const ascension = await Ascension.find({userId:req.user.id}).lean()
                res.render('authed/servants.ejs', {info: data, skill: skill ,ascension: ascension ,choose: chooseServant, data: info, name: req.user.firstName, userID: req.user.id, userName: req.user.displayName, userImage: req.user.image})
        }catch(err){
            res.render('error')  
            console.error(err)
        }
    },
    getAdd: async(req,res) =>{
        try{
        const data = await Servant.find({userId:req.user.id}).lean()
        const chooseServant = await ChooseServant.find({userId:req.user.id}).lean()
        const skill = await Skill.find({userId:req.user.id}).lean()
        const ascension = await Ascension.find({userId:req.user.id}).lean()

        res.render('authed/add.ejs', {skill: skill ,ascension: ascension ,choose: chooseServant, info: data})
        }catch(err){
            res.render('error')  
            console.error(err)
        } 
    },
    getSimulator: async(req,res) =>{
        try{
            const data = await Servant.find({userId:req.user.id}).lean()
            const chooseServant = await ChooseServant.find({userId:req.user.id}).lean()
            res.render('authed/simulator.ejs', {choose: chooseServant, info: data, userID: req.user.id})
        }catch(err){
            res.render('error')  
            console.error(err)
        } 
    },
    getGameplay: async(req,res) =>{
        try{
            res.render('authed/gameplay.ejs')
        }catch(err){
            res.render('error')  
            console.error(err)
        } 
    },
    postServants: async (req,res) =>{
        try{
            let data = await Servant.find({userId:req.user.id}).lean()
        
                req.body.servant = data[req.body.index].servant[0]
                req.body.user = req.user.id
                await ChooseServant.findOneAndUpdate({servantIndex: req.body.servantIndex})
                await Character.create(req.body)
                res.redirect('/user/servants')
        }
            catch(err){
        console.log(err)
        res.render('error')  
        }
    },
    getTemplate: async (req,res) =>{
        try{
            const info = await Servant.find({userId:req.user.id}).lean()
            if (!info) {
                return res.render('error')  
              }
          
              if (info.user._id != req.user.id && info.status == 'private') {
                res.render('error')
              } else {
                res.render('authed/template.ejs', { info})
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
            const data = await Servant.find({userId:req.user.id}).lean()
            const chooseServant = await ChooseServant.find({userId:req.user.id}).lean()
            if (!data) {
                return res.render('error')  
              }
              if (data.user._id != req.user.id) {
                res.render('authed/error')
              } else {
                res.render('authed/edit.ejs', {data, choose: chooseServant})
              }
        }catch(err){
            res.render('error')
        }
    },
    editServant: async (req,res)=>{
        try{
            let response = await fetch(`https://api.atlasacademy.io/nice/NA/servant/search?name=${req.body.name}&rarity=${req.body.rarity}&className=${req.body.className}&gender=${req.body.gender}`)
            let data = await response.json()
            if(data){
                req.body.servant = {collectionNo: data[0].collectionNo, lvMax: data[0].lvMax, atkMax: data[0].atkMax, hpMax: data[0].hpMax, cost: data[0].cost, id: data[0].id, starAbsorb: data[0].starAbsorb, starGen: data[0].starGen, attribute: data[0].atrribute, instantDeathChance: data[0].instantDeathChance, cards: data[0].cards, profile: data[0].profile, ascensionAdd: data[0].ascensionAdd, noblePhantasms: data[0].noblePhantasms}
                let character = await Servant.findById(req.params.character).lean() 
                req.body.user = req.user.id
                await ChooseServant.findOneAndUpdate({servantIndex: req.body.servantIndex})
                character = await Servant.findOneAndUpdate({ _id: req.params.character }, req.body, {
                    new: true,
                    runValidators: true,
                  })
        res.redirect('/user/servants')
    }
        }catch(err){
            console.log(err)
            res.render('error')
        }
    },
    deleteServant: async (req, res) => {
        try{
            let post = await Servant.findByIdAndDelete({_id: req.params.select })
            console.log(post)

            res.redirect('/user/servants')
        }catch(err){
            res.render('error')
        }
    },
    chooseServant: async (req, res)=>{
    try{
        await ChooseServant.findOneAndUpdate(req.body)
        res.redirect(`/user/edit/${req.params.servant}`)
    }catch(err){
        res.render('error')
    }
},
    chooseCharacter:  async (req, res)=>{
        try{
            req.body.user = req.user.id
            await ChooseServant.findOneAndUpdate(req.body)
            res.redirect('/user/add')
        }catch(err){
            res.render('error')
        }
    },
    chooseSimulator: async (req, res)=>{
        try{
            await ChooseServant.findOneAndUpdate(req.body)
            res.redirect(`/user/simulator`)
        }catch(err){
            res.render('error')
        }
    },
}


   