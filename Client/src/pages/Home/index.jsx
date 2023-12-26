import { useState } from "react";
import { pubs as pubArray } from '../../data/constants';
import SourceList from "./SourceList";
import ArticleGrid from "./ArticleGrid";
import PageTitle from "../../components/ui/PageTitle";

export default function Home() {

    // useState for the activeSource - by default it is set to All Sources
    const [activeSource, setActiveSource] = useState(pubArray[0].source);

    // const style = {
    //     main: {
    //         display: 'flex',
    //         flexDirection: 'column',
    //         alignItems: 'center',
    //         width: '100%',
    //         marginTop: '1.5rem',
    //         marginBottom: '1.5rem',
    //     }
    // };

    return (

        //         <main className={`container`}
        //             //  style={style.main}
        // >
        <>
            <PageTitle className={`italic text-6xl text-center`}>NEWS BANNED</PageTitle>

            <SourceList
                activeSource={activeSource}
                setActiveSource={setActiveSource}
            />
            <ArticleGrid
                activeSource={activeSource}
            />
        </>
        // </main>

    );
}