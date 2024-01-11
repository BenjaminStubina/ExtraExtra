import TechList from "./TechList";
import DevList from "./DevList";
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
    <>
      <PageTitle className={`font-headline text-[22px] md:text-[28px] xl:text-[36px] mt-[5px] md:mt-[25px]`}>
        Clever Coders Wrangle Workaround for Meta’s Bogus Block
      </PageTitle>
      <section className="flex flex-col gap-4 my-4 text-[16px] md:text-[18px] xl:text-[22px]">
        <p>
          TORONTO — ExtraExtra is stepping up for Canadians at a time when access to reliable information is more important than ever.
        </p>
        <p>
          Since August 2023, Meta has 
            <a target='_' href='https://www.nytimes.com/2023/08/02/business/media/meta-news-in-canada.html' className="hover:underline decoration-blue-700 text-blue-700">
              &nbsp;blocked news&nbsp;
            </a> 
          on Instagram and Facebook for users across Canada. The decision is a direct response to the Online News Act, a Federal bill requiring Big Tech to 
            <a target='_' href='https://www.canada.ca/en/canadian-heritage/services/online-news.html' className="hover:underline decoration-blue-700 text-blue-700">
              &nbsp;share ad revenue&nbsp;
            </a>
          with news publishers. “This ban hurts all Canadians by placing barriers on high-quality journalism,” says ExtraExtra co-creator 
            <a target='_' href='https://www.linkedin.com/in/bennygoldman' className="hover:underline decoration-blue-700 text-blue-700">
              &nbsp;Benny Goldman
            </a> 
          .
        </p>
        <p>
          ExtraExtra is a way to help Canadians stay informed. Follow 
            <a target='_' href='https://www.instagram.com/ExtraExtraCA' className="hover:underline decoration-blue-700 text-blue-700">
              &nbsp;@ExtraExtraCA&nbsp;
            </a> 
          on Instagram to get the latest headlines. Visit 
            <a target='_' href='https://www.extraextranews.ca' className="hover:underline decoration-blue-700 text-blue-700">
              &nbsp;extraextranews.ca&nbsp;
            </a> 
          to access full stories. News is curated from local, national, and international sources. According to lead developer
            <a target='_' href='https://www.linkedin.com/in/benjamin-stubina' className="hover:underline decoration-blue-700 text-blue-700">
              &nbsp;Benjamin Stubina
            </a> 
          , “we want to meet people where they're at while staying under Big Tech's radar.”
        </p>
        <p>
          To learn more about the implications of Meta's ban, visit the
            <Link to="/links" className="hover:underline decoration-blue-700 text-blue-700">
              &nbsp;Resources Page
            </Link>
        </p>
      </section>
      <ul className={`flex flex-col md:flex-row justify-center items-center mt-6 mb-4 gap-4`}>
        {socialArray.map((social) => {
          return (
            <li key={social.id}>
              <SocialLink
                service={social.type}
                identifier={social.identifier}
                optionalText={social.optionalText}
              />
            </li>
          );
        })}
      </ul>

      <DevList className={`flex flex-col _font-sans`} array={devArray}>
        <h2 className={`text-[18px] mt-4 md:text-[26px] xl:text-[32px]`}>ExtraExtra was created in Toronto by Benjamin Stubina and Benny Goldman.</h2>
      </DevList>

      <TechList className={`flex flex-col w-full my-4 self-center items-center`} array={shortStackArray}>
        <h2 className={`underline text-[18px] my-4 md:text-[26px] xl:text-[32px]`}>Built with:</h2>
      </TechList>
    </>
  );
}
