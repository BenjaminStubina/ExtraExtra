import { useState } from "react";
import { pubs as pubArray } from '../../utils/constants';
import SourceList from "../../Components/SourceList/SourceList";
import PageTitle from "../../components/PageTitle/PageTitle";
import ArticleGrid from "../../components/ArticleGrid/ArticleGrid";

export default function Home() {

    // useState for the activeSource - by default it is set to All Sources
    const [activeSource, setActiveSource] = useState(pubArray[0].publication);

    const style = {
        main: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            marginTop: '1.5rem',
            marginBottom: '1.5rem',
        }
    };

    return (

        <main style={style.main}>
            <PageTitle>
                Bridging the Gap in Canada's News Landscape
            </PageTitle>
            <SourceList
                activeSource={activeSource}
                setActiveSource={setActiveSource}
            />
            <ArticleGrid
                activeSource={activeSource}
            />
        </main>

    );
}