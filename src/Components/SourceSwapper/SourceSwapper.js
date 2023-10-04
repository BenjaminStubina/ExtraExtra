import Global from '../../Assets/Images/SourceLogos/Global.png';
import Globe from '../../Assets/Images/SourceLogos/Globe.png';
import Now from '../../Assets/Images/SourceLogos/Now.png';
import CLand from '../../Assets/Images/SourceLogos/CLand.svg';
import TLife from '../../Assets/Images/SourceLogos/TLife.jpg';
import Walrus from '../../Assets/Images/SourceLogos/Walrus.png';
import PUBLICATIONS from '../../Constants/publications';

const SourceSwapper = ({ activeSource, setActiveSource }) => {

    return (
        <section className='flex gap-[2rem] my-[1rem]'>
            <img src={Global} title='Global Toronto' onClick={() => setActiveSource(PUBLICATIONS.GLOBAL_TORONTO)} className='w-[50px]'/>
            <img src={Globe} title='The Globe and Mail' onClick={() => setActiveSource(PUBLICATIONS.GLOBE_AND_MAIL)} className='w-[50px]'/> 
            <img src={TLife} title='Toronto Life' onClick={() => setActiveSource(PUBLICATIONS.TORONTO_LIFE)} className='w-[50px]'/> 
            <img src={Walrus} title='The Walrus' onClick={() => setActiveSource(PUBLICATIONS.WALRUS)} className='w-[50px]'/> 
            <img src={CLand} title='Canadaland' onClick={() => setActiveSource(PUBLICATIONS.CANADALAND)} className='w-[50px]'/> 
            <img src={Now} title='Now Toronto' onClick={() => setActiveSource(PUBLICATIONS.NOW_TORONTO)} className='w-[50px]'/> 
        </section>
    )
}

export default SourceSwapper;