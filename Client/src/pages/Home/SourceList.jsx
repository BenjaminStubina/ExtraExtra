import { pubs as pubArray } from '../../data/constants';

export default function SourceList({ activeSource, setActiveSource }) {

    return (
        <section className={`flex _flex-wrap justify-center p-2 m-2 gap-4 lg:gap-6`}>
            {pubArray.map((source) => {
                return (
                    <SourceItem
                        key={source.id}
                        setActiveSource={setActiveSource}
                        activeSource={activeSource}
                        source={source}
                    />
                );
            })}
        </section>
    );
};

function SourceItem({ setActiveSource, activeSource, source }) {

    // On click function to update the activeSource state to the new selected one
    const handleClick = () => {
        setActiveSource(source.source);
    };

    return (
        <div
            className={`shrink-0 ml-auto mr-auto flex flex-col cursor-pointer justify-between items-center _gap-1 _md:p-1 _md:m-1 _lg:p-2 _lg:m-2`}>
            <img
                src={source.image}
                alt={source.title}
                onClick={handleClick}
                className={`w-12 md:w-16 lg:w-20 pb-4 border-b-4 ${activeSource === source.source ? ' border-red-500' : 'border-transparent hover:border-red-500 hover:animate-active'}`}
            />
            <p
                className={`hidden md:inline-flex capitalize font-medium`}
            >
                {source.title}
            </p>
        </div>
    );
};
