import { resources as resourceArray } from "../../data/constants";
import SpotifyEmbed from "../../Components/ui/SpotifyEmbed";
import ResourceList from "./ResourceList";
import PageTitle from "../../Components/ui/PageTitle";

export default function Resources({ props, children, ...rest }) {
  return (
    <div className="flex flex-col gap-4 md:gap-6">
      <PageTitle className={`underline text-[18px] md:text-[24px]`}>Resources</PageTitle>
      <p className="text-[16px] md:text-[18px] lg:text-[22px]">
        This list is updated regularly to inform visitors of the latest developments to the Online News Act
      </p>
      <SpotifyEmbed type="playlist" src="4FqtZqnOi0apW2rq86g8a6" />
      <ResourceList array={resourceArray} />
    </div>
  );
}
