const { request } = require('express')
const express = require('express')
const router = express.Router()
const homeController = require('../controllers/index')
const { ensureAuth, ensureGuest } = require('../middleware/auth')
const Servant = require('../models/Servant')

router.get('/servants', ensureAuth, homeController.getServants)

router.get('/add', ensureAuth, homeController.getAdd)

router.get('/simulator', ensureAuth, homeController.getSimulator)

router.get('/gameplay', ensureAuth, homeController.getGameplay)

router.get('/api/:servants', ensureAuth, homeController.getAPI)

router.get('/:id', ensureAuth , async (request,response) =>{
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
    })

  router.get('/id/:name', ensureAuth, async (req,res)=>{
    try{
      const data = await Servant.find({user: req.params.name, status: 'public'})
        .populate('user')
        .lean()
    res.render('authed/view', {info: data, userName: req.user.displayName, userImage: req.user.image})

  } catch (err) {
    console.error(err)
    res.render('authed/error')
  }
    })

router.get('/', ensureAuth , homeController.getHome)

router.post('/servants', homeController.postServants)


module.exports = router
