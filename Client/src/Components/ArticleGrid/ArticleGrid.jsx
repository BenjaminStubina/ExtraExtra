import { useFetchData } from '../../utils/hooks';
import Grid from "../Grid/Grid";
import AnimatedLoader from '../AnimatedLoader/AnimatedLoader';
import { caption, shortenCaption, stripLink, secondsToDate } from '../../utils/utils';

export default function ArticleGrid({ activeSource }) {

    // Use state to store the data retrieved from the API call to the back-end
    // Axios call to the back-end to retrieve the data based on the selected news publisher.
    // Publisher is passed to the back-end as a query in the GET Request
    const devUrl = `http://localhost:8080/?publication=`;
    const prodUrl = 'https://extra-extra-server.onrender.com/?publication=';
    const source = useFetchData(devUrl, activeSource);

    if (source.loading) {
        return (
            <AnimatedLoader />
        );
    }

    return (

        // Once data is stored in state, return all of the articles mapped out below

        <Grid>
            {source.data.map((article) => {
                return (
                    <ArticleItem
                        key={article.post_id}
                        link={stripLink(article.link_url)}
                        image={article.image_url}
                        date={secondsToDate(article.posted_time)}
                        source={article.publication}
                        caption={caption}
                    />
                );
            })}
        </Grid>

    );

}

function ArticleItem({ image, link, date, caption, source }) {

    return (
        <article className="flex h-72 w-72">
            <a
                href={link}
                target='_blank'
                rel="noopener noreferrer"
                className="relative w-full h-full border-8 rounded border-transparent md:hover:border-red-500"
            >
                <img
                    src={image}
                    alt={shortenCaption(caption, 25)}
                    className="object-cover object-center h-full w-full Xbrightness-[0.9]  transition duration-300 ease-in-out Xhover:brightness-110"
                />
                <div
                    className='absolute inset-0 flex flex-col items-center justify-around text-white opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-black bg-opacity-75 p-4'
                >
                    <p>{date}</p>
                    <p className='line-clamp-6'>{caption}</p>
                    <p>{source}</p>
                </div>
            </a>
        </article>

    );
};