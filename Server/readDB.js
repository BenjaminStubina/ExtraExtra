const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://benjaminstubina:Maplestory2%21@extraextra.o9rzwcs.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);
const dbName = "ExtraExtra";
const colName = "Articles"

module.exports = async function (publication) {
    const db = client.db(dbName);

    // Check if the user has selected the 'all' option or an individual news publisher and return the list of articles from the DB sorted from newest to oldest
    if (publication === 'all') {
        const allQuery = await db.collection(colName).find().sort({posted_time:-1}).toArray();
        return JSON.stringify(allQuery);
    }
    else {
        const publicationQuery = await db.collection(colName).find({publication:publication}).sort({posted_time:-1}).toArray();
        return JSON.stringify(publicationQuery);
    }
};

