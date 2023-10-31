const { Router } = require('express')
const { Dog, Temperaments } = require('../db.js')
require('dotenv').config()
const { axios } = require('axios')

const router = Router();

//solicitud a mi API con toda la info que necesito
//lo guardo en una constante
const infoApi = async () => { //mi solicitud va a ser asincrona, por lo que me va a devolver un objeto
    try {
        const {data} = await axios.get(`https://api.thedogapi.com/v1/breeds`); //la info me va a llegar en un .data
        const {arrDogs} = data.map(i => { //mapeo la respuesta de mi API para qudarme solo con la info que necesito
            i.pesoArr = i.weight.metric.split('-')
        })
    }
    catch {

    }

}