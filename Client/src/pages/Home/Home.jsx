// * NOTES
// TODO refactor `fetch` to use .filter() and .groupBy()
// ! grid at lg-viewport could be 2-col vs. 3-col
// TODO grid margin-x is bad on mobile portrait - too far left - see what's going on
// * NOTES

import { Link } from "react-router-dom";
import { useFetchData } from "../../hooks/useFetchData";
import { fetchUrls } from "../../data/constants";
import { useState } from "react";
import { pubs as pubArray } from "../../data/constants";
import SourceList from "./SourceList";
import ArticleGrid from "./ArticleGrid";
import PageTitle from "../../Components/ui/PageTitle";

export default function Home() {
  const [filter, setFilter] = useState(null);
  const { devUrlAll, prodUrlAll } = fetchUrls;
  // const fetch = useFetchData(devUrlAll);
  const fetch = useFetchData(prodUrlAll);

  return (
    <>
      <PageTitle as="hgroup" className={`mt-2 mb-4`}>
        <h1
          className={`mb-2 italic text-center font-medium mx-auto max-w-sm text-3xl ${`xs:min-w-max xs:text-2xl xm:text-3xl md:text-4xl lg:mb-4 lg:text-5xl xl:text-6xl`}`}
        >
          NEWS RETURNS TO SOCIAL MEDIA
        </h1>
        <p
          className={`font-headline text-xl font-medium ml-4 ${`xm:ml-36 md:ml-48 lg:ml-72 xl:ml-80 xm:text-2xl md:text-3xl md:font-normal lg:text-4xl xl:text-5xl`}`}
        >
          Canadians rejoice
          <span
            className={`font-serif text-xs hover:underline ml-1 ${`xm:ml-12 md:ml-20 lg:ml-28 xl:ml-52 md:font-light lg:text-sm`}`}
          >
            <Link to="about"> See HEROES, Page A2</Link>
          </span>
        </p>
      </PageTitle>

      <SourceList />
      <ArticleGrid fetch={fetch} />
    </>
  );
}
