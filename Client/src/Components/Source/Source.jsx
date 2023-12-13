const Source = ({ setActiveSource, activeSource, source }) => {

    // Function determines what style to apply to the publisher in the SourceSwapper
    const activeClassStyle = () => {
        // If the source is also the active source apply the unique style
        if (activeSource === source.publication) {
            return 'self-center border-b-4 border-red-500 w-[40px] xs:w-[50px] lg:w-[75px] h-[50px] xs:h-[59px] lg:h-[84px] pb-[5px]';
        }
        // Else apply the basic style for non-active sources
        else {
            return 'self-center border-b-4 border-transparent hover:animate-active w-[40px] xs:w-[50px] lg:w-[75px] h-[50px] xs:h-[59px] lg:h-[84px] pb-[5px]';
        }
    };

    // On click function to update the activeSource state to the new selected one
    const handleClick = () => {
        setActiveSource(source.publication);
    };

    return (
        <div className="min-w-0 flex flex-col gap-1 md:gap-2 cursor-pointer">
            <img src={source.image} alt={source.title} title={source.title} onClick={handleClick} className={activeClassStyle(source)} />
            <p className="hidden md:flex text-center md:text-[10px] lg:text-[16px] md:w-auto md:h-[20px] lg:h-[32px]">
                {source.title}
            </p>
        </div>
    );
};

export default Source;