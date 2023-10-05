import './Source.scss';

const Source = ({ setActiveSource, activeSource, source }) => {

    const activeClassStyle = () => {
        if (activeSource === source.publication) {
            return 'activeAnimation w-[35px] md:w-[50px] lg:w-[75px]';
        }
        else {
            return 'w-[35px] md:w-[50px] lg:w-[75px]';
        }
    }

    const handleClick = () => {
        setActiveSource(source.publication);
    }

    return (
        <img src={source.image} alt={source.title} title={source.title} onClick={handleClick} className={activeClassStyle(source)}/>
    );
};

export default Source;