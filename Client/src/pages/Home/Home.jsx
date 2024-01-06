import { Link } from "react-router-dom";
import { useFetchData } from "../../hooks/useFetchData";
import { useFilter } from "../../hooks/useFilter";
import { fetchUrls } from "../../data/constants";
import SourceList from "./SourceList";
import ArticleGrid from "./ArticleGrid";
import PageTitle from "../../Components/ui/PageTitle";

export default function Home() {
  const { devUrlAll, prodUrlAll } = fetchUrls;
  // const fetch = useFetchData(devUrlAll);
  const fetch = useFetchData(prodUrlAll);
  const { filter, group, handleClick } = useFilter();

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
            <Link to="about">See HEROES, Page 2A</Link>
          </span>
        </p>
      </PageTitle>

      <SourceList onClick={handleClick} filter={filter} group={group} />
      <ArticleGrid fetch={fetch} filter={filter} group={group} />
    </>
  );
}
