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
import PageTitle from "../../components/ui/PageTitle";

export default function Home() {
  const [filter, setFilter] = useState(null);
  const { devUrlAll, prodUrlAll } = fetchUrls;
  const fetch = useFetchData(devUrlAll);

  return (
    <>
      <PageTitle
        as="hgroup"
        className={`flex flex-col w-full items-center mx-2`}
      >
        <h1
          className={`italic text-center font-medium max-w-sm xs:min-w-max text-3xl ${`md:min-w-max md:text-4xl lg:text-5xl xl:text-6xl`}`}
        >
          NEWS RETURNS TO SOCIAL MEDIA
        </h1>
        <p className="font-headline min-w-0 max-w-max text-xl font-medium md:text-3xl md:font-normal lg:text-4xl xl:text-5xl">
          Canadians rejoice
          <span className="text-xs md:font-light lg:text-sm font-normal hover:underline">
            <Link to="about"> See HEROES, Page A2</Link>
          </span>
        </p>
      </PageTitle>

      <SourceList />
      <ArticleGrid fetch={fetch} />
    </>
  );
}
