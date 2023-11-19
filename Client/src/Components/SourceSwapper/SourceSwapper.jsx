import Source from '../Source/Source';
import PUBLICATIONS from '../../Constants/publications';

const SourceSwapper = ({ activeSource, setActiveSource }) => {

    // Component maps over all of the publications from the constants file 
    return (
        <section className='flex mt-2 gap-2 1sm:gap-4 2sm:gap-5 2lg:gap-[3rem] [4rem] mb-[0.5rem] md:mb-[1.25rem] lg:mb-[1.75rem]'>
            {PUBLICATIONS.map((source) => {
                return (
                    <Source 
                    key={source.name}
                    setActiveSource={setActiveSource}
                    activeSource={activeSource}
                    source={source}
                    />
                )
            })}
        </section>
    )
}

export default SourceSwapper;