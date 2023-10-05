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
            "link_url": "Tests", //article.link_url
            "image_url": "Test23", //article.image_url
            "posted_time": 123, //article.posted_time
            "post_id": 123, //article.post_id
            "publication": "Test23" //key
        }

        // if post_id of newEntry is already in the DB skip the following line of code:
        // Return list of all post_id in the DB (store is set for linear time search)
        if (idSet !includes article.post_id) {
            const addEntry = await col.insertOne(newEntry)
        }
    } catch (err) {
        console.error(err);
    }
}