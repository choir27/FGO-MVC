const { request } = require('express')
const express = require('express')
const router = express.Router()
const homeController = require('../controllers/index')
const { ensureAuth, ensureGuest } = require('../middleware/auth')
const Servant = require('../models/Servant')

router.get('/servants', ensureAuth, homeController.getServants)

router.get('/add', ensureAuth, homeController.getAdd)

router.get('/addServant', ensureAuth, homeController.getAddServant)

router.get('/simulator/chooseTeam', ensureAuth, homeController.getChooseTeam)


router.get('/simulator', ensureAuth, homeController.getSimulator)

router.get('/gameplay', ensureAuth, homeController.getGameplay)

router.get('/', ensureAuth , homeController.getHome)

router.post('/servants', homeController.postServants)

router.put('/choose/:servant', homeController.chooseServant)

router.get('/simulator/team', ensureAuth , homeController.getTeam)

router.put('/details/:character', homeController.editServant)

router.put('/choose/your/servant', homeController.chooseCharacter)

router.delete('/delete/:select', homeController.deleteServant)

router.get('/edit/:servant', ensureAuth, homeController.getEditPage)

router.get('/edit/your/:post', ensureAuth, homeController.getEditServantPage)

router.get('/:id', ensureAuth , homeController.getTemplate)

router.get('/id/:name', ensureAuth, homeController.getUserPage)

router.post('/choose/your/team', homeController.chooseTeam)


module.exports = router
