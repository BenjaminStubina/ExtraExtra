import Source from '../Source/Source';
import PUBLICATIONS from '../../Constants/publications';

const SourceSwapper = ({ activeSource, setActiveSource }) => {

    // Component maps over all of the publications from the constants file 
    return (
        <section className='flex gap-[1rem] md:gap-[2.65rem] lg:gap-[4rem] xl:gap-[4rem] mb-[1rem] md:mb-[1.25rem] lg:mb-[1.75rem]'>
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