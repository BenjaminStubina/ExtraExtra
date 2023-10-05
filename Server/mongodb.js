const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://benjaminstubina:Maplestory2%21@extraextra.o9rzwcs.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);
const dbName = "ExtraExtra";
const colName = "Articles"

module.exports = async function () {

    try {
        await client.connect();
        const db = client.db(dbName);
        const col = db.collection(colName)

        let newEntry = {
            "link_url": "Tests",
            "image_url": "Test23",
            "posted_time": 123,
            "post_id": 123,
            "publication": "Test23"
        }

        const p = await col.insertOne(newEntry)
    } catch (err) {
        console.error(err);
    }
}