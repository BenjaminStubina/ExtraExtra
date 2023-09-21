const express = require('express');
const cors = require('cors');
const axios = require('axios');
const fs = require('fs');

const app = express();

app.use(express.json());
app.use(cors());

const fetchData = () => {
    const data = fs.readFileSync('./data/global.json');
    return JSON.parse(data);
}

app.get('/', (_req, res) => {
    const data = fetchData();
    res.json(data);
})

// const makeCalls = () => {

//     const APILinks = JSON.parse(fs.readFileSync('./data/APIData.json'));
//     Object.keys(APILinks.APILinks[0]).forEach(key => {
//         axios.get(`${APILinks.APILinks[0][key]}`)
//         .then(res => {
//             fs.writeFileSync(`./data/${key}.json`, JSON.stringify(res.data))
//         })
//     })
// }

const makeCalls = () => {

    const APILinks = JSON.parse(fs.readFileSync('./data/APIData.json'));
    Object.keys(APILinks.APILinks[0]).forEach(key => {
        axios.get(`${APILinks.APILinks[0][key]}`)
        .then(res => {
            fs.writeFileSync(`./data/${key}.json`, JSON.stringify(res.data))
        })
    })
}

makeCalls();

app.listen(8080, () => {
    console.log('Listening on port: 8080')
})