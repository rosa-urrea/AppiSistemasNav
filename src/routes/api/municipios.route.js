'use strict'

const express = require('express')
const router = express.Router()
const municipios = require('../../controllers/municipios.controller')
const validator = require('express-validation')
const auth = require('../../middlewares/authorization')

router.get('/', municipios.GetMunicipios)
router.get('/id', municipios.GetMunicipioById)
router.post('/create', municipios.InsertMunicipio)
router.put('/update', municipios.UpdateMunicipio)

module.exports = router
