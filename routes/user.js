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

router.get('/', ensureAuth , homeController.getHome)

router.post('/servants', homeController.postServants)

router.get('/edit/:servant', ensureAuth, homeController.editPage)

router.get('/:id', ensureAuth , homeController.getTemplate)

router.get('/id/:name', ensureAuth, homeController.getUserPage)




module.exports = router
