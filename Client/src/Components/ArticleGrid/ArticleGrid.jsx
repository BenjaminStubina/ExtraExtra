import { useFetchData } from '../../utils/hooks';
import Grid from '../Grid/Grid';
import AnimatedLoader from '../AnimatedLoader/AnimatedLoader';
import { caption, getTitleById, shortenCaption, stripLink, secondsToDate } from '../../utils/utils';
import { fetchUrls } from '../../utils/constants';

export default function ArticleGrid({ activeSource }) {
    const { devUrl, prodUrl } = fetchUrls;

    const source = useFetchData(prodUrl, activeSource);
    // const source = useFetchData(devUrl, activeSource);

    return (

        <Grid>
            {source.loading ? (

                <AnimatedLoader />
                // "Loading..."
            ) : (source?.data?.map(article =>
                <ArticleItem
                    key={article.post_id}
                    link={stripLink(article.link_url)}
                    image={article.med_thumbnail_url ? article.med_thumbnail_url : article.image_url}
                    date={secondsToDate(article.posted_time)}
                    source={article.source_id ? getTitleById(article.source_id) : article.publication}
                    caption={article.caption ? article.caption : caption}
                />)
            )}

        </Grid>

    );

}

function ArticleItem({ image, link, date, caption, source, children }) {

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
                    loading='lazy'
                    className="object-cover object-center h-full w-full _brightness-[0.9]  transition duration-300 ease-in-out _hover:brightness-110"
                />
                <div
                    className='absolute inset-0 flex flex-col items-center justify-around text-white opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-black bg-opacity-75 p-4'
                >
                    <p>{date}</p>
                    <p className='line-clamp-6'>{caption}</p>
                    <p className='capitalize'>{source}</p>
                </div>
            </a>
            {children}
        </article>

    );
};