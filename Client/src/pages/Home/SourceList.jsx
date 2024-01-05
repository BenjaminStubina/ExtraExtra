// * NOTES
// * NOTES
// ! The animation is refactored to scale icon only.
// ! It loses some fun but it feels less distracting.
// ! I'm happy to revert or change.
// ! Legacy utility classes are down there, commented out.
// TODO consider splitting the <nav> into 2+ <ul>'s for direct styling:
// TODO -- 1. group === 'filter' ... AND ...
// TODO -- 2. group !== 'filter' ... OR ...
// TODO -- 2b. [group === 'national'] and [group === 'toronto']
// * NOTES
// * NOTES

import { pubs as pubArray } from "../../data/constants";

export default function SourceList({ onClick, filter, group }) {
  return (
    <nav aria-label="source filter" className={`my-2 md:mt-4`}>
      <ul className="flex md:flex-wrap lg:flex-nowrap ">
        {pubArray.map((sourceObj) => {
          return (
            <li
              key={sourceObj.id}
              className={`flex-1 group mx-1 ${`md:basis-[18%] lg:basis-auto`}`}
            >
              <SourceItem
                source={sourceObj}
                onClick={() => onClick(sourceObj.id, sourceObj.group)}
                isActive={
                  filter === sourceObj.id || group.includes(sourceObj.id)
                }
              />
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

function SourceItem({ source, onClick, isActive }) {
  return (
    <button
      // className={`pb-1 border-b-4 border-transparent hover:border-red-500 hover:animate-active ${`md:basis-1/6  md:pb-0 md:flex flex-col cursor-pointer justify-between items-center gap-2 lg:basis-auto`}`}
      onClick={onClick}
      className={`w-full cursor-pointer pb-1 xs:my-2 border-b-4 border-transparent group-hover:border-red-500 ${`md:pb-0 md:flex flex-col justify-between items-center gap-2`} ${
        isActive ? "bg-green-500" : ""
      }`}
    >
      <img
        src={source.image}
        alt={source.title}
        width={`64`}
        height={`64`}
        // className={``}
        className={`group-hover:animate-active`}
      />
      <p className={`hidden ${`md:inline min-w-max capitalize font-medium`}`}>
        {source.title}
      </p>
    </button>
  );
}
