import { resources as resourceArray } from "../../data/constants";
import SpotifyEmbed from '../../components/ui/SpotifyEmbed';
import ResourceList from "./ResourceList";
import PageTitle from "../../components/ui/PageTitle";

export default function Resources({ props, children, ...rest }) {

    return (
        <div>
            <PageTitle className={`underline`}>Resources</PageTitle>
            <ResourceList
                array={resourceArray}
            />

            <SpotifyEmbed
                type='playlist'
                src='4FqtZqnOi0apW2rq86g8a6'
            />
        </div>

    );
}
