const express = require('express');
const cors = require('cors');
const axios = require('axios');
const fs = require('fs');

const app = express();

const APILinks = JSON.parse(fs.readFileSync('./data/APIData.json'));

app.use(express.json());
app.use(cors());

const fetchData = () => {
    const data = fs.readFileSync('./data/cland.json');
    return JSON.parse(data);
}

app.get('/', (_req, res) => {
    const data = fetchData();
    res.json(data);
})

const makeCalls = () => {
    Object.keys(APILinks.APILinks[0]).forEach(key => {
        axios.get(`${APILinks.APILinks[0][key]}`)
        .then(res => {
            fs.writeFileSync(`./data/${key}.json`, JSON.stringify(res.data))
        })
    })
}
makeCalls();

const autoAPICall = setInterval(function() {
    makeCalls();
}, 3600000)

app.listen(8080, () => {
    console.log('Listening on port: 8080')
})