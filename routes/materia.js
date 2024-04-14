import express from "express";
import { promises } from "fs";

const router = express.Router();

router.get('/', (req, res) => {
    promises.readFile('./models/materia.json')
    .then(data => {
        const materias = JSON.parse(data);
        res.status(200).json(materias)
    })
    .catch(error =>{
        res.status(400).json({err: 404, message: error.message})

    })
})

export default router