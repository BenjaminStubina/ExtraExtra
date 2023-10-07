const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://benjaminstubina:Maplestory2%21@extraextra.o9rzwcs.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);
const dbName = "ExtraExtra";
const colName = "Articles"

module.exports = async function (publication) {
    const db = client.db(dbName);
    if (publication === 'all') {
        const allQuery = await db.collection(colName).find().sort({posted_time:-1}).toArray();
        return allQuery
    }
    else {
        const publicationQuery = await db.collection(colName).find({publication:publication}).sort({posted_time:-1}).toArray();
        return JSON.stringify(publicationQuery);
    }
};

