import express from "express";
import { promises } from "fs";

const router = express.Router();

router.get('/', (req, res) =>{
    promises.readFile('./models/productos.json')
    .then(data => {
        const productos = JSON.parse(data);
        const minimo = parseFloat(req.query.minimo);
        const maximo = parseFloat(req.query.maximo);
        
        let filtrados = productos;
        if(minimo){
            filtrados = filtrados.filter(p => p.precio >= minimo);
        }
        
        if(maximo){
            filtrados = filtrados.filter(p => p.precio <= maximo);
        }

        res.status(200).json(filtrados)
    })
    .catch(error => {
        res.status(400).json({err:404, message: error.message})
    })
})

router.get("/:id", (req, res) =>{
    promises.readFile('./models/productos.json')
    .then(data => {
        const productos = JSON.parse(data);
        const producto = productos.find(p => p.id == req.params.id);
        if(producto){
            res.status(200).json(producto);
        } else {
            res.status(404).json({error: 404, message: "producto no encontrado"});
        }
    })
    .catch(error =>{
        res.status(404).json({err: 404, message: error.message});
    })
})

export default router