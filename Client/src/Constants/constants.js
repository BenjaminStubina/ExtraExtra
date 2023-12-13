import JS from '../Assets/Images/techIcons/js.png';
import React from '../Assets/Images/techIcons/react.png';
import HTML from '../Assets/Images/techIcons/html.png';
import SASS from '../Assets/Images/techIcons/sass.png';
import Tailwind from '../Assets/Images/techIcons/tailwind.svg';
import Mongo from '../Assets/Images/techIcons/mongodb.png';
import Node from '../Assets/Images/techIcons/nodejs.png';
import Express from '../Assets/Images/techIcons/express.png';

import Global from '../Assets/Images/SourceLogos/Global.png';
import Globe from '../Assets/Images/SourceLogos/Globe.png';
import TLife from '../Assets/Images/SourceLogos/TLife.jpg';
import Walrus from '../Assets/Images/SourceLogos/Walrus.png';
import CLand from '../Assets/Images/SourceLogos/CLand.svg';
import Now from '../Assets/Images/SourceLogos/Now.png';
import All from '../Assets/Images/SourceLogos/infinity.png';

export const socialArray = [
    { id: 1, type: 'github', identifier: 'BenjaminStubina/ExtraExtra', optionalText: '/ExtraExtra' },
    { id: 2, type: 'instagram', identifier: 'ExtraExtraCA' },
    { id: 3, type: 'email', identifier: 'extraextranewsca@gmail.com', optionalText: 'Send us an email' },
];

export const devArray = [
    {
        id: 'benjamin',
        name: 'Benjamin Stubina',
        services: [
            { type: 'github', identifier: 'BenjaminStubina' },
            { type: 'linkedin', identifier: 'benjamin-stubina' },
        ]
    }, {
        id: 'benny',
        name: 'Benny Goldman',
        services: [
            { type: 'github', identifier: 'bennygoldman' },
            { type: 'linkedin', identifier: 'bennygoldman' },
        ]
    }

];

export const stackArray = [
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

export const pubArray = [
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