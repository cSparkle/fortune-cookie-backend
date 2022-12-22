const cors = require('cors');
const express = require('express');

const app = express();
app.use(cors())

app.get('', (req, res) => {
    return res.send({
        message: "oh hi"
    })
})

app.get('/getFortune', (req, res) => {
    return res.send({
        fortune: "some fortune"
    })
})

app.listen(3000, () => {
    console.log("Server running on port 3000...");
});