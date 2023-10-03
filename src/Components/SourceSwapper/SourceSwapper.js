import Global from '../../Assets/Images/SourceLogos/Global.png';
import PUBLICATIONS from '../../Constants/publications';

const SourceSwapper = ({ activeSource, setActiveSource }) => {  

    return (
        <form>
            <input type="radio" name="source" checked={activeSource === PUBLICATIONS.GLOBAL_TORONTO} onClick={() => setActiveSource(PUBLICATIONS.GLOBAL_TORONTO)}/> Global Toronto
            <input type="radio" name="source" checked={activeSource === PUBLICATIONS.GLOBE_AND_MAIL} onClick={() => setActiveSource(PUBLICATIONS.GLOBE_AND_MAIL)}/> The Globe and Mail
            <input type="radio" name="source" checked={activeSource === PUBLICATIONS.TORONTO_LIFE} onClick={() => setActiveSource(PUBLICATIONS.TORONTO_LIFE)}/> Toronto Life
            <input type="radio" name="source" checked={activeSource === PUBLICATIONS.WALRUS} onClick={() => setActiveSource(PUBLICATIONS.WALRUS)}/> The Walrus
            <input type="radio" name="source" checked={activeSource === PUBLICATIONS.CANADALAND} onClick={() => setActiveSource(PUBLICATIONS.CANADALAND)}/> Canadaland
            <input type="radio" name="source" checked={activeSource === PUBLICATIONS.NOW_TORONTO} onClick={() => setActiveSource(PUBLICATIONS.NOW_TORONTO)}/> Now Toronto
        </form>
    )
}

export default SourceSwapper;