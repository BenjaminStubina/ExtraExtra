const express = require('express');
const cors = require('cors');
const axios = require('axios');
const fs = require('fs');
const APILinks = JSON.parse(fs.readFileSync('./data/APIData.json'));
const PUBLICATIONS = require('./publications.js');
const updateDB = require('./updateDB.js');
const connectDB = require('./connectDB.js');
const readDB = require('./readDB.js');
const app = express();

app.use(express.json());
app.use(cors());

// This can stay the same?
app.get('/', (req, res) => {
    const { publication } = req.query;
    const data = readDB(publication);
    res.json(data);
})

// Update switch case logic to return queries from DB
// 1. GET request from front end will submit publication in the query
// 2. Query through DB and return all posts that match the query request
// 2.5. Organize posts based on posted_time value
// 3. Include option to query for ALL publications simultaneously
// const fetchData = (publication) => {
//     switch(publication) {
//         case(PUBLICATIONS.GLOBAL_TORONTO): {
//             const data = fs.readFileSync('./data/global.json');
//             return JSON.parse(data);
//         }
//         case(PUBLICATIONS.GLOBE_AND_MAIL): {
//             const data = fs.readFileSync('./data/globe.json');
//             return JSON.parse(data);
//         }
//         case(PUBLICATIONS.TORONTO_LIFE): {
//             const data = fs.readFileSync('./data/tlife.json');
//             return JSON.parse(data);
//         }
//         case(PUBLICATIONS.WALRUS): {
//             const data = fs.readFileSync('./data/walrus.json');
//             return JSON.parse(data);
//         }
//         case(PUBLICATIONS.CANADALAND): {
//             const data = fs.readFileSync('./data/cland.json');
//             return JSON.parse(data);
//         }
//         case(PUBLICATIONS.NOW_TORONTO): {
//             const data = fs.readFileSync('./data/now.json');
//             return JSON.parse(data);
//         }
//     }
// }

const pullDataAndSave = async () => {

    const publicationKeys = Object.keys(APILinks.APILinks[0])
    const pullPromises = publicationKeys.map(async pubKey => {
        const link = APILinks.APILinks[0][pubKey]
        const res = await axios.get(link)
        return res?.data.linkinbio_posts.map((postData) => {
            return (
                {
                    ...postData, publication:pubKey
                }
            )
        })
    })

const postObjects = await Promise.all(pullPromises)

await updateDB(postObjects.flat(1))
}
pullDataAndSave();

// Function automatically runs every 2 hours to fetch new articles
const autoAPICall = setInterval(function() {
    pullDataAndSave();
}, 7200000)

app.listen(8080, () => {
    console.log('Listening on port: 8080')
    connectDB();
})