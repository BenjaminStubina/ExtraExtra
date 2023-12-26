import { useFetchData } from '../../hooks/useFetchData';
import { fetchUrls } from '../../data/constants';
import { caption, getTitle, shortenCaption, stripLink, secondsToDate } from '../../utils/utils';
import Grid from "../../components/ui/Grid";
import AnimatedLoader from '../../components/ui/AnimatedLoader';

export default function ArticleGrid({ activeSource }) {
    const { devUrl, prodUrl } = fetchUrls;

    // const source = useFetchData(prodUrl, activeSource);
    const source = useFetchData(devUrl, activeSource);

    return (

        <Grid>
            {source.loading ? (
                // <AnimatedLoader />
                "Loading..."
            ) : (source.data.map(article =>
                <ArticleItem
                    key={article.post_id}
                    link={stripLink(article.link_url)}
                    image={article.med_thumbnail_url || article.image_url}
                    date={secondsToDate(article.posted_time)}
                    source={getTitle(article)}
                    caption={article.caption || caption}
                />)
            )}

        </Grid>

    );

}

function ArticleItem({ image, link, date, caption, source }) {

    return (


        <article className={`group relative overflow-hidden rounded border-4 border-red-700 border-opacity-0 hover:border-opacity-80 transition ease-linear duration-200 delay-75`}>
            <a
                href={link}
                target='_blank'
                rel="noopener noreferrer"
                className={``}
            >
                <img
                    src={image}
                    alt={shortenCaption(caption, 25)}
                    loading='lazy'
                    width='384'
                    height='384'
                    className={`max-w-full h-96 object-cover object-center`}
                />
                <div
                    className={`absolute inset-0 h-full w-full flex flex-col items-center justify-between p-5 opacity-0 text-gray-100 bg-red-700 bg-opacity-80 border-8 border-white border-opacity-0  group-hover:opacity-100 group-hover:border-opacity-100 transition ease-linear duration-200 delay-75`}
                >
                    <p className={`text-xl text-left self-end`}>{date}</p>
                    <p className={`text-2xl shadow font-medium line-clamp-5 text-left`}>{caption}</p>
                    <p className={`text-xl capitalize self-start`}>{source}</p>
                </div>
            </a>
        </article>
    );
};