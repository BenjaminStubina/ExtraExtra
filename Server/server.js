const express = require('express');
const cors = require('cors');
const axios = require('axios');
const fs = require('fs');
const APILinks = JSON.parse(fs.readFileSync('./data/APIData.json'));
const updateDB = require('./updateDB.js');
const connectDB = require('./connectDB.js');
const readDB = require('./readDB.js');
const app = express();

app.use(express.json());
app.use(cors());

// This can stay the same?
app.get('/', async(req, res) => {
    const { publication } = req.query;
    const data = await readDB(publication);
    res.json(data);
})

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

// Function automatically runs every 2 hours to fetch new articles
const autoAPICall = setInterval(function() {
    pullDataAndSave();
    console.log('APIs Called')
}, 14400000)

app.listen(8080, () => {
    console.log('Listening on port: 8080')
    connectDB();
    pullDataAndSave();
})