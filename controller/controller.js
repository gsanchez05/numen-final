const req = require('express/lib/request');
const res = require('express/lib/response');
const { Pais } = require('../models/model');
/*const { default: axios } = require('axios');*/

const { check, validationResult, body } = require('express-validator');

const vistaIndex = (req, res) => {
    res.render('index', { title: 'Express' });
}

const vistaPaises = async (req, res) => {

    const pais = await Pais.find()
    res.json({ pais })
}

const vistaPais = async (req, res) => {
    const pais = await Pais.findById(req.params.id)
    res.json({ pais })
}

const crearPais = async (req, res) => {
    console.log(validationResult(req))
    console.log(req.body)

    const error = validationResult(req)

    try {
        if (error.isEmpty()) {
            const { country, alpha2, alpha3, uncode } = req.body
            const pais = new Pais({ country, alpha2, alpha3, uncode });
            await pais.save()
            res.status(201).json({ pais, msg: "Pais Agregado" })
        } else {
            res.status(400).json(error)
        }   
    } catch (err) {
        res.status(400).json({ msg: "Este pais ya existe, por favor ingresa uno diferente", err })
    }
}

const editarPais = async (req, res) => {
    const { id } = req.params
    const body = req.body
    console.log(req.body)
    await Pais.findByIdAndUpdate(id, req.body)
    res.status(201).json(body)
}

const borrarPais = async (req, res) => {
    const pais = await Pais.findByIdAndDelete(req.params.id)
    res.json({ msg: "Se ha borrado el pais", pais })
}

module.exports = { vistaIndex, vistaPaises, vistaPais, crearPais, editarPais, borrarPais}