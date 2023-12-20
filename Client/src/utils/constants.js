import JS from '../assets/icons/stack/js.png';
import React from '../assets/icons/stack/react.png';
import HTML from '../assets/icons/stack/html.png';
import SASS from '../assets/icons/stack/sass.png';
import Tailwind from '../assets/icons/stack/tailwind.svg';
import Mongo from '../assets/icons/stack/mongodb.png';
import Node from '../assets/icons/stack/nodejs.png';
import Express from '../assets/icons/stack/express.png';

import imgGlobal from '../assets/icons/news/globalnews.png';
import imgGlobe from '../assets/icons/news/globeandmail.png';
import imgTorLife from '../assets/icons/news/torontolife.jpg';
import imgWalrus from '../assets/icons/news/walrus.png';
import imgCanLand from '../assets/icons/news/canadland.svg';
import imgNowTor from '../assets/icons/news/nowtoronto.png';
import imgAll from '../assets/icons/news/everysource.png';

export const socials = [
    { id: 1, type: 'github', identifier: 'BenjaminStubina/ExtraExtra', optionalText: '/ExtraExtra' },
    { id: 2, type: 'instagram', identifier: 'ExtraExtraCA' },
    { id: 3, type: 'email', identifier: 'extraextranewsca@gmail.com', optionalText: 'Send us an email' },
];

export const devs = [
    {
        id: 'benjamin',
        name: '',
        services: [
            { type: 'github', identifier: 'BenjaminStubina' },
            { type: 'linkedin', identifier: 'benjamin-stubina' },
        ]
    }, {
        id: 'benny',
        name: '',
        services: [
            { type: 'github', identifier: 'bennygoldman' },
            { type: 'linkedin', identifier: 'bennygoldman' },
        ]
    }

];

export const fullStack = [
    {
        tech: 'JS',
        title: 'JavaScript',
        image: JS
    },
    {
        tech: 'React',
        title: 'ReactJS',
        image: React
    },
    {
        tech: 'HTML',
        title: 'HTML',
        image: HTML
    },
    {
        tech: 'SASS',
        title: 'SASS',
        image: SASS
    },
    {
        tech: 'Tailwind',
        title: 'TailwindCSS',
        image: Tailwind
    },
    {
        tech: 'Mongo',
        title: 'MongoDB',
        image: Mongo
    },
    {
        tech: 'Node',
        title: 'NodeJS',
        image: Node
    },
    {
        tech: 'Express',
        title: 'ExpressJS',
        image: Express
    }
];

export const shortStack = [

    {
        tech: 'React',
        title: 'React',
        image: React
    },
    {
        tech: 'Mongo',
        title: 'MongoDB',
        image: Mongo
    },
    {
        tech: 'Node',
        title: 'Node',
        image: Node
    },
    {
        tech: 'Tailwind',
        title: 'Tailwind',
        image: Tailwind
    },

];

export const pubs = [
    {
        publication: 'all',
        id: 1,
        title: "all news",
        group: "all",
        image: imgAll,
    },

    {
        publication: 'globe_and_mail',
        id: 7707772,
        title: "the globe and mail",
        group: "national",
        image: imgGlobe,

    },
    {
        publication: 'canadaland',
        id: 4258660,
        title: "canadaland",
        group: "national",
        image: imgCanLand,
    },
    {
        publication: 'walrus',
        id: 6452093,
        title: "the walrus",
        group: "national",
        image: imgWalrus,
    },
    {
        publication: 'now_toronto',
        id: 8351040,
        title: "now toronto",
        group: "local",
        image: imgNowTor,
    },
    {
        publication: 'global_toronto',
        id: 3553390,
        title: "global toronto",
        group: "local",
        image: imgGlobal,

    },
    {
        publication: 'toronto_life',
        id: 4316382,
        title: "toronto life",
        group: "local",
        image: imgTorLife,

    },
];

export const fetchUrls = {
    devUrl: `http://localhost:8080/?publication=`,
    prodUrl: `https://extra-extra-server.onrender.com/?publication=`,
    devUrlAll: `http://localhost:8080/?publication=all`,
    prodUrlAll: `https://extra-extra-server.onrender.com/?publication=all`,
};