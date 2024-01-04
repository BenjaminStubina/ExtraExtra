import TechList from './TechList';
import DevList from './DevList';
import SocialLink from '../../Components/ui/SocialLink';
import PageTitle from '../../Components/ui/PageTitle';
import { devs as devArray, shortStack as shortStackArray, socials as socialArray } from '../../data/constants';

export default function Project() {

    return (

        <>
            <PageTitle className={`font-headline`}>Clever Coders Wrangle Workaround for Meta’s Bogus Block</PageTitle>
            <ul className={`flex justify-center`}>

                {
                    socialArray.map((social) => {
                        return (
                            <li key={social.id}>
                                <SocialLink
                                    service={social.type}
                                    identifier={social.identifier}
                                    optionalText={social.optionalText}
                                />
                            </li>
                        );
                    })
                }

            </ul>

            <DevList
                className={`_font-sans`}
                array={devArray}
            >
                <h2 className={`underline`}>Get in touch:</h2>
            </DevList>

            <TechList
                className={`w-full`}
                array={shortStackArray}
            >
                <h2 className={`underline`}>Built with:</h2>
            </TechList>
        </>

    );
}