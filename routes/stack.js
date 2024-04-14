import express from "express";

const router = express.Router();

const tecnologias = [
    "JavaScript",
    "Laravel",
    "Express",
    "Node.js",
    "PHP"
];

router.get('/:tecnologia', (req, res) => {
    const tecnologia = req.params.tecnologia
    if (tecnologias.includes(tecnologia)) {
        res.send("<p>Donde te dejo el CV?</p>");
    } else {
        res.status(404).send("<p>A leer la documentacion entonces..</p>");
    }
})

export default router