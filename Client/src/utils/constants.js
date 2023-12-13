import JS from '../assets/icons/stack/js.png';
import React from '../assets/icons/stack/react.png';
import HTML from '../assets/icons/stack/html.png';
import SASS from '../assets/icons/stack/sass.png';
import Tailwind from '../assets/icons/stack/tailwind.svg';
import Mongo from '../assets/icons/stack/mongodb.png';
import Node from '../assets/icons/stack/nodejs.png';
import Express from '../assets/icons/stack/express.png';

import Global from '../assets/icons/news/globalnews.png';
import Globe from '../assets/icons/news/globeandmail.png';
import TLife from '../assets/icons/news/torontolife.jpg';
import Walrus from '../assets/icons/news/walrus.png';
import CLand from '../assets/icons/news/canadland.svg';
import Now from '../assets/icons/news/nowtoronto.png';
import All from '../assets/icons/news/everysource.png';

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

// add tag array to each pub with "local", "provincial", "national", "international" for future filtering
export const pubs = [
    {
        publication: 'all',
        name: "all",
        title: "All News Outlets",
        image: All
    },
    {
        publication: 'global_toronto',
        name: "Global",
        title: "Global Toronto",
        image: Global
    },
    {
        publication: 'globe_and_mail',
        name: "Globe",
        title: "The Globe and Mail",
        image: Globe
    },
    {
        publication: 'toronto_life',
        name: "TLife",
        title: "Toronto Life",
        image: TLife
    },
    {
        publication: 'walrus',
        name: "Walrus",
        title: "The Walrus",
        image: Walrus
    },
    {
        publication: 'canadaland',
        name: "CLand",
        title: "Canadaland",
        image: CLand
    },
    {
        publication: 'now_toronto',
        name: "Now",
        title: "Now Toronto",
        image: Now
    }
];