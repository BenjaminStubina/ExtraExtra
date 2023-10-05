const express = require('express');
const cors = require('cors');
const axios = require('axios');
const fs = require('fs');
const APILinks = JSON.parse(fs.readFileSync('./data/APIData.json'));
const PUBLICATIONS = require('./publications.js');
const connectDB = require('./mongodb.js');
const app = express();

app.use(express.json());
app.use(cors());

connectDB();

// This can stay the same?
app.get('/', (req, res) => {
    const { publication } = req.query;
    const data = fetchData(publication);
    res.json(data);
})

// Update switch case logic to return queries from DB
// 1. GET request from front end will submit publication in the query
// 2. Query through DB and return all posts that match the query request
// 2.5. Organize posts based on posted_time value
// 3. Include option to query for ALL publications simultaneously
const fetchData = (publication) => {
    switch(publication) {
        case(PUBLICATIONS.GLOBAL_TORONTO): {
            const data = fs.readFileSync('./data/global.json');
            return JSON.parse(data);
        }
        case(PUBLICATIONS.GLOBE_AND_MAIL): {
            const data = fs.readFileSync('./data/globe.json');
            return JSON.parse(data);
        }
        case(PUBLICATIONS.TORONTO_LIFE): {
            const data = fs.readFileSync('./data/tlife.json');
            return JSON.parse(data);
        }
        case(PUBLICATIONS.WALRUS): {
            const data = fs.readFileSync('./data/walrus.json');
            return JSON.parse(data);
        }
        case(PUBLICATIONS.CANADALAND): {
            const data = fs.readFileSync('./data/cland.json');
            return JSON.parse(data);
        }
        case(PUBLICATIONS.NOW_TORONTO): {
            const data = fs.readFileSync('./data/now.json');
            return JSON.parse(data);
        }
    }
}

// Update logic to feed data into DB
// 1. makeCalls function will loop through list of API URLs and make calls.
// 2. Each call will return the data from the API and then create a new entry in the DB with publication, post_id, posted_time, image_url, link_url
// 2.5. Include some logic that prevents duplicate entries in the database (post_id !== in DB)
const makeCalls = () => {
    Object.keys(APILinks.APILinks[0]).forEach(key => {
        axios.get(`${APILinks.APILinks[0][key]}`)
        .then(res => {

            // Logic to write a new JSON file with all of the data
            fs.writeFileSync(`./data/${key}.json`, JSON.stringify(res.data))

            // Logic to add entries to DB
            let totalData = res.data.linkinbio_posts
            totalData.forEach((article) => {
                // Connect to DB and add all the required info to a new entry
                // Check for doubles???
                // console.log(key, article.id, article.image_url, article.link_url, article.posted_time);
            })
        })
    })
}
makeCalls();

const autoAPICall = setInterval(function() {
    makeCalls();
}, 7200000)

app.listen(8080, () => {
    console.log('Listening on port: 8080')
})