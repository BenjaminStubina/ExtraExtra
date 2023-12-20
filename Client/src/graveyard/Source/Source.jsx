const Source = ({ setActiveSource, activeSource, source }) => {

    // On click function to update the activeSource state to the new selected one
    const handleClick = () => {
        setActiveSource(source.publication);
    };

    return (
        <div
            className="Xgrow-1 shrink-0 ml-auto mr-auto flex flex-col cursor-pointer justify-between items-center gap-1 md:p-1 md:m-1 lg:p-2 lg:m-2">
            <img
                src={source.image}
                alt={source.title}
                onClick={handleClick}
                className={`w-12 md:w-16 lg:w-20 border-b-4 ${activeSource === source.publication ? ' border-red-500' : 'border-transparent Xhover:border-red-500 hover:animate-active'}`}
            />
            <p
                className="hidden md:inline-flex capitalize font-sans font-medium"
            >
                {source.title}
            </p>
        </div>
    );
};

export default Source;