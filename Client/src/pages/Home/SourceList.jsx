/*
! Notes !
* The animation is refactored to scale icon only.
* It loses some fun but it feels less distracting.
* I'm happy to revert or change.
* Legacy utility classes are down there, commented out.
TODO split <nav> into 2+ <ul>'s for direct styling:
TODO -- 1. group === 'filter' ... AND ...
TODO -- 2. group !== 'filter' ... OR ...
TODO -- 2b. [group === 'national'] and [group === 'toronto']
 */

import { pubs as pubArray } from "../../data/constants";

export default function SourceList({ onClick, filter, group }) {
  return (
    <nav aria-label="source filter" className={`my-2 md:mt-4`}>
      <ul
        className={`overflow-x-auto no-scrollbar flex md:flex-wrap lg:flex-nowrap`}
      >
        {pubArray.map((sourceObj) => {
          return (
            <li
              key={sourceObj.id}
              className={`flex-1 mx-1 ${`group`} ${`md:basis-[18%] lg:basis-auto`}`}
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
      // className={`hover:border-red-500 hover:animate-active`}
      onClick={onClick}
      className={`w-[4.5rem] cursor-pointer pt-2 pb-2 xs:my-2 border-b-4 border-transparent ${
        isActive && source.group !== "filter"
          ? ""
          : isActive && source.group === "filter"
          ? ""
          : ""
      } ${`group-hover:border-red-500`} ${`md:border-none md:w-full md:py-0 md:flex flex-col justify-between items-center gap-2`} `}
    >
      <img
        src={source.image}
        alt={source.title}
        width={`64`}
        height={`64`}
        // className={``}
        className={`w-[4.5rem] md:w-16 group-hover:animate-active group-hover:opacity-90 ${
          isActive && source.group !== "filter"
            ? "opacity-100"
            : isActive && source.group === "filter"
            ? " opacity-90"
            : "opacity-30"
        }`}
      />
      <p
        className={`hidden ${`md:inline min-w-max capitalize font-medium border-b-4 border-transparent `} ${`group-hover:border-red-500 group-hover:border-opacity-80`} ${
          isActive && source.group !== "filter"
            ? "border-red-500"
            : isActive && source.group === "filter"
            ? "border-red-500"
            : ""
        }`}
      >
        {source.title}
      </p>
    </button>
  );
}
