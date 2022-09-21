const fetch = (...args) =>
import('node-fetch').then(({default: fetch}) => fetch(...args))
const Servant = require('../models/Servant')
const cloudinary = require("../middleware/cloudinary");
const Choose = require('../models/Choose')
const Choose1 = require('../models/Choose1')
const Choose2 = require('../models/Choose2')
const Choose3 = require('../models/Choose3')
const Skill1 = require('../models/Skill1')
const Skill2 = require('../models/Skill2')
const Skill3 = require('../models/Skill3')
const AppendSkill1 = require('../models/AppendSkill1.js')
const AppendSkill2 = require('../models/AppendSkill2.js')
const AppendSkill3 = require('../models/AppendSkill3.js')
const ChooseServant = require('../models/ChooseServant.js')


module.exports={
    getHome: async(req,res) =>{
        try{
            const data = await Servant.find({userId:req.user.id}).lean()
            const data1 = await Choose.find({userId:req.user.id}).lean()
            const data2 = await Choose1.find({userId:req.user.id}).lean()
            const data3 = await Choose2.find({userId:req.user.id}).lean()
            const data4 = await Choose3.find({userId:req.user.id}).lean()
            const skill1 = await Skill1.find({userId:req.user.id}).lean()
            const skill2 = await Skill2.find({userId:req.user.id}).lean()
            const skill3 = await Skill3.find({userId:req.user.id}).lean()
            const appendskill1 = await AppendSkill1.find({userId:req.user.id}).lean()
            const appendskill2 = await AppendSkill2.find({userId:req.user.id}).lean()
            const appendskill3 = await AppendSkill3.find({userId:req.user.id}).lean()
            res.render('authed/home.ejs', {appendskill3: appendskill3 ,appendskill2: appendskill2 ,appendskill1: appendskill1, skill1: skill1, skill2: skill2, skill3: skill3, info1: data1,info2: data2,info3: data3,info4: data4, info: data, name: req.user.firstName, userID: req.user.id})
        }catch(err){
            console.error(err)
        } 
    },
    getServants: async(req,res) =>{
        try{
            const data = await Servant.find({userId:req.user.id}).lean()
                .populate('user')
                .sort({ createdAt: 'desc' })
                .lean()
            const data1 = await Choose.find({userId:req.user.id}).lean()
            const data2 = await Choose1.find({userId:req.user.id}).lean()
            const data3 = await Choose2.find({userId:req.user.id}).lean()
            const data4 = await Choose3.find({userId:req.user.id}).lean()
            const skill1 = await Skill1.find({userId:req.user.id}).lean()
            const skill2 = await Skill2.find({userId:req.user.id}).lean()
            const skill3 = await Skill3.find({userId:req.user.id}).lean()
    
            res.render('authed/servants.ejs', {skill1: skill1, skill2: skill2, skill3: skill3, info1: data1, info2: data2, info3: data3, info4: data4, info: data, userID: req.user.id , userName: req.user.displayName, userImage: req.user.image})
        }catch(err){
            console.error(err)
        } 
    },
    getAdd: async(req,res) =>{
        try{
        const data = await Choose.find({userId:req.user.id}).lean()
        const skill1 = await Skill1.find({userId:req.user.id}).lean()
        const skill2 = await Skill2.find({userId:req.user.id}).lean()
        const skill3 = await Skill3.find({userId:req.user.id}).lean()
        const appendskill1 = await AppendSkill1.find({userId:req.user.id}).lean()
        const appendskill2 = await AppendSkill2.find({userId:req.user.id}).lean()
        const appendskill3 = await AppendSkill3.find({userId:req.user.id}).lean()
        const chooseServant = await ChooseServant.find({userId:req.user.id}).lean()
        res.render('authed/add.ejs', {choose: chooseServant ,info1: data, appendskill3: appendskill3 ,appendskill2: appendskill2 ,appendskill1: appendskill1 , skill1: skill1,skill2: skill2,skill3: skill3})
        }catch(err){
            console.error(err)
        } 
    },
    getSimulator: async(req,res) =>{
        try{
            const data = await Servant.find({userId:req.user.id}).lean()
            const data1 = await Choose.find({userId:req.user.id}).lean()
            const data2 = await Choose1.find({userId:req.user.id}).lean()
            const data3 = await Choose2.find({userId:req.user.id}).lean()
            const data4 = await Choose3.find({userId:req.user.id}).lean()
            const skill1 = await Skill1.find({userId:req.user.id}).lean()
            const skill2 = await Skill2.find({userId:req.user.id}).lean()
            const skill3 = await Skill3.find({userId:req.user.id}).lean()
            res.render('authed/simulator.ejs', {info: data,skill1: skill1,skill2: skill2,skill3: skill3,info1: data1, info2: data2, info3: data3, info4: data4, userID: req.user.id})
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
    postServants: async (req,res) =>{
        try{
    let response = await fetch(`https://api.atlasacademy.io/nice/NA/servant/search?name=${req.body.name}&rarity=${req.body.rarity}&className=${req.body.className}&gender=${req.body.gender}`)
    let data = await response.json()
        req.body.servant = {collectionNo: data[0].collectionNo, lvMax: data[0].lvMax, atkMax: data[0].atkMax, hpMax: data[0].hpMax, cost: data[0].cost, id: data[0].id, starAbsorb: data[0].starAbsorb, starGen: data[0].starGen, attribute: data[0].atrribute, instantDeathChance: data[0].instantDeathChance, cards: data[0].cards, profile: data[0].profile, ascensionAdd: data[0].ascensionAdd, noblePhantasms: data[0].noblePhantasms}
        req.body.user = req.user.id
        await ChooseServant.findOneAndUpdate({servantIndex: req.body.servantIndex})
        await Servant.create(req.body)
        res.redirect('/user/servants')
    }catch(err){
        console.log(err)
        res.render('authed/error')  
        }
    },
    getTemplate: async (req,res) =>{
        try{
            const data1 = await Choose.find({userId:req.user.id}).lean()
            const data2 = await Choose1.find({userId:req.user.id}).lean()
            const data3 = await Choose2.find({userId:req.user.id}).lean()
            const data4 = await Choose3.find({userId:req.user.id}).lean()
            const skill1 = await Skill1.find({userId:req.user.id}).lean()
            const skill2 = await Skill2.find({userId:req.user.id}).lean()
            const skill3 = await Skill3.find({userId:req.user.id}).lean()
            const appendskill1 = await AppendSkill1.find({userId:req.user.id}).lean()
            const appendskill2 = await AppendSkill2.find({userId:req.user.id}).lean()
            const appendskill3 = await AppendSkill3.find({userId:req.user.id}).lean()

            const info = await Servant.findById(req.params.id).populate('user').lean()
            if (!info) {
                return res.render('authed/error')  
              }
          
              if (info.user._id != req.user.id && info.status == 'private') {
                res.render('authed/error')
              } else {
                res.render('authed/template.ejs', {appendskill3: appendskill3 ,appendskill2: appendskill2 ,appendskill1: appendskill1 , skill1: skill1,skill2: skill2,skill3: skill3,info1: data1, info2: data2, info3: data3, info4: data4, info})
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
            const data1 = await Choose.find({userId:req.user.id}).lean()
            const data2 = await Choose1.find({userId:req.user.id}).lean()
            const data3 = await Choose2.find({userId:req.user.id}).lean()
            const data4 = await Choose3.find({userId:req.user.id}).lean()
        res.render('authed/view', {info1: data1, info2: data2, info3: data3, info4: data4,info: data, userName: req.user.displayName, userImage: req.user.image})
    
      } catch (err) {
        console.error(err)
        res.render('authed/error')
      }
    },
    getEditPage: async (req,res)=>{
        try{
            const data = await Servant.findById(req.params.servant).populate('user').lean()
            const data1 = await Choose.find({userId:req.user.id})
            const skill1 = await Skill1.find({userId:req.user.id}).lean()
            const skill2 = await Skill2.find({userId:req.user.id}).lean()
            const skill3 = await Skill3.find({userId:req.user.id}).lean()
            const appendskill1 = await AppendSkill1.find({userId:req.user.id}).lean()
            const appendskill2 = await AppendSkill2.find({userId:req.user.id}).lean()
            const appendskill3 = await AppendSkill3.find({userId:req.user.id}).lean()
            const chooseServant = await ChooseServant.find({userId:req.user.id}).lean()
            if (!data) {
                return res.render('authed/error')  
              }
              if (data.user._id != req.user.id) {
                res.render('authed/error')
              } else {
                res.render('authed/edit.ejs', {data, choose: chooseServant ,info1: data1, appendskill3: appendskill3 ,appendskill2: appendskill2 ,appendskill1: appendskill1 , skill1: skill1,skill2: skill2,skill3: skill3})
              }
        }catch(err){
            res.render('authed/error')
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
            res.render('authed/error')
        }
    },
    deleteServant: async (req, res) => {
        try{
            let post = await Servant.findByIdAndDelete({_id: req.params.select })
            console.log(post)

            res.redirect('/user/servants')
        }catch(err){
            res.render('authed/error')
        }
    },
    chooseServant: async (req, res)=>{
    try{
        await ChooseServant.findOneAndUpdate(req.body)
        res.redirect(`/user/edit/${req.params.servant}`)
    }catch(err){
        res.render('authed/error')
    }
},
    chooseCharacter:  async (req, res)=>{
        try{
            req.body.user = req.user.id
            await ChooseServant.findOneAndUpdate(req.body)
            res.redirect('/user/add')
        }catch(err){
            res.render('authed/error')
        }
    },

}


   