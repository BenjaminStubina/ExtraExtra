import TechList from '../Components/TechList/TechList';
import DevList from '../Components/DevList/DevList';
import { devs as devArray, shortStack as shortStackArray } from '../utils/constants';

export default function AboutUs({ props, children, ...rest }) {

    return (
        <>
            <p
                className=''
            >
                ExtraExtra was created in Toronto by Benjamin Stubina and Benny Goldman.
            </p>

            <DevList
                className="w-full"
                array={devArray}
            >
                Get in touch:
            </DevList>


            <TechList
                className="w-full"
                array={shortStackArray}
            >
                Built with:
            </TechList>
        </>

    );
}