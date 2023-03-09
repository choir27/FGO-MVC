const fetch = (...args) =>
import('node-fetch').then(({default: fetch}) => fetch(...args))
const Servant = require('../models/Servant')
const cloudinary = require("../middleware/cloudinary");
const ChooseServant = require('../models/ChooseServant.js')
const Character = require('../models/Character')
const Ascension = require('../models/Ascension')
const Skill = require('../models/Skill')
const Team = require('../models/Team')
const ServantFace = require('../models/ServantFace')

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
            const ascension = await Ascension.find({userId:req.user.id}).lean()
    
            res.render('authed/add.ejs', {ascension: ascension ,choose: chooseServant, info: data})
        }catch(err){
            res.render('error')  
            console.error(err)
        } 
    },

    getAddServant: async(req,res) =>{
        try{

            const data = await Servant.find({userId:req.user.id}).lean()
            const chooseServant = await ChooseServant.find({userId:req.user.id}).lean()
            const skill = await Skill.find({userId:req.user.id}).lean()
            const ascension = await Ascension.find({userId:req.user.id}).lean()
    
            res.render('authed/addServant.ejs', {skill: skill ,ascension: ascension ,choose: chooseServant, info: data})
        }catch(err){
            res.render('error')  
            console.error(err)
        } 
    },
    getSimulator: async(req,res) =>{
        try{
            const data = await Character.find({userId:req.user.id}).lean()
             const team = await Team.find({userId:req.user.id}).lean()
            res.render('authed/simulator.ejs', {data: data, team: team ,userID: req.user.id})
        }catch(err){
            res.render('error')  
            console.error(err)
        } 
    },
    getEditTeam: async(req,res)=>{
        try{
            const ascension = await Ascension.find({userId:req.user.id}).lean()
            const info = await Character.find({userId:req.user.id}).lean()
            const team = await Team.find({userId: req.user.id}).lean()
            res.render('authed/editTeam.ejs', {userID: req.user.id, info: info, ascension: ascension, team: team})
            
        }catch(err){
            res.render('error')
        }
    },
    getCreateTeam: async(req, res)=>{
        try{
            const info = await Character.find({userId:req.user.id}).lean()
            const ascension = await Ascension.find({userId:req.user.id}).lean()
            res.render('authed/createTeam.ejs', {ascension: ascension , info: info, userID: req.user.id})
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
    let res =  await fetch('https://api.atlasacademy.io/export/JP/nice_servant_lore_lang_en.json')
        let data = await res.json()
        for(let i = 0; i < data.length-1 ;i++){

                if(data[i].extraAssets.faces.ascension[1]){
                    const asc1= await cloudinary.uploader.upload(data[i].extraAssets.faces.ascension[1]);
                    const asc2= await cloudinary.uploader.upload(data[i].extraAssets.faces.ascension[2]);
                    const asc3= await cloudinary.uploader.upload(data[i].extraAssets.faces.ascension[3]);
                    const asc4= await cloudinary.uploader.upload(data[i].extraAssets.faces.ascension[4]);

                    const cmd1= await cloudinary.uploader.upload(data[i].extraAssets.commands.ascension[1]);
                    const cmd2= await cloudinary.uploader.upload(data[i].extraAssets.commands.ascension[2]);
                    const cmd3= await cloudinary.uploader.upload(data[i].extraAssets.commands.ascension[3]);

                            req.body.face ={
                                1: asc1.secure_url,
                                2: asc2.secure_url,
                                3: asc3.secure_url,
                                4: asc4.secure_url,
                            }

                            req.body.command = {
                                1: cmd1.secure_url,
                                2: cmd2.secure_url,
                                3: cmd3.secure_url,
                            }

                        req.body.cloudinaryId = {
                                "face1": asc1.public_id,
                                "face2": asc2.public_id,
                                "face3": asc3.public_id,
                                "face4": asc4.public_id,
                                "cmd1": cmd1.public_id,
                                "cmd2": cmd2.public_id,
                                "cmd3": cmd3.public_id,
                        }

                        ServantFace.create(req.body)

                }else{
                  console.log(`${data[i].name} has no pics`)
                }


              }

              res.redirect('/user/servants')

                          // let data = await Servant.find({userId:req.user.id}).lean()
        
            //     req.body.servant = data[req.body.index].servant[0]
            //     req.body.user = req.user.id
            //     await ChooseServant.findOneAndUpdate({servantIndex: req.body.servantIndex})
            //     await Character.create(req.body)
            //     res.redirect('/user/servants')
           
        }
            catch(err){
        console.log(err)
        res.render('error')  
        }
    },
    getTemplate: async (req,res) =>{
        try{
            const info = await Character.findById(req.params.id).populate('user').lean()
            if (!info) {
                return res.render('error')  
              }
          
              if (info.user._id != req.user.id && info.status == 'private') {
                res.render('error')
              } else {
                const data = await Servant.find({userId:req.user.id}).lean()
                const chooseServant = await ChooseServant.find({userId:req.user.id}).lean()
                const skill = await Skill.find({userId:req.user.id}).lean()
                const ascension = await Ascension.find({userId:req.user.id}).lean()
        
                res.render('authed/template.ejs', {skill: skill ,ascension: ascension ,choose: chooseServant, data: data, info})
              }
        }
        catch(err){
            console.error(err)
          }
    },
    getUserPage: async (req,res)=>{
        try{
          const data = await Character.find({user: req.params.name, status: 'public'})
            .populate('user')
            .lean()
            const info = await Servant.find({userId:req.user.id}).lean()
            const chooseServant = await ChooseServant.find({userId:req.user.id}).lean()
            const skill = await Skill.find({userId:req.user.id}).lean()
            const ascension = await Ascension.find({userId:req.user.id}).lean()
           
            res.render('authed/view.ejs', {userName: req.user.displayName, skill: skill ,ascension: ascension ,choose: chooseServant, data: data, info: info})
    
      } catch (err) {
        console.error(err)
        res.render('authed/error')
      }
    },
    getEditPage: async (req,res)=>{
        try{
            const data = await Character.findById(req.params.servant).populate('user').lean()
            if (!data) {
                return res.render('error.ejs')  
              }
              if (data.user._id != req.user.id) {
                res.render('error.ejs')
              } else {
                const info = await Servant.find({userId:req.user.id}).lean()
                const chooseServant = await ChooseServant.find({userId:req.user.id}).lean()
                const ascension = await Ascension.find({userId:req.user.id}).lean()
                res.render('authed/edit.ejs', {data: info,ascension: ascension ,choose: chooseServant, info: data})
            }
        }catch(err){
            res.render('error.ejs')
        }
    },
    getEditServantPage: async(req,res)=>{
        try{
            const data = await Character.findById(req.params.post).populate('user').lean()
                const info = await Servant.find({userId:req.user.id}).lean()
                const chooseServant = await ChooseServant.find({userId:req.user.id}).lean()
                const skill = await Skill.find({userId:req.user.id}).lean()
                const ascension = await Ascension.find({userId:req.user.id}).lean()
                res.render('authed/editServant.ejs', {data: info, skill: skill ,ascension: ascension ,choose: chooseServant, info: data})
    
        }catch(err){
            res.render('error.ejs')
        }
    },
    editServant: async (req,res)=>{
        try{
            let character = await Character.findById(req.params.character).lean() 
            const info = await Servant.find({userId:req.user.id}).lean()
            req.body.user = req.user.id
            req.body.servant = info[req.body.index].servant
            await ChooseServant.findOneAndUpdate({servantIndex: req.body.servantIndex})
            character = await Character.findOneAndUpdate({ _id: req.params.character }, req.body, {
                new: true,
                runValidators: true,
              })
    res.redirect('/user/servants')
        }
        catch(err){
            console.log(err)
            res.render('error')
        }    
    },
    deleteServant: async (req, res) => {
        try{
            let post = await Character.findByIdAndDelete({_id: req.params.select })

            res.redirect('/user/servants')
        }catch(err){
            res.render('error')
        }
    },
    chooseServant: async (req, res)=>{
    try{
        await ChooseServant.findOneAndUpdate({servantIndex: req.body.servantIndex})
        res.redirect(`/user/edit/your/${req.params.servant}`)
    }catch(err){
        res.render('error')
    }
},
    chooseCharacter:  async (req, res)=>{
        try{
            await ChooseServant.findOneAndUpdate(req.body)
            res.redirect('/user/addServant')
        }catch(err){
            res.render('error')
        }
    },
    chooseTeam: async (req,res)=>{
        try{
            req.body.user = req.user.id 
            await Team.create(req.body)
            res.redirect('/user/simulator')
        }catch(err){
            console.log(err)
            res.render('error')
        }
    },
    editTeam: async (req,res)=>{
try{
req.body.user = req.user.id 
await Team.find({userId: req.user.id})
await Team.findOneAndUpdate({index1: req.body.index1,
index2: req.body.index2,
index3: req.body.index3
})
res.redirect('/user/simulator')

}
catch(err){
    console.log(err)
    res.render('error')
}
    },
    getTeam: async (req,res)=>{
        try{
            const team = await Team.find({userId: req.user.id}).lean()
            const info = await Servant.find({userId:req.user.id}).lean()
            const skill = await Skill.find({userId:req.user.id}).lean()
            const ascension = await Ascension.find({userId:req.user.id}).lean()
            res.render('authed/team.ejs', {team: team, info: info, skill: skill, ascension: ascension,userID: req.user.id })
        }catch(err){
            res.render('error')
        }
    },
    getBattle: async (req,res)=>{
        try{
            const team = await Team.find({userId: req.user.id}).lean()
            const info = await Servant.find({userId:req.user.id}).lean()
            const skill = await Skill.find({userId:req.user.id}).lean()
            const ascension = await Ascension.find({userId:req.user.id}).lean()
            res.render('authed/battle.ejs', {team: team, info: info, skill: skill, ascension: ascension,userID: req.user.id })
        }catch(err){
            res.render('error')
        }
    }
}


   