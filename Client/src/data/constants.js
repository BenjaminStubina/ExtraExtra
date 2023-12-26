import imgJS from '../assets/icons/stack/js.png';
import imgReact from '../assets/icons/stack/react.png';
import imgHTML from '../assets/icons/stack/html.png';
import imgSASS from '../assets/icons/stack/sass.png';
import imgTailwind from '../assets/icons/stack/tailwind.svg';
import imgMongo from '../assets/icons/stack/mongodb.png';
import imgNode from '../assets/icons/stack/nodejs.png';
import imgExpress from '../assets/icons/stack/express.png';

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
        image: imgJS
    },
    {
        tech: 'React',
        title: 'ReactJS',
        image: imgReact
    },
    {
        tech: 'HTML',
        title: 'HTML',
        image: imgHTML
    },
    {
        tech: 'SASS',
        title: 'SASS',
        image: imgSASS
    },
    {
        tech: 'Tailwind',
        title: 'TailwindCSS',
        image: imgTailwind
    },
    {
        tech: 'Mongo',
        title: 'MongoDB',
        image: imgMongo
    },
    {
        tech: 'Node',
        title: 'NodeJS',
        image: imgNode
    },
    {
        tech: 'Express',
        title: 'ExpressJS',
        image: imgExpress
    }
];

export const shortStack = [

    {
        tech: 'React',
        title: 'React',
        image: imgReact
    },
    {
        tech: 'Mongo',
        title: 'MongoDB',
        image: imgMongo
    },
    {
        tech: 'Node',
        title: 'Node',
        image: imgNode
    },
    {
        tech: 'Tailwind',
        title: 'Tailwind',
        image: imgTailwind
    },

];

export const pubs = [
    {
        source: 'all',
        id: 1,
        title: 'all news',
        group: 'all',
        image: imgAll,
    },

    {
        source: 'globe_and_mail',
        id: 7707772,
        title: 'globe and mail',
        group: 'national',
        image: imgGlobe,

    },
    {
        source: 'canadaland',
        id: 4258660,
        title: 'canadaland',
        group: 'national',
        image: imgCanLand,
    },
    {
        source: 'walrus',
        id: 6452093,
        title: 'the walrus',
        group: 'national',
        image: imgWalrus,
    },
    {
        source: 'now_toronto',
        id: 8351040,
        title: 'now toronto',
        group: 'local',
        image: imgNowTor,
    },
    {
        source: 'global_toronto',
        id: 3553390,
        title: 'global toronto',
        group: 'local',
        image: imgGlobal,

    },
    {
        source: 'toronto_life',
        id: 4316382,
        title: 'toronto life',
        group: 'local',
        image: imgTorLife,

    },
];

export const fetchUrls = {
    devUrl: `http://localhost:8080/?publication=`,
    prodUrl: `https://extra-extra-server.onrender.com/?publication=`,
    devUrlAll: `http://localhost:8080/?publication=all`,
    prodUrlAll: `https://extra-extra-server.onrender.com/?publication=all`,
    linkinbioBase: `https://api-prod.linkin.bio/api/v2/linkinbio_posts?social_profile_id=`,
};

export const resources = [
    {
        id: 'a01',
        type: 'article',
        url: 'https://www.nytimes.com/2023/08/02/business/media/meta-news-in-canada.html',
        title: 'Meta Begins Blocking News in Canada',
        source: 'New York Times',
        date: '8/2/2023'
    },
    {
        id: 'a02',
        type: 'article',
        url: 'https://www.nbcnews.com/tech/internet/instagram-facebook-block-news-canada-online-act-desert-rcna98225',
        title: 'Instagram and Facebook are blocking news in Canada. This is what a ‘news desert’ could look like.',
        source: 'NBC News',
        date: '8/4/2023'
    },
    {
        id: 'a03',
        type: 'article',
        url: 'https://www.thestar.com/business/most-canadians-view-about-online-news-act-is-news-should-be-free-survey-suggests/article_6d30cec3-1439-5506-be93-6896a4529631.html',
        title: 'Most Canadians view about Online News Act is news should be free',
        source: 'Toronto Star',
        date: '9/20/2023'
    },
    {
        id: 'a04',
        type: 'article',
        url: 'https://www150.statcan.gc.ca/n1/daily-quotidien/231110/dq231110b-eng.htm',
        title: 'Social Survey: Quality of Life, Virtual Health Care and Trust',
        source: 'StatCan',
        date: '11/10/2023'
    },
    {
        id: 'a05',
        type: 'article',
        url: 'https://www.mediaecosystemobservatory.com/projects/metas-news-ban-in-canada-triggered-a-90-drop-in-engagement-on-canadian-news-outlet-pages-report',
        title: 'Canadian News Pages See 90% Drop in Engagement Triggered By Meta’s Ban',
        source: 'MEO',
        date: '12/14/2023'
    },
    {
        id: 'a06',
        type: 'article',
        url: 'https://www.bbc.com/news/world-us-canada-67755133.amp',
        title: 'Meta’s news ban remains as Online News Act goes into effect',
        source: 'BBC',
        date: '12/19/2023'
    },
    {
        id: 'a07',
        type: 'article',
        url: 'https://www.latimes.com/california/story/2023-12-19/why-googles-lobbying-in-california-skyrocketed-this-year',
        title: 'Why Google’s lobbying in California skyrocketed this year',
        source: 'Los Angeles Times',
        date: '12/19/2023'
    },
    {
        id: 'p01',
        type: 'podcast',
        url: 'https://www.cbc.ca/radio/frontburner/how-meta-s-news-ban-is-affecting-canadians-1.6945653',
        title: 'How Meta’s news ban is affecting Canadians',
        source: 'Front Burner',
        date: '8/24/2023'
    },
    {
        id: 'p02',
        type: 'podcast',
        url: 'https://www.theglobeandmail.com/podcasts/the-decibel/article-australia-resolved-its-news-standoff-with-meta-could-canada/',
        title: 'Australia resolved its news standoff with Meta. Could Canada?',
        source: 'The Decibel',
        date: '9/12/2023'
    },
    {
        id: 'p03',
        type: 'podcast',
        url: 'https://www.cbc.ca/listen/cbc-podcasts/123/episode/16026720',
        title: 'Ottawa reaches $100M deal with Google on Online News Act',
        source: 'CBC Power and Politics',
        date: '11/29/2023'
    },
    {
        id: 'p04',
        type: 'podcast',
        url: 'https://www.canadaland.com/podcast/947-rising-hate-and-sweet-google-money/',
        title: 'Rising Hate and Sweet Google Money',
        source: 'Canadaland',
        date: '12/21/2023'
    }
];

const decibelSimplecastPlayerUrl = `https://player.simplecast.com/b9746804-c6c4-476d-a293-3cdee6ef9213?dark=false`;
