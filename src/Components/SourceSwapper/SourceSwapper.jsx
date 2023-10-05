import Source from '../Source/Source';
import PUBLICATIONS from '../../Constants/publications';

const SourceSwapper = ({ activeSource, setActiveSource }) => {

    // Component maps over all of the publications from the constants file 
    return (
        <section className='flex gap-[1rem] md:gap-[3rem] xl:gap-[4rem] my-[1rem]'>
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