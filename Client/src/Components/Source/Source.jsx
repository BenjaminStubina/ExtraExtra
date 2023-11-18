const Source = ({ setActiveSource, activeSource, source }) => {

    // Function determines what style to apply to the publisher in the SourceSwapper
    const activeClassStyle = () => {
        // If the source is also the active source apply the unique style
        if (activeSource === source.publication) {
            return 'self-center border-b-4 border-red-500 w-[40px] 1sm:w-[50px] 2lg:w-[75px] h-[50px] 1sm:h-[59px] 2lg:h-[84px] pb-[5px]';
        }
        // Else apply the basic style for non-active sources
        else {
            return 'self-center border-b-4 border-transparent hover:animate-active w-[40px] 1sm:w-[50px] 2lg:w-[75px] h-[50px] 1sm:h-[59px] 2lg:h-[84px] pb-[5px]';
        }
    }

    // On click function to update the activeSource state to the new selected one
    const handleClick = () => {
        setActiveSource(source.publication);
    }

    return (
        <div className="flex flex-col">
            <p className="hidden 2sm:flex text-center 2sm:text-[10px] 2lg:text-[16px] 2sm:w-auto 2sm:h-[20px] 2lg:h-[32px]">
                {source.title}
            </p>
            <img src={source.image} alt={source.title} title={source.title} onClick={handleClick} className={activeClassStyle(source)}/>
        </div>
    );
};

export default Source;