const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://benjaminstubina:Maplestory2%21@extraextra.o9rzwcs.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);
const dbName = "ExtraExtra";
const colName = "Articles"

module.exports = async function (postObjects) {
    const db = client.db(dbName);
    const col = db.collection(colName)
    // Searching through the DB for all of the post_ids and adding them to a Set so we can filter through the Set later when adding new articles to check if the article already exists in the DB
    const idQuery = await db.collection(colName).distinct('post_id')
    const idSet = new Set();
    idQuery.forEach((id) => {
        idSet.add(id);
    })
    // Checking to see if the post_id of the article is already in the DB - if it isnt, we add the article to the DB
    postObjects.map(async (post) => {
        if (!idSet.has(post.id)) {
            let newEntry = {
                "link_url": post.link_url,
                "image_url": post.image_url,
                "posted_time": post.posted_time,
                "post_id": post.id,
                "publication": post.publication
            }
            await col.insertOne(newEntry)
            console.log('Post has been added to the DB')
        } 
        else {
            console.log("Post is already in DB")
        }
    })
}
