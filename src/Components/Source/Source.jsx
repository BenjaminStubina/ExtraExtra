const Source = ({ setActiveSource, activeSource, source }) => {

    // Function determines what style to apply to the publisher in the SourceSwapper
    const activeClassStyle = () => {
        // If the source is also the active source apply the unique style
        if (activeSource === source.publication) {
            return 'border-b-4 border-red-500 w-[35px] md:w-[50px] lg:w-[75px] pb-[5px]';
        }
        // Else apply the basic style for non-active sources
        else {
            return 'hover:animate-active w-[35px] md:w-[50px] lg:w-[75px] pb-[5px]';
        }
    }

    // On click function to update the activeSource state to the new selected one
    const handleClick = () => {
        setActiveSource(source.publication);
    }

    return (
        <img src={source.image} alt={source.title} title={source.title} onClick={handleClick} className={activeClassStyle(source)}/>
    );
};

export default Source;