const { MongoClient } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'fortune-cookie';

MongoClient.connect(connectionURL, {
    useNewUrlParser: true
}, (error, client) => {
    if (error) {
        return console.error("Unable to connect to DB: ", error);
    }

    const db = client.db(databaseName);
    const fortunes = db.collection('fortunes');

    fortunes.aggregate(
        [
            { $sample: { size: 1 } }
        ]
    ).next((err, fortune) => {
        if (!err) {
            return fortune;
        }
    })

    // db.collection('words').deleteOne({
    //     word: "shook"
    // })

    // db.collection('fortunes').insertOne({
    //     phrase: "You're fucked."
    // })

    // db.collection('words').insertOne({
    //     category: "millennial",
    //     pronunciation: "♡ Live Laugh Love ♡",
    //     word: "lit"
    // })

    // db.collection('words').updateOne({
    //     word: "adulting"
    // }, {
    //     $set: {
    //         pronunciation: "I'll put it on my credit card."
    //     }
    // })
})