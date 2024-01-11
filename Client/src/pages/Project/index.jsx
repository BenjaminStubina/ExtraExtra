import TechList from "./TechList";
import DevList from "./DevList";
import SocialLink from "../../Components/ui/SocialLink";
import PageTitle from "../../Components/ui/PageTitle";
import {
  devs as devArray,
  shortStack as shortStackArray,
  socials as socialArray,
} from "../../data/constants";

export default function Project({ props, children, ...rest }) {
  return (
    <>
      <PageTitle className={`font-headline text-[22px] md:text-[28px] xl:text-[36px] xl:mt-[50px]`}>
        Clever Coders Wrangle Workaround for Meta’s Bogus Block
      </PageTitle>
      <ul className={`flex flex-col md:flex-row justify-center items-center my-4 gap-4`}>
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
        <h2 className={`underline text-[18px] my-4 md:text-[26px] xl:text-[32px]`}>Get in touch:</h2>
      </DevList>

      <TechList className={`flex flex-col w-full my-4 self-center items-center`} array={shortStackArray}>
        <h2 className={`underline text-[18px] my-4 md:text-[26px] xl:text-[32px]`}>Built with:</h2>
      </TechList>
    </>
  );
}
