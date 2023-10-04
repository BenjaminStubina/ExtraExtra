import Source from '../Source/Source';
import SOURCES from '../../Constants/sources';

const SourceSwapper = ({ activeSource, setActiveSource }) => {
    return (
        <section className='flex gap-[2rem] my-[1rem]'>
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