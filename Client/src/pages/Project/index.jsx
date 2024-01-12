import { DevList, TechList, SocialList } from "./Lists";
import SocialLink from "../../Components/ui/SocialLink";
import PageTitle from "../../Components/ui/PageTitle";
import {
  devs as devArray,
  shortStack as shortStackArray,
  socials as socialArray,
} from "../../data/constants";
import { Link } from "react-router-dom";

export default function Project({ props, children, ...rest }) {
  return (
    <div
      className={`${`lg:flex lg:justify-center lg:max-w-6xl lg:gap-6 _lg:mx-auto`}`}
    >
      <article
        className={`text-left text-pretty tracking-wide text text-lg ${`lg:max-w-2xl _lg:mx-auto`}`}
      >
        <PageTitle
          className={`my-4 text-left text-4xl text-balance italic font-medium ${`_lg:min-w-max  _lg:max-w-2xl _lg:mx-auto`}`}
          // className={`font-headline text-2xl md:text-3xl xl:text-4xl _mt-1 _md:mt-6`}
        >
          Clever Coders Wrangle Workaround for Bogus Block
        </PageTitle>
        <p className={`mb-4`}>
          TORONTO — ExtraExtra is stepping up for Canadians at a time when
          access to reliable information is more important than ever.
        </p>
        {/* <img src={OnlineNews} alt="" /> */}
        <p className={`mb-4`}>
          Since August 2023,&nbsp;
          <a
            href="https://www.nytimes.com/2023/08/02/business/media/meta-news-in-canada.html"
            target="_blank"
            rel="noopener noreferrer"
            className={`underline hover:no-underline decoration-blue-800 text-blue-800`}
          >
            news has been blocked
          </a>
          &nbsp;on major social media platforms for users across Canada. The
          block is in response to the&nbsp;
          <a
            href="https://www.canada.ca/en/canadian-heritage/services/online-news.html"
            target="_blank"
            rel="noopener noreferrer"
            className={`underline hover:no-underline decoration-blue-800 text-blue-800`}
          >
            Online News Act
          </a>
          , a Federal bill to strengthen the media through a share of revenue
          from the platforms people rely on for news. “This ban hurts all
          Canadians by placing barriers on high-quality journalism,” says
          ExtraExtra co-creator&nbsp;
          <a
            href="https://www.linkedin.com/in/bennygoldman"
            target="_blank"
            rel="noopener noreferrer"
            className={`underline hover:no-underline decoration-blue-800 text-blue-800`}
          >
            Benny Goldman
          </a>
          .
        </p>
        <p className={`mb-4`}>
          ExtraExtra is a way to help Canadians stay informed. Follow&nbsp;
          <a
            href="https://www.instagram.com/ExtraExtraCA"
            target="_blank"
            rel="noopener noreferrer"
            className={`underline hover:no-underline decoration-blue-800 text-blue-800`}
          >
            @ExtraExtraCA
          </a>
          &nbsp;to get the latest headlines. Visit&nbsp;
          <Link
            to="/"
            className={`underline hover:no-underline decoration-blue-800 text-blue-800`}
          >
            extraextranews.ca
          </Link>
          &nbsp;to access full stories. News is curated from local, national,
          and international sources. According to co-creator&nbsp;
          <a
            href="https://www.linkedin.com/in/benjamin-stubina"
            target="_blank"
            rel="noopener noreferrer"
            className={`underline hover:no-underline decoration-blue-800 text-blue-800`}
          >
            Benjamin Stubina
          </a>
          , “we want to meet people where they're at while staying under Big
          Tech's radar.”
        </p>
        <p className={`mb-4`}>
          To learn more about the implications of the ban, visit the&nbsp;
          <Link
            to="/links"
            className={`underline hover:no-underline decoration-blue-800 text-blue-800`}
          >
            Resources Page.
          </Link>
        </p>
        <p className={`mb-4 text-base`}>
          ExtraExtra was created in Toronto by Benny Goldman and Benjamin
          Stubina.
        </p>
      </article>
      <aside
        className={`order-first flex flex-col ${`_lg:max-w-5xl _lg:mx-auto _lg:justify-center lg:mt-8 gap-8 md:flex-row lg:flex-col _md:w-full _md:flex-wrap _md:justify-around  md:gap-4`}`}
      >
        <SocialList array={socialArray} className={`_md:w-full ${``}`}>
          <h2
            className={`text-left text-xl font-semibold mb-4 ${`_md:text-center`}`}
          >
            Follow:
          </h2>
        </SocialList>
        <DevList array={devArray} className={`_md:w-1/3 ${``}`}>
          <h2
            className={`text-left text-xl font-semibold mb-4 ${`_md:text-center`}`}
          >
            Connect:
          </h2>
        </DevList>

        <TechList array={shortStackArray} className={`_lg:w-1/4 ${``}`}>
          <h2
            className={`text-left text-xl font-semibold mb-4 ${`_md:text-center`}`}
          >
            Built with:
          </h2>
        </TechList>
      </aside>
    </div>
  );
}
