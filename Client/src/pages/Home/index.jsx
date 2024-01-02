import { Link } from "react-router-dom";
import { useState } from "react";
import { pubs as pubArray } from "../../data/constants";
import SourceList from "./SourceList";
import ArticleGrid from "./ArticleGrid";
import PageTitle from "../../components/ui/PageTitle";

export default function Home() {
  // useState for the activeSource - by default it is set to All Sources
  const [activeSource, setActiveSource] = useState(pubArray[0].id);

  //   const [filter, setFilter] = useState(null);
  // TODO: Look at per-device styles -- grid on iPad Pro (1024px) could be 2-col vs. 3-col
  // TODO: margin-x is bad on mobile portrait - too far left - see what's going on

  return (
    <>
      <PageTitle as="hgroup" className={`flex flex-col w-full items-center`}>
        <h1
          className={`italic text-center font-medium text-3xl ${`_md:min-w-max md:text-4xl lg:text-5xl xl:text-6xl`}`}
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

      <SourceList
        activeSource={activeSource}
        setActiveSource={setActiveSource}
        // setFilter={setFilter}
      />
      <ArticleGrid
      // filter={filter}
      // activeSource={activeSource}
      />
    </>
  );
}
