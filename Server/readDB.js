const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://benjaminstubina:Maplestory2%21@extraextra.o9rzwcs.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);
const dbName = "ExtraExtra";
const colName = "Articles"

module.exports = async function (publication) {
    const db = client.db(dbName);
    // Need to define a sorting function based on posted_time
    if (publication === 'all') {
        const allQuery = await db.collection(colName).find().toArray();
        return allQuery
    }
    else {
        const publicationQuery = await db.collection(colName).find({publication:publication}).toArray();
        console.log(publicationQuery);
        return publicationQuery;
    }
};

