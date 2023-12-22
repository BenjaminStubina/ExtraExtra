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
app.get('/', async (req, res) => {
    const { publication } = req.query;
    const data = await readDB(publication);
    res.json(data);
});

//this function is used to repopulate the DB with historical data
const repopulateDB = async () => {
    for(let i = 0; i < 150; i++) { // loops over i amount of days from an initial starting point and goes backwards in time
        const startTime = 1703233892 //insert designed start time in JS seconds
        const incrementTime = 86400; //seconds in a day
        const time = startTime - i*incrementTime
        const publicationKeys = Object.keys(APILinks.APILinks[0]);
        const pullPromises = publicationKeys.map(async pubKey => {
            const link = APILinks.APILinks[0][pubKey];
            const linkDate = link+time // appends the time of designed API call to the APILink
            const res = await axios.get(linkDate);
            return res?.data.linkinbio_posts.map((postData) => {
                return (
                    {
                        ...postData, publication: pubKey
                    }
                );
            });
        });
        const postObjects = await Promise.all(pullPromises);
        await updateDB(postObjects.flat(1));
    }
}

const pullDataAndSave = async () => {
    const publicationKeys = Object.keys(APILinks.APILinks[0]);
    const pullPromises = publicationKeys.map(async pubKey => {
        const link = APILinks.APILinks[0][pubKey];
        const res = await axios.get(link);
        return res?.data.linkinbio_posts.map((postData) => {
            return (
                {
                    ...postData, publication: pubKey
                }
            );
        });
    });
    const postObjects = await Promise.all(pullPromises);
    await updateDB(postObjects.flat(1));
};

// Function automatically runs every hour to fetch new articles
const autoAPICall = setInterval(function () {
    pullDataAndSave();
    console.log('APIs Called');
}, 3600000);

app.listen(8080, () => {
    console.log('Listening on port: 8080');
    connectDB();
    pullDataAndSave();
    // repopulateDB(); //run this function to repopulate the DB with historical data. See function to alter input parameters
});