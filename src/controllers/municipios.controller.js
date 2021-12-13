'use strict'
const httpStatus = require('http-status')
const Municipios = require('../models/estados.model')

exports.InsertMunicipio = async (req, res, next) => {
  try {

    const body = req.body
    const municipios = new Municipios(body)
    const savedItem = await municipios.save()
    res.status(httpStatus.CREATED)
    res.send({
      success: true,
      message: 'Municipio creado!'
    })
  } catch (error) {
    return next(error)
  }
}

exports.UpdateMunicipio = async (req, res, next) => {
  try {

    const body = req.body
    let municipios = await Municipios.findOne({ _id: body._id })
    Object.assign(municipios, body)
    await municipios.save()
    res.status(httpStatus.CREATED)
    res.send({
      success: true,
      message: 'Municipio actualizado!'
    })
  } catch (error) {
    return next(error)
  }
}

exports.GetMunicipioById = async (req, res, next) => {
  const user = req.user;
  try {
    const body = req.body
    const municipios = await Municipios.findOne({ _id: body._id })

    res.status(httpStatus.CREATED)
    res.send({
      success: true,
      message: '',
      data: {
        municipios
      }
    })
  } catch (error) {
    return next(error)
  }
}

exports.GetMunicipios = async (req, res, next) => {
  const user = req.user;
  try {

    const municipios = await Municipios.find();

    res.status(httpStatus.CREATED)
    res.send({
      success: true,
      message: '',
      data: {
        municipios
      }
    })
  } catch (error) {
    return next(error)
  }
}


