import { pubs as pubArray } from "../../data/constants";

export default function SourceList({}) {
  return (
    <section
      className={`min-w-[340px] flex _flex-wrap md:flex-wrap lg:flex-nowrap justify-center p-2 m-2 gap-4 lg:mx-0 xl:gap-6`}
    >
      {pubArray.map((source) => {
        return <SourceItem key={source.id} source={source} />;
      })}
    </section>
  );
}

function SourceItem({ source }) {
  return (
    <button
      className={`pb-1 border-b-4 border-transparent hover:border-red-500 hover:animate-active ${`md:basis-1/6  md:pb-0 md:flex flex-col cursor-pointer justify-between items-center gap-2 _md:w-max lg:basis-auto`}`}
    >
      <img
        src={source.image}
        alt={source.title}
        width={`64`}
        height={`64`}
        className={``}
      />
      <p className={`hidden ${`md:inline capitalize font-medium _w-max`}`}>
        {source.title}
      </p>
    </button>
  );
}
