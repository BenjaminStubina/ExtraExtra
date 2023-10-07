const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://benjaminstubina:Maplestory2%21@extraextra.o9rzwcs.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);

module.exports = async function () {
    try {
        await client.connect();
        console.log('Connected to DB Successful!')
    } catch (err) {
        console.error(err);
    }
}