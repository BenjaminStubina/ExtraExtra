import Global from '../../Assets/Images/SourceLogos/Global.png';
import { useState } from 'react';

const SourceSwapper = () => {

    const [activeSource, setActiveSource] = useState(Global);  

    return (
        <section className='mt-4'>
            <ul className='flex gap-[25px]'>
                <li className='p-1 rounded-[15px] bg-gray-400'>
                    <img className='w-[50px]' src={Global}/>
                </li>
            </ul>
        </section>
    )
}

export default SourceSwapper;