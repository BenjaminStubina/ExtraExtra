import Source from '../Source/Source';
import SOURCES from '../../Constants/sources';

const SourceSwapper = ({ activeSource, setActiveSource }) => {
    return (
        <section className='flex gap-[1rem] md:gap-[3rem] xl:gap-[4rem] my-[1rem]'>
            {SOURCES.map((source) => {
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