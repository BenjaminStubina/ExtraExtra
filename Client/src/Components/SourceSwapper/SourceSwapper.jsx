import Source from '../Source/Source';
import { pubs as pubArray } from '../../utils/constants';

const SourceSwapper = ({ activeSource, setActiveSource }) => {

    // Component maps over all of the publications from the constants file
    return (
        <section className='flex flex-wrap w-full justify-center mt-2 gap-2 xs:gap-4 md:gap-5 lg:gap-[3rem] [4rem] mb-[0.5rem] md:mb-[1.25rem] lg:mb-[1.75rem]'>
            {pubArray.map((source) => {
                return (
                    <Source
                        key={source.name}
                        setActiveSource={setActiveSource}
                        activeSource={activeSource}
                        source={source}
                    />
                );
            })}
        </section>
    );
};

export default SourceSwapper;