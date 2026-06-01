import express from "express";

const port = 8080;
const app = express();

app.get('/mateus', (req, res) => {
    res.send('<h1>Mateus</h1>')
});

app.listen(port, () => console.log("O server está on!"));