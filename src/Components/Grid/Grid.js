import './Grid.css';
import ArticleList from '../ArticleList/ArticleList';

const Grid = () => {

    return (
        <section className="w-[100%] max-w-[1000px] flex-grow px-[20px] my-4">
            <div className="grid grid-props gap-3 justify-center">
                <ArticleList/>
            </div>
        </section>
    )
}

export default Grid;