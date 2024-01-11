/*
 ! Notes !
 * Grid @ lg-viewport could be 2-col vs. 3-col
 * Grid margin-x is bad on mobile portrait - too far left
 * Item can take a [srcset] of images in the DB - "thumbnail" when loading, "image_url" when loaded, etc.
 * AnimatedLoader is off. We can bring it back in. Post-launch goal: Replace with Skeleton loader
 */

import {
  getTitle,
  shortenCaption,
  stripLink,
  secondsToDate,
} from "../../utils/utils";
import Grid from "../../Components/ui/Grid";
import AnimatedLoader from "../../Components/ui/AnimatedLoader";
import LoadingGrid from "./LoadingGrid";

export default function ArticleGrid({ fetch, filter, group }) {
  const filteredData = fetch.data?.filter((obj) => {
    if (filter === "all") return true;
    if (filter === obj.source_id) return true;
    if (group.includes(obj.source_id)) return true;
    return false;
  });

  return (
    <Grid>
      {fetch.loading
        ? // <AnimatedLoader />
          <LoadingGrid/>
        : filteredData.map((article) => (
            <ArticleItem
              key={article.post_id}
              sourceId={article.source_id}
              link={stripLink(article.link_url)}
              image={article.med_thumbnail_url || article.image_url}
              date={secondsToDate(article.posted_time)}
              sourceName={getTitle(article)}
              caption={article.caption}
            />
          ))}
    </Grid>
  );
}

function ArticleItem({ sourceId, image, link, date, caption, sourceName }) {
  return (
    <article
      data-source_id={sourceId}
      className={`w-full group relative overflow-hidden rounded border-4 border-red-700 border-opacity-0 hover:border-opacity-80 transition ease-linear duration-100 delay-[50ms]`}
    >
      <a href={link} target="_blank" rel="noopener noreferrer" className={``}>
        <img
          src={image}
          alt={!caption ? "learn more" : shortenCaption(caption, 25)}
          loading="lazy"
          width="640"
          height="640"
          className={`max-w-full object-cover object-center`}
        />
        <div
          className={`absolute inset-0 h-full w-full flex flex-col items-center justify-between p-5 opacity-0 text-gray-100 bg-red-700 bg-opacity-80 border-8 border-white border-opacity-0  group-hover:opacity-100 group-hover:border-opacity-100 transition ease-linear duration-200 delay-75`}
        >
          <p className={`text-xl text-left self-end`}>{date}</p>
          <p className={`text-2xl shadow font-medium line-clamp-5 text-left`}>
            {caption || "Learn more"}
          </p>
          <p className={`text-xl capitalize self-start`}>{sourceName}</p>
        </div>
      </a>
    </article>
  );
}
