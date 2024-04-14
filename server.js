import express from "express";
import path from "path";
import materiaRouter from "./routes/materia.js"
import profesorRoutes from "./routes/profesor.js"
import stackRoutes from "./routes/stack.js"
import productosRouter from "./routes/productos.js"

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(express.static('views'))

app.get('/', (req, res) => {
    res.readFile('./views/index.html', {root: path.resolve()})
})

app.use('/materia', materiaRouter)
app.use('/profesor', profesorRoutes)
app.use('/stack', stackRoutes)
app.use('/productos', productosRouter)

app.use((req, res, next) => {
    res.status(404).send("Página no encontrada.");
});

app.listen(3000, () => console.log('Servidor corriendo en el puerto 3000.'))