const express = require('express');
const Fortune = require('./models/fortune');
require('./db/mongoose');

const app = express();
const port = process.env.PORT || 3000;

// Automagically parses incoming JSON to objects we can use
app.use(express.json());

// GET random fortune
app.get("/fortunes", async (req, res) => {
    const totalFortunes = await Fortune.estimatedDocumentCount();

    const randomNumber = Math.floor(Math.random() * totalFortunes);
    Fortune.findOne().skip(randomNumber).then((fortune) => {
        console.log(fortune);
        res.send(fortune);
    }).catch((err) => {
        res.status(500).send();
    })
});

// GET fortune by ID
app.get("/fortunes/:id", (req, res) => {
    const _id = req.params.id;
    Fortune.findById(_id).then((fortune) => {
        if (!fortune) {
            return res.status(404).send();
        }

        res.send(fortune);
    }).catch((err) => {
        res.status(500).send();
    });
});


app.listen(port, () => {
    console.log(`Server up on port ${port}`)
});