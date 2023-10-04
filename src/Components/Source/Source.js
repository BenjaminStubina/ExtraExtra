const Source = ({ setActiveSource, activeSource, source }) => {

    const activeClassStyle = () => {
        if (activeSource === source.publication) {
            return 'w-[50px] border-solid border-2 border-black';
        }
        else {
            return 'w-[50px]';
        }
    }

    const handleClick = () => {
        activeClassStyle();
        setActiveSource(source.publication);
    }

    return (
        <img src={source.image} alt={source.title} title={source.title} onClick={handleClick} className={activeClassStyle(source)}/>
    );
};

export default Source;