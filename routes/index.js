const { request } = require('express')
const express = require('express')
const router = express.Router()
const homeController = require('../controllers/not-authed')
const { ensureAuth, ensureGuest } = require('../middleware/auth')
const Servant = require('../models/Servant')

router.get('/', ensureGuest ,homeController.getHome)

router.get('/gameplay' ,ensureGuest , homeController.getGameplay)



module.exports = router
