const express = require('express');
const cors = require('cors');
const axios = require('axios');
const fs = require('fs');

const app = express();

const APILinks = JSON.parse(fs.readFileSync('./data/APIData.json'));

app.use(express.json());
app.use(cors());

const PUBLICATIONS = {
    GLOBAL_TORONTO: 'global_toronto',
    GLOBE_AND_MAIL: 'globe_and_mail',
    TORONTO_LIFE: 'toronto_life',
    WALRUS: 'walrus',
    CANADALAND: 'canadaland',
    NOW_TORONTO: 'now_toronto',
    }

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

app.get('/', (req, res) => {
    const { publication } = req.query;
    const data = fetchData(publication);
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
}, 7200000)

app.listen(8080, () => {
    console.log('Listening on port: 8080')
})